// function myFunction() {
//     document.getElementById('myDropdown').classList.toggle('show')
// }
// let button = document.querySelector('.Dropdown__button')
// button.onclick = function(event) {
//         let dropdowns = document.getElementById('myDropdown')
//         console.log(dropdowns)
//         dropdowns.classList.toggle('show')
// }

//Refactoring my JS to match what Dan did

class Dropdown {
    constructor(element, hideClass) {
        this.element = element,
        this.clicked = false,
        this.child = [...this.element.children].find(child => child.className === hideClass),
        this.element.addEventListener('click', () => this.handleClickEvent())
    }

    // display hidden menu
    handleClickEvent() {
        if (this.clicked && this.child.classList)this.child.classList.remove('display')
        else this.child.classList.add('show')
        this.toggleDropdown()
    }

    // toggle allows the event to turn on/off
    toggleDropdown() {
        this.clicked = !this.clicked
    }
}

// const must be at the bottom in the 'new Class' format
const dropdown = new Dropdown(document.querySelector('.Dropdown'), 'Dropdown__Menu')
