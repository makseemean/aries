// Scripts for Program page

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