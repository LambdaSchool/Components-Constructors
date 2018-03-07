

class Button {
    constructor(element) {
      this.element = element;
      drop.classList.add("button--hidden");
      this.element.addEventListener("click", () => {
          if(drop.classList.contains("button--hidden")){
            drop.classList.remove("button--hidden");
          }else{
           drop.classList.add("button--hidden");
          }
      });
    }
  }

  let drop = document.getElementsByClassName("Section__drop")[0];
  let button = document.getElementsByClassName("Section__button")[0];

   button = new Button(button);

  console.log(button);
