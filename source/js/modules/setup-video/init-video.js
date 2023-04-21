const mediaLink = document.querySelector('[data-media="link"]');
const mediaButton = document.querySelector('[data-media="button"]');
const mediaImg = document.querySelector('[data-media="img"]');

const initVideo = () => {
  mediaLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    mediaButton.remove();
    mediaImg.remove();
    mediaLink.classList.remove('gym__video--link');

    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
    iframe.classList.add('gym__iframe');

    mediaLink.append(iframe);
  });
};

export {
  initVideo
};
