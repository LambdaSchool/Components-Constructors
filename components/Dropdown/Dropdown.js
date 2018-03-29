class Dropdown {
    constructor() {
      this.dropdownButton = document.querySelector(".Dropdown__buttonTitle");
      this.dropdownMenu = document.querySelector(".Dropdown__menu");
  
      this.dropdownButton.addEventListener("click", this.showMenu.bind(this));
    }
  
    // toggle showing Dropdown menu
    showMenu(event) {
      this.dropdownMenu.classList.toggle("Dropdown__menu--show");
    }
  }
  
  // fires Dropdown on page load
  window.onload = () => new Dropdown();