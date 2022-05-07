// lol

const selectors = ['h1', '.content']

const makeBigger = () => {
   selectors.forEach( selector => {
      fontSize = parseFloat(document.querySelector(selector).style.fontSize.slice(0, -2));
      if (!fontSize) fontSize = 2;
   
      fontSize *= 1.2;
      document.querySelector(selector).style.fontSize = fontSize + 'em';
   })
}

const makeSmaller = () => {
   selectors.forEach( selector => {
      fontSize = parseFloat(document.querySelector(selector).style.fontSize.slice(0, -2));
      if (!fontSize) fontSize = 2;
   
      fontSize /= 1.2;
      console.log(fontSize);
      document.querySelector(selector).style.fontSize = fontSize + 'em';
   })
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);