import {
  iosVhFix
} from './utils/ios-vh-fix';
import {
  initModals
} from './modules/modals/init-modals';
import {
  Form
} from './modules/form-validate/form';
import {
  initVideo
} from './modules/setup-video/init-video';
import {
  initTabs
} from './modules/tabs/init-tabs';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
  initVideo();
  initTabs();

  // const coaches = new Swiper('.swiper', {
  //   direction: 'horizontal',
  //   sliderPerGroup: 1,
  //   slidesPerView: 4,
  //   spaceBetween: 40,
  //   loop: true,
  //   freeMode: 'true',
  //   wrapperClass: 'swiper-wrapper',
  //   slideClass: 'swiper-slide',
  //   navigation: {
  //     nextEl: '.slider__button--next',
  //     prevEl: '.slider__button--prev',
  //   },
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     767: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     1366: {
  //       slidesPerView: 3,
  //       // spaceBetween: 40,
  //     },
  //   },
  // });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
