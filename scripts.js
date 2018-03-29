let btn = document.querySelectorAll('.BtnContainer__dropdownbtn');

class btnToObj {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.number;
    this.element.addEventListener('click', () => {
      this.buttonClick();
    });
    this.box = document.querySelector(`div[data-number='${this.data}']`);
    this.box = new Box(this.box);
  }
  buttonClick() {
    this.box.toggleBox();
    console.log(this.box);
  }
}

class Box {
  constructor(element) {
    this.element = element;
  }
  toggleBox() {
    this.element.classList.toggle("Container--displayNone");
  }
}
btn = Array.from(btn).map((btn) => new btnToObj(btn));
