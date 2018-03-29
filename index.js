let dropdown = document.querySelector('.Dropdown');


class Dropdown {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.dropIt();
    });
  };

  dropIt() {
    this.element.classList.toggle('Dropdown--display');
    console.log('click');
  };
};

dropdown = new Dropdown(dropdown);