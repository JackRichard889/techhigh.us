var panel_i = 0;
let panels = [{
  index: 0,
  title: "Worcester<br>Technical<br>High School",
  background: "https://lpaa.com/wp-content/uploads/2006/10/Worcester-Tech.jpg",
  links: [
    {
      text: "About Our School",
      href: "#"
    },
    {
      text: "Technical Areas",
      href: "#"
    },
    {
      text: "Academics",
      href: "#"
    },
    {
      text: "Public Services",
      href: "#"
    },
    {
      text: "Student Life",
      href: "#"
    },
    {
      text: "Contact Us",
      href: "#"
    }
  ]
}, {
  index: 1,
  title: "Our Mission",
  background: "https://res.cloudinary.com/dxm7ycyxz/image/upload/v1668016973/2022/06/IMG_5222-5-scaled_mhjmva.jpg",
  links: [
    {
      text: "Learn About Our School",
      href: "#"
    },
    {
      text: "Learn About Technical Areas",
      href: "#"
    },
    {
      text: "Learn About Academics",
      href: "#"
    }
  ]
}, {
  index: 2,
  title: "Technical Areas",
  background: "https://res.cloudinary.com/dxm7ycyxz/image/upload/v1668016966/2022/05/07C7A651-2D1F-43F6-BE63-383639091C84_biukvq.jpg",
  links: [
    {
      text: "Alden Academy",
      href: "#"
    },
    {
      text: "Allied Health and Human Services Academy",
      href: "#"
    },
    {
      text: "Coghlin Construction Academy",
      href: "#"
    },
    {
      text: "IT and Business Services Academy",
      href: "#"
    },
    {
      text: "View All Programs",
      href: "#"
    }
  ]
}, {
  index: 3,
  title: "",
  background: "https://lpaa.com/wp-content/uploads/2006/10/Worcester-Tech.jpg",
  links: [
    {
      text: "Worcester Tech on Twitter",
      href: "#"
    },
    {
      text: "Worcester Public Schools on Twitter",
      href: "#"
    },
    {
      text: "Programming & Web Development Shop",
      href: "#"
    },
    {
      text: "Story Behind This Design",
      href: "#"
    },
    {
      text: "Our Privacy Policy",
      href: "#"
    },
    {
      text: "Contact Us",
      href: "#"
    }
  ]
}];

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const mainBG = document.querySelector(':root');
const scrollArrow = $('#down_prompt');

$(document).on('scroll', () => {
  if (document.documentElement.scrollTop == 0) scrollArrow.fadeIn();
  else scrollArrow.fadeOut();

  let active = $('.container:not(.fixed):visible').sort(function(a, b) {
    return Math.abs($(a).offset().top - $(window).scrollTop()) - Math.abs($(b).offset().top - $(window).scrollTop());
  });

  let index = parseInt($(active).data('index'), 10);

  if (panel_i == index) return;

  panel_i = index;
  let active_data = panels[panel_i];

  let heading = $('#panel_heading');
  let links = $('#panel_ul');

  if ($( window ).width() > 700) {
    heading.fadeOut();
    links.fadeOut();

    sleep(750).then(() => {
      heading.html(active_data.title);
      links.html(active_data.links.map(l => `<li>${l.text} <i class="fa-solid fa-angle-right"></i></li>`).join(''));

      heading.fadeIn();
      links.fadeIn();
    });
  }

  mainBG.style.setProperty("--wths-home-background", `url('${active_data.background}')`);
});