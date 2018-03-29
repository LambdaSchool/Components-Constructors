class Dropdown {
    constructor(element, hideClass) {
      this.element = element, // 1st step w js element functions 
      this.clicked = false, // the default Boolean value is false-on is true
      this.child = [...this.element.children].find(child => child.className === hideClass),
      this.element.addEventListener('click', () => this.handleClickEvent())
    }
  // element function causing the class list to display if it is not displayed 
    handleClickEvent() { 
      if (this.clicked && this.child.classList) this.child.classList.remove('display')
      else this.child.classList.add('display')
      this.toggleDropdown()
    }
  // toggle allows the event to be turned off and therefore repeated 
    toggleDropdown() {
      this.clicked = !this.clicked
    }
  }
  // const must be displayed at the bottom here and in this 'assign New Class' format
  const dropdown = new Dropdown(document.querySelector('.Dropdown'),'Dropdown__List')