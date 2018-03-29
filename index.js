let displayIt = document.querySelector('.Container__atags');
let address = document.querySelector('.Container__dropdown');

class DisplayDropdown{
    constructor(element){
      this.element = element;
      this.element.addEventListener('click', this.dropdownShow);
    }
    dropdownShow(){
      console.log('working')
      displayIt.classList.toggle('Container--none');
      displayIt.classList.toggle('Container--yes');
   //document.querySelector('.Container--none').style.display = 'relative';

    };
   }
  
   address = new DisplayDropdown(address);





