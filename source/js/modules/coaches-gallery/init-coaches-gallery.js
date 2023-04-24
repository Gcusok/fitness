const swiper = new Swiper('.slider__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  wrapperClass: 'slider__swiper-wrapper',
  slideClass: 'slider__slide',
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});
