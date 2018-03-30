let dropdowns = document.querySelector('.Dropdown');

class DropdownMenu {
    constructor(eb) {
        this.element = eb;
        // this.button = this.element.querySelector('.Dropdown__button');
        // this.button.addEventListener('click', () => {
        //     this.dropdownAction();
        // });
        this.element.addEventListener('click', () => {this.dropdownAction()})
    }
    dropdownAction() {
        this.element.classList.toggle('Dropdown--active');
    }
}



dropdowns = new DropdownMenu(dropdowns);


// dropdowns = Array.from(dropdowns).map((dropdown) => {console.log(dropdowns);
// })


//Testing
// dropdowns = Array.from(dropdowns).map((dropdown) => new DropdownMenu(dropdown));

// dropdowns = Array.from(dropdowns).map( (dropdown) => {
//     console.log(dropdown);
//   })
