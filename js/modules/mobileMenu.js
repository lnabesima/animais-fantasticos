import outsideClick from './outsideClick.js';

const events = ['click', 'touchstart'];

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuButton.classList.add('active');
    menuList.classList.add('active');

    outsideClick(menuList, events, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    events.forEach(userEvent => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
