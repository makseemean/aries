// Scripts for Program page

// Scroll bar width

const div = document.createElement('div');

div.style.cssText = 'overflow-y: scroll; height: 50px; width: 50px;';

document.body.append(div);

const scrollWidth = div.offsetWidth - div.clientWidth;

console.log(scrollWidth)

div.remove();

// Aside menu

function openMenu() {
   asideMenu.classList.add('aside-menu_active');
   overlay.classList.add('overlay_active');
   logo.classList.add('logo_hide');
   document.body.style.cssText = `overflow: hidden; padding-right: ${scrollWidth}px`;
};

function closeMenu() {
   asideMenu.classList.remove('aside-menu_active');
   overlay.classList.remove('overlay_active');
   logo.classList.remove('logo_hide');
   document.body.style.cssText = 'overflow: auto; padding-right: 0`';
};

const menuBtn = document.querySelector('.aside-menu-btn'),
   menuClose = document.querySelector('.aside-menu__close'),
   asideMenu = document.querySelector('.aside-menu'),
   overlay = document.querySelector('.overlay'),
   logo = document.querySelector('.logo');

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