class Dropdown {
  constructor(button) {
    this.button = button;
    this.content = document.querySelector('.section__dropdownContent');
    this.button.addEventListener('click', () => {
      this.openDropdown();
    });
  }
  openDropdown() {
    this.content.classList.toggle('show');
  }
}
let button = new Dropdown(document.querySelector('.section__dropdownButton'));


