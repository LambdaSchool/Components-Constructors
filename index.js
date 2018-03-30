const dropdown = document.querySelector('.Dropdown');

class Dropdown {
    constructor(element){
        this.element=element;
        this.element.addEventListener('click', () => {this.toggleDropdown()})
    }
    toggleDropdown(){
        this.element.classList.toggle('Dropdown--active');
    }
}

dropdown = new Dropdown(dropdown);

// ________ TABS ________

let buttons = document.querySelectorAll('.Tabs__link');

class Button {
    constructor(element){
        this.element = element;
        this.dataTab = element.dataset.tab;
        console.log(this.dataTab);
        this.element.addEventListener('click', () => {this.buttonClick()});
        this.box = document.querySelector(`.Tabs__item[data-tab="${this.dataTab}"]`);
        this.box = new Box(this.box);
    }
    buttonClick() {
        this.box.toggleBox();
    }
}

class Box {
    constructor(element) {
        this.element = element;
    }
    toggleBox() {
        this.element.classList.toggle('Tabs__item-selected');
    }
}

buttons = Array.from(buttons).map(button => new Button(button));