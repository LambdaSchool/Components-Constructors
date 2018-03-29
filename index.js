




































class Dropdown {
    constructor() {
    this.dropdownButton = document.querySelector('.dropdown__button');
    this.dropdownMenu = document.querySelector('.dropdown__menu');
    // console.log(this.dropdownMenu);

    this.dropdownButton.addEventListener('click', this.toggleMenu.bind(this));
  }
  toggleMenu(event) {
    this.dropdownMenu.classList.toggle('dropdown__menu--show');
  }
}

window.onload = () => new Dropdown();

let x;
// function Toggle() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }


// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }