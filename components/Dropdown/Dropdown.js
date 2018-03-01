class Dropdown {
    constructor(element) {
      this.element = element;
      this.element.isDisplayed = false;  
      this.element.parentNode.addEventListener("click", () => {
          console.log("CLICKED");
        if(!this.element.isDisplayed){
            this.element.classList.add("Dropdown--display");
            this.element.isDisplayed = true;
        }
        else{
            this.element.classList.remove("Dropdown--display");
            this.element.isDisplayed = false;
        }
      });
    }
  }
  
  let drop = document.getElementsByClassName("Dropdown__content")[0];
  drop = new Dropdown(drop);
