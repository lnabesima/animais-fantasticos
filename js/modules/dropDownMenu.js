import outsideClick from './outsideClick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, classe, events) {
    this.dropDownMenus = document.querySelectorAll(dropdownMenus);
    this.classe = classe;
    if (this.events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    event.currentTarget.classList.add(this.classe);
    outsideClick(event.currentTarget, this.events, () => {
      event.currentTarget.classList.remove(this.classe);
    });
  }

  addDropdownMenuEvent() {
    this.dropDownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropDownMenus.lenght) {
      this.addDropdownMenuEvent();
    }

    return this;
  }
}
