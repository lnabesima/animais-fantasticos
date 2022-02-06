export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  // toggle the class `active` when clicked
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // add click events to accordion list
  addAccordionEvent() {
    this.accordionList.forEach(item => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // initiate the function
  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
    }
  }
}
