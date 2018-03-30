let dropdown = document.querySelector('.Dropdown');

class Dropdown {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {this.toggleDropdown()})
    }
    toggleDropdown(){
        this.element.classList.toggle('Dropdown--active')
    }
}

dropdown = new Dropdown(dropdown);

console.log(dropdown); 