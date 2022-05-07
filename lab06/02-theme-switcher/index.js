/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const selectors = ['#default', '#ocean', '#desert', '#high-contrast']

selectors.forEach( (selector) => {
   document.querySelector(selector).addEventListener('click', (event) => {
      document.body.className = event.target.id == 'default' ? '' : event.target.id;
   });
});