import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['click', 'touchstart'];

  dropDownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, events, () => {
      this.classList.remove('active');
    });
  }
}
