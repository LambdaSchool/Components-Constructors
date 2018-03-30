// const drbtn = document.querySelector(".Header__dropdown");
// const drone = drbtn.getElementsByTagName("h5");
// drone.style.border = '8px solid red';
const test = document.querySelector(".Header");
// test.style.border = "2px solid red";
const drbtn = document.querySelector("h3");
// drbtn.style.backgroundColor = 'green';
const links = document.querySelector(".Header__links");
links.style.backgroundColor = "white";
links.style.display = "none";
const btnBody = document.querySelector(".Header__dropdown")
const lambda = document.querySelector(".Header__lambda");
lambda.style.backgroundColor = "white";
const google = document.querySelector(".Header__google");
google.style.backgroundColor = "white";
const mdn = document.querySelector(".Header__mdn");
mdn.style.backgroundColor = "white";
const pargraphExit = document.querySelector(".Block__paragraph");

class Dropmenu {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => { this.dispL() });
        pargraphExit.addEventListener('mouseover', () => { this.hideDisp() });
    }
    dispL() {
        links.style.display = "block";
    }
    hideDisp() {
        links.style.display = "none"
    }
    
}
let clickEvent = document.querySelectorAll(".Header__dropdown");
let moverEvent = document.querySelector(".Block__paragraph");
// clickEvent = new Dropmenu(clickEvent);
clickEvent = Array.from(clickEvent).map(item => {
    return new Dropmenu(item);
});
// moverEvent = new Dropmenu(moverEvent);
moverEvent = Array.from(moverEvent).map( item => {
    return new Dropmenu(item);
} );


