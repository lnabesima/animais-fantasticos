export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.modalContainer = document.querySelector(container);

    // the .bind method is used here to bind `this` to callback to referentiate the class' object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClickModal = this.outsideClickModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideClickModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsideClickModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
