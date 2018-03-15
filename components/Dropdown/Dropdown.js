class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".Dropdown__button");

        this.button.addEventListener("click", () => {
            this.toggling();
        });
    }

    toggling() {
        this.element.classList.toggle("Dropdown--box");
    }
}

let drop = new Dropdown(document.querySelector(".Dropdown"));
