// Scripts for Program page

// Scroll bar width

const div = document.createElement('div');

div.style.cssText = 'overflow-y: scroll; height: 50px; width: 50px;';

document.body.append(div);

const scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

// Preloader

const preloader = document.querySelector('.loader');

function addBodyStyles() {
   document.body.style.cssText = `overflow: hidden; padding-right: ${scrollWidth}px`;
}

function removeBodyStyles() {
   document.body.style.cssText = 'overflow: auto; padding-right: 0`';
}

addBodyStyles();

document.body.onload = () => {
   setTimeout(() => {
      if (!preloader.classList.contains('loader_done')) {
         preloader.classList.add('loader_done');
         setTimeout(removeBodyStyles, 500);
      }
   }, 500);
}

// Aside menu

const menuBtn = document.querySelector('.aside-menu-btn'),
   menuClose = document.querySelector('.aside-menu__close'),
   asideMenu = document.querySelector('.aside-menu'),
   overlay = document.querySelector('.overlay'),
   logo = document.querySelector('.logo');

function openMenu() {
   asideMenu.classList.add('aside-menu_active');
   overlay.classList.add('overlay_active');
   logo.classList.add('logo_hide');
   addBodyStyles();
};

function closeMenu() {
   asideMenu.classList.remove('aside-menu_active');
   overlay.classList.remove('overlay_active');
   logo.classList.remove('logo_hide');
   removeBodyStyles();
};


menuBtn.addEventListener('click', () => {
   openMenu();
});

menuClose.addEventListener('click', () => {
   closeMenu();
});

overlay.addEventListener('click', (e) => {
   if (!e.target.classList.contains('aside-menu')) {
      closeMenu();
   }
});

if (document.querySelector('.program-page')) {

   // Click for details btn

   const informationOpenBtns = document.querySelectorAll('.program-startaps__item-btn'),
      informationCloseBtns = document.querySelectorAll('.program-startaps__item-close'),
      slides = document.querySelectorAll('.program-startaps__item');

   informationOpenBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
         slides.forEach(slide => slide.classList.remove('program-startaps__item_active'));
         slides[i].classList.add('program-startaps__item_active');
      });
   });

   informationCloseBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
         slides[i].classList.remove('program-startaps__item_active');
      });
   });

   // Slider

   const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         1024: {
            slidesPerView: 3,
            spaceBetween: 70,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 40,
         },
         500: {
            slidesPerView: 2,
            spaceBetween: 15,
         },
         0: {
            slidesPerView: 1,
            spaceBetween: 40,
         }
      },
   });
}

// Scroll btn

const scrollBtn = document.querySelector('.scroll-btn ');

window.addEventListener('scroll', function () {
   if (pageYOffset > 450) {
      scrollBtn.classList.add('scroll-btn_active');
   }
   else if (pageYOffset < 450) {
      scrollBtn.classList.remove('scroll-btn_active');
   }
});

scrollBtn.addEventListener('click', () => {
   window.scrollTo(0, 0);
});