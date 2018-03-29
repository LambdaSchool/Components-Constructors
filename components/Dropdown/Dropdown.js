class Dropdown {
  constructor() {
    this.DropdownButton = document.querySelector('.Dropdown__button');
    this.DropdownMenu = document.querySelector('.Dropdown__menu');

    this.DropdownButton.addEventListener('click', this.toggleMenu.bind(this));
  }
  toggleMenu(event) {
    this.DropdownMenu.classList.toggle('Dropdown__menu--show');
  }
}

new Dropdown();