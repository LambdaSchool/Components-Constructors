let dropdown = document.querySelectorAll(".Dropdown");

class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".Dropdown__button");
        this.content = this.element.querySelector(".Dropdown__content");
        this.button.addEventListener("click", () => {
            this.content.classList.toggle("Dropdown__content--reveal");
        });
    }
}

dropdown.forEach(item => {
    return new Dropdown(item);
})
