export default function initFetchBitcoinPrice() {
  (async function fetchBitcoinPrice() {
    try {
      const bitcoin = document.querySelector('.btc-price');

      // I could store the response in a separate variable, but I choose to create the `responseJSON` variable and store the parsing to json of the result of the `fetch` promise. It does compromise the readability a little, but I just wanted to see if it was possible.

      const responseJSON = await (
        await fetch(`https://blockchain.info/ticker`)
      ).json();
      // it is.

      bitcoin.innerHTML = (100 / responseJSON.BRL.buy).toFixed(4);
    } catch (erro) {
      console.error(erro);
    }
  })();
}
