export default class TabMenu {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  activeTab(index) {
    this.tabContent.forEach(section => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addTabMenuEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    // Verifies if tabMenu and tabContent contains elements. If not, the code will not run.
    if (this.tabMenu.length && this.tabContent.length) {
      // This part will add the class 'Active' to the first node of tabContent. Was commented out because it is better to just add to the HTML.
      // this.activeTab(0)
      this.addTabMenuEvent();
    }
  }
}
