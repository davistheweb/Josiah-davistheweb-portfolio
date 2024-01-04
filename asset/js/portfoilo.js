// Switch theme

const theme = document.getElementById("theme");
const themeIcon = document.getElementById("themeIcon");

theme.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.innerHTML = '<i class="ri-sun-line"></i>';
  } else {
    themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
};

// active menu

const sections = document.querySelectorAll('section');
const navLists = document.querySelectorAll('header ul a');

window.onscroll = () => {
	sections.forEach(sec => {
		const top = window.scrollY;
		const offset = sec.offsetTop;
		const height = sec.offsetHeight;
		const id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLists.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
			});
		
	};
	});
};

// function: Text Generate

consoleText(['Software Developer','Cyber Security Ethical Hacker', ], 'name',);
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



// scroll reveal

ScrollReveal({ 
  distance:"90px",
  duration:2000,
  delay:200,
  reset: true ,
});


ScrollReveal().reveal('.home-detail,.coding,.container,.contact-i', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });

