

class Button {
    constructor(element) {
      this.element = element;

      this.element.addEventListener("click", () => {
          if(drop.classList.contains("button--hidden")){
            drop.classList.remove("button--hidden");
          }else{
           drop.classList.add("button--hidden");
          }
        // drop.style.display = "none";
      });
    }
  }

  let drop = document.getElementsByClassName("Section__drop")[0];
  let button = document.getElementsByClassName("Section__button")[0];

   button = new Button(button);

  console.log(button);
