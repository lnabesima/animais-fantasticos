import NumberAnimation from './numberAnimation.js'

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.species[0].toUpperCase()}${animal.species.substring(
        1
      )}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }

    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      responseJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      
      const numberAnimation = new NumberAnimation('[data-numero]', '.numeros', 'active');
      numberAnimation.init();
    } catch (error) {
      console.error(error);
    }
  }

  fetchAnimals('./src/animaisApi.json');
}
