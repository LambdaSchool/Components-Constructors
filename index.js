// Set up references to the DOM
const dropdown = document.querySelector(".Box__headDropdown");
const dropUl = document.querySelector(".Box__headDropUl");

//Make dropdown component class
class Dropdown {
  constructor(elements, trigger) {
    //console.log(elements);
    //Expand functionality
    trigger.addEventListener('click', () => {
    //console.log(elements);
      elements.classList.toggle('Box__headDropUl');
    });
  }
}
//Initialized Event Listener
new Dropdown(dropUl, dropdown);