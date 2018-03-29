let dropdown = document.querySelector(".header__dropdown");

class Dropdown {
	constructor(element) {
		this.element = element;
		this.element.addEventListener("click", () => this.roll());
		this.children = Array.from(element.children);
	}

	roll() { 
		this.children.forEach((child) => {
			child.classList.toggle("roll");
		});
	};
};

dropdown = new Dropdown(dropdown);

// const dropdown = document.querySelector(".header__dropdown");
// const list = document.querySelector(".dropdown__list");

// dropdown.addEventListener("click", () => list.classList.toggle("roll"));
