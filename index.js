let button = document.querySelector('.Dropdown__button')
let dropmenu = document.getElementById('dropDownLinks')

const dropEvent = (event) => {
    dropmenu.classList.toggle('Dropdown__content--show');
}

button.addEventListener('click', dropEvent);


// class Dropdown12 {
//     constructor () {
//         this.addEventListener('click', () => { this.dropEvent() })
//     }

//     dropEvent(event) {
//         dropmenu.classList.toggle('Dropdown__content--show');
//     }
// }

// button = new Dropdown12();

