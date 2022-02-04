export default function initNumberAnimation() {
  const observerTarget = document.querySelector('.numeros');
  let observer;


  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero]');
    numbers.forEach(number => {
      let start = 0;
      const total = +number.innerText;
      const increment = Math.floor(total * 0.007);

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;

        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animateNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
