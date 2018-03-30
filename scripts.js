let btn = document.querySelectorAll('.BtnContainer__dropdownbtn');

class btnToObj {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.number;
    this.element.addEventListener('click', () => {
      if (lastClick !== this.element || this.element.dataset.number === "1") {
        this.buttonClick();
      }
    });
    this.box = document.querySelector(`div[data-number='${this.data}']`);
    this.box = new Box(this.box);
  }
  buttonClick() {
    if (this.element.dataset.number !== '1') {
      lastClick.classList.remove('selected');
      lastClick.classList.add('unselected');
      document.querySelector(`div[data-number="${lastClick.dataset.number}"]`).classList.add('Container--displayNone');
      lastClick = this.element;
      lastClick.classList.add('selected');
    }
    this.box.toggleBox();
  }
}

class Box {
  constructor(element) {
    this.element = element;
  }
  toggleBox() {
    if (this.element.dataset.number === '1') {
      this.element.classList.toggle("Container--displayNone");
    } else {
    this.element.classList.remove("Container--displayNone");
    }
  }
}
btn = Array.from(btn).map((btn) => new btnToObj(btn));
let lastClick = document.querySelector('.BtnContainer__dropdownbtn[data-number="2"]')
