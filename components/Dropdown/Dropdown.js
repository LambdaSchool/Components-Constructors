let btn = document.querySelector('.Dropdown__btn');
let dropdown = document.querySelector('.Dropdown__list');


// btn.addEventListener('click', () => {
//     dropdown.classList.toggle('Dropdown--active');
// })

// ES6 Syntax
class Dropdown {
    constructor(button, dropdownMenu) {
        this.button = button;
        this.dropdownMenu = dropdownMenu;
        this.button.addEventListener('click', () => {this.showDropdown()})  
    }
    showDropdown() {
        this.dropdownMenu.classList.toggle('Dropdown--active');
    }
}

newBtn = new Dropdown(btn, dropdown);

