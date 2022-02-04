import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['click', 'touchstart'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, events, () => {
      this.classList.remove('active');
    });
  }

  dropDownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
