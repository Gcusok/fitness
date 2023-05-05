const initCoachesGallery = () => {
  const coaches = new Swiper('.slider', {
    direction: 'horizontal',
    sliderPerGroup: 1,
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    freeMode: 'true',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    a11y: {
      id: 1,
    },
  });
  return coaches;
};

export {
  initCoachesGallery
};
