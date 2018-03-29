// class Dropdown {
//     constructor(element) {
//       this.element = element;
//       this.button = this.element.querySelector(".Dropdown__button");

//       this.button.addEventListener("click", () => {
//         this.toggleContent();
//       });
//     }

//     toggleContent() {
//       let buttonContent = this.element.querySelector('.Dropdown__content');
//       buttonContent.classList.toggle("Dropdown--active");
//     }
//   }

//   let dropdowns = document.querySelector(".Section__Dropdown");

//   window.onload = () => new Dropdown(dropdowns);

let dropdowns = document.querySelector(".Dropdown__button");
let showHide = document.querySelector(".Dropdown__content");
window.onload = () =>
  dropdowns.addEventListener("click", () =>
    showHide.classList.toggle("Dropdown--active")
  );
