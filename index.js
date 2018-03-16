class Dropdown {
    constructor(element) {
        this.element = element;
        console.log('this', this);
        this.child = document.querySelector('.Dropdown__Content');
        this.element.addEventListener('click', () => {
            // let children = this.element.children;
            // children[1].classList.add('Dropdown--Display'); // for use with getElementsByClassName array
            this.child.classList.toggle('Dropdown--Display');
        });
    }
}

let dropdown = document.getElementsByClassName('Dropdown');
dropdown = Array.from(dropdown).map(dd => {
    return new Dropdown(dd);
});

let secLower = document.querySelector('.Section--Lower');
secLower.addEventListener('click', () => {
    let ddContent = document.querySelector('.Dropdown--Display');
    if (ddContent) {
        ddContent.classList.remove('Dropdown--Display');
    }
});
