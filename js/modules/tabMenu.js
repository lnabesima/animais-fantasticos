export default function initTabMenu() {
  const tabMenu = document.querySelectorAll('[data-tabmenu] li');
  const tabContent = document.querySelectorAll('[data-tabcontent] section');

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('active');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('active', direcao);
  }

  // This part will add the class 'Active' to the first node of tabContent. Was commented out because it is better to just add to the HTML.
  // tabContent[0].classList.add('active');

  // Verifies if tabMenu and tabContent contains elements. If not, the code will not run.
  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
