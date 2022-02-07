import NumberAnimation from './numberAnimation.js';

export default function fetchAnimals(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species[0].toUpperCase()}${animal.species.substring(
      1
    )}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function fillAnimalData(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animateAnimalNumbers() {
    const numberAnimation = new NumberAnimation(
      '[data-numero]',
      '.numeros',
      'active'
    );
    numberAnimation.init();
  }

  async function createAnimals() {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      responseJSON.forEach(animal => fillAnimalData(animal));

      animateAnimalNumbers();
    } catch (error) {
      console.error(error);
    }
  }
  return createAnimals();
}
