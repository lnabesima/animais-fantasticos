function initTabMenu() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  //This part will add the class 'Active' to the first node of tabContent. Was commented out because it is better to just add to the HTML.
  //tabContent[0].classList.add('active');

  //Verifies if tabMenu and tabContent contains elements. If not, the code will not run.
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('active');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('active', direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  internalLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}

function initAnimateScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.4;

  if (sections.length) {
    function animateScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - halfWindow;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        }
      });
    }

    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}

initTabMenu();
initAccordion();
initSmoothScroll();
initAnimateScroll();
