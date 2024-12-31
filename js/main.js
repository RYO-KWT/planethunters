'use strict';
{
  document.addEventListener('DOMContentLoaded', () => {
    // loading
    const loading = document.querySelector('.js-l-loading');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loading.classList.add('hidden');
      }, 1000);
    });

    // audio
    const audioButton = document.querySelector('.js-audio__button');
    const audioText = document.querySelector('.js-audio__text');
    const audioIcon = document.querySelector('.js-audio__icon');
    const audio = document.querySelector('.js-audio');

    audioButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        audioText.textContent = 'sound on';
        audioText.style.color = 'var(--color-font-base)';
        audioIcon.style.fill = 'var(--color-icon-accent)';
      } else {
        audio.pause();
        audioText.textContent = 'sound off';
        audioText.style.color = 'var(--color-icon-base)';
        audioIcon.style.fill = 'var(--color-icon-base)';
      }
    });

    // sp-button
    const spButton = document.querySelector('.js-l-sp-button');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        spButton.classList.add('is-active');
      } else {
        spButton.classList.remove('is-active');
      }
    });
  });
}
