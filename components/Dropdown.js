const list = document.querySelector('.box__dropdown__list');
const toggle = document.querySelector('.box__dropdown__toggle');
class Dropdown {
    constructor(element) {
        this.element = element

        this.element.addEventListener('click', () => {this.toggleList()})

    }
    toggleList() {
        list.classList.toggle('toggleList')
    }
}

toggler = new Dropdown(toggle);