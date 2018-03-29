const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

class Dropdown {
  constructor(button, menu) {
    button.addEventListener('click', (event) => {
      menu.classList.toggle('dropdownreveal');
    });
  }
}

const dd = new Dropdown(dropdownButton, dropdownMenu);

// for testing buttons
// const dropdownButton = document.querySelector('.dropdown__button');
//
// const testingstuff = (event) => {
//   console.log('hello I am a test!')
// }
//
// dropdownButton.addEventListener('click', testingstuff);
