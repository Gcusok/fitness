const buyButton = document.querySelector('[data-button="buy"]');
const sectionSubscription = document.querySelector('[data-section="subscriptions"]');

const initSlowScroll = () => {
  buyButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    sectionSubscription.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

export {
  initSlowScroll
};
