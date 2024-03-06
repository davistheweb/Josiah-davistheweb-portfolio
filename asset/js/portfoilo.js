//hamburger
const menu = document.querySelector("#menu-bar");
const navMenu = document.querySelector(".navmenu");
const navMenus = document.querySelectorAll(".navmenu a"); // Get all links within navlist

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
});

navMenus.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open"); // Close the navbar
    menu.classList.remove("bx-x"); // Optionally remove the toggle icon's class
  });
});


/* Remove navlist when user clicks outside the menu and navlist
navlist.addEventListener("click", ()=>{
  navlist.classList.remove("open");
  
});
*/

/*(clickEvent){
  const isMenuOrNavlistClicked = menu.contains(event.target) || navlist.contains(event.target);

  if (!isMenuOrNavlistClicked && navlist.classList.contains("open")) {
    navlist.classList.remove("open");
    menu.classList.remove("bx-x");
  }
};

*/


// Switch theme

const theme = document.getElementById("theme");
const themeIcon = document.getElementById("themeIcon");

theme.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.innerHTML = '<i class="ri-sun-line"></i>';
  } else {
    themeIcon.innerHTML = '<i class="ri-moon-line"></i>';
  }
};

// active
const sections = document.querySelectorAll('section');
const navLists = document.querySelectorAll('header .navlist a');
const navMenuS = document.querySelectorAll(' .navmenu a');

window.onscroll = () => {
    sections.forEach(sect => {
        const top = window.scrollY;
        const offset = sect.offsetTop;
        const height = sect.offsetHeight;
        const id = sect.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLists.forEach(links => {
                links.classList.remove('active');
            });

            navMenuS.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header .navlist a[href*=' + id + ']').classList.add('active');
            document.querySelector('.navmenu a[href*=' + id + ']').classList.add('active');
        };
    });
};


// function: Text Generate

consoleText(['Software Developer','Certified Ethical Hacker', ], 'name',);
function consoleText(words, id, colors,) {
  if (colors === undefined) colors = ['#808080'];
  const visible = true;
  const con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden';
    } else {
      con.className = 'console-underscore';
    }
    visible = !visible;
  }, 400);
};

//Add header boxShadow 

function headerScroll() {
  const headerBoxShade = document.getElementById('header');

  if(this.scrollY >= 50) document.body.classList.add('show-header'); else document.body.classList.remove('show-header');
};

window.addEventListener('scroll', headerScroll)


/*SHOW SCROLL UP*/
function scrollTop() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollTop);

//Resume link
function redirectToLink() {
  window.location.href ="https://drive.google.com/file/d/1Om8-CX8LY5NEAIPppvaOZ1jTRwfMD4kW/view?usp=sharing";
}

document.getElementById("download-btn").addEventListener("click", redirectToLink);


// Project Swiper

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 40,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

//Footer Year/Date
function getCurrentYearAndDay() {
  const currentYear = new Date().getFullYear();
 const currentDay = new Date().getDate(); 

  return {
    year: currentYear,
    day: currentDay
  };
}

const newDateElement = document.getElementById("newdate");

const currentYearAndDay = getCurrentYearAndDay();

const formattedDate = currentYearAndDay.year + '/' + currentYearAndDay.day;
newDateElement.innerHTML = " " + formattedDate;

// scroll reveal

ScrollReveal({ 
  origin:'top',
  distance:'60px',
  duration:2000,
  delay:200,
  reset:'true',
});


ScrollReveal().reveal('.home-detail,.tool, .about-info1, .contact-i, .linkcol1,  #dirct', { origin: 'top'});
ScrollReveal().reveal('.about-img,.contact-i, .icon, .item-f, .seprator, .about-img, .abt-ft-clo', { origin: 'left' });
ScrollReveal().reveal('.skills, .item-l, .item-d, .info, .port-2, .con-btn, .ft-start, .tool-name, .fottersocials', { origin: 'right'});
ScrollReveal().reveal('.abt-name, .port-1, .container, .end, .youtube', { origin: 'bottom' });

//const button = document.getElementsByClassName ("download-btn");

//button.onclick (); {
//window.location.href='https://drive.google.com/file/d/1stIaIGL0MkS8NwzXGeaJkcVi378wv8YD/view?usp=drive_link'
//};

