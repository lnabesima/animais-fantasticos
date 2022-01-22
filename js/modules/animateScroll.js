export default function initAnimateScroll() {
  const sections = document.querySelectorAll('[data-scroll]');
  const halfWindow = window.innerHeight * 0.4;

  if (sections.length) {
    function animateScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - halfWindow;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        } else if (section.classList.contains('active')) {
          section.classList.remove('active');
        }
      });
    }

    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}
