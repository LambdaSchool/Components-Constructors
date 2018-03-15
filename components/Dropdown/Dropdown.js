class Dropdown {
    constructor(element) {
        this.menu = element;
        this.button = document.querySelector('.Dropdown')
        this.button.addEventListener("click", () => {
            this.expand_menu();
        });
    }
    expand_menu() {
        this.menu.style.display === 'none' 
            ? this.menu.style.display = 'flex' 
            : this.menu.style.display = 'none';
    }
}

let menu = document.querySelector(".Dropdown__menu");
const dropdown = new Dropdown(menu);
