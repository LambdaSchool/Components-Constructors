// class Dropdown {
//     constructor(element) {
//         this.element = element;

//         this.element.addEventListener('click', () => {
//             this.element.classList.add('Dropdown--active');
//         })
//     }
// }

// let dropdown = ;
// dropdown = Array.from(dropdown)

document.getElementsByClassName('Dropdown')[0].addEventListener('click', () => {
    document.getElementsByClassName('Dropdown')[0].classList.toggle('Dropdown--active');
});