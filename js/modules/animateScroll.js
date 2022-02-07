export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.4;

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - this.halfWindow;
      const isSectionVisible = sectionTop - this.halfWindow < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener('scroll', this.animateScroll);
  }
}
