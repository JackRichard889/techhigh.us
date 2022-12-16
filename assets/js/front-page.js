function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const mainBG = document.querySelector(':root');
const scrollArrow = $('#down_prompt');
const upArrow = $('#up_prompt');

$(document).on('scroll', () => {
  if (document.documentElement.scrollTop < 75) { scrollArrow.fadeIn(); upArrow.fadeOut(); }
  else { scrollArrow.fadeOut(); upArrow.fadeIn(); }

  let active = $('.container:not(.fixed)').sort(function(a, b) {
    return Math.abs($(a).offset().top - $(window).scrollTop()) - Math.abs($(b).offset().top - $(window).scrollTop());
  })[0];

  let data = $(active).data('image') || 'https://lpaa.com/wp-content/uploads/2006/10/Worcester-Tech.jpg';
  let heading = $(active).find('h1');
  let links = $(active).find('ul');

  let fixed_heading = $('#panel_heading');
  let fixed_ul = $('#panel_ul');

  if (fixed_heading.html() !== heading.html()) {
      fixed_heading.fadeOut();
      fixed_ul.fadeOut();

      sleep(750).then(() => {
        fixed_heading.html(heading.html());
        fixed_ul.html(links.html());

        fixed_heading.fadeIn();
        fixed_ul.fadeIn();
      });
  }

  mainBG.style.setProperty("--wths-home-background", `url('${data}')`);
});