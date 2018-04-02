// Dropdown
class Dropdown {
    constructor() {
    this.dropdownButton = document.querySelector('.dropdown__button');
    this.dropdownMenu = document.querySelector('.dropdown__menu');
    // console.log(this.dropdownMenu);

    this.dropdownButton.addEventListener('click', this.toggleMenu.bind(this));
  }
  toggleMenu(event) {
    this.dropdownMenu.classList.toggle('dropdown__menu--show');
  }
}

window.onload = () => new Dropdown();
