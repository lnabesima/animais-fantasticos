import outsideClick from './outsideClick.js';

export default class MobileMenu {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    if (this.events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMobileMenuEvents() {
    if (this.menuButton) {
      this.events.forEach(userEvent => {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      });
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMobileMenuEvents();
    }
    return this;
  }
}
