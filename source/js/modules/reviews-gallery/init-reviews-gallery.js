const initReviewsGallery = () => {
  const reviews = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    freeMode: 'true',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    disabledClass: 'reviews__button--disabled',
    followFinger: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return reviews;
};

export {
  initReviewsGallery
};
