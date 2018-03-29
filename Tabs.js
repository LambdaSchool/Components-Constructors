
// class TabsItem {
//   constructor(element) {
//     // attach dom element to object. Example in Tabs class
//   }

//   select() {
//     // should use classList
//   }

//   deselect() {
//     // should use classList
//   }
// }

// class TabsLink {
//   constructor(element, parent) {
//     this.element = element;// attach dom element to object<< this.element;
//     this.tabs = parent;// attach parent to object<<this.tabs;
//     this.tabsItem = this.getTab(element) ;// assign this to the associated tab using the parent's "getTab" method by passing it the correct data <<this.tabsItem;
//     // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
//     this.element.addEventListener('click', () => {
//       this.tabs.updateActive(this);
//       this.select();
//     });
//   };

//   select() {
//     // select this link
//     // select the associated tab
//   }

//   deselect() {
//     // deselect this link
//     // deselect the associated tab
//   }
// }

// class Tabs {
//   constructor(element) {
//     this.element = element;// attaches the dom node to the object as "this.element"
//     this.links = element.querySelectorAll(".Tabs__link"); // <<an array of the link buttons
//     this.links = Array.from(this.links).map((link) => {
//       return new TabsLink(link, this); //<< link is the object, this is the index
//     });
//     this.activeLink = this.links[0]; //<< first tab link, Tab 1
//     this.init();

//   }

//   init() {
//     // select the first link and tab upon ititialization
//     this.activeLink.addEventListener('click', () => {this.element.classList.toggle('.Tabs__item')} ) //<< //Tabs__link or Tabs__item
//   }

//   updateActive(newActive) {
//     // deselect the old active link
//     // assign the new active link
//   }

//   getTab(data) {
//     // use the tab item classname and the data attribute to select the proper tab

//   }

// }

// let tabs = document.querySelectorAll(".Tabs"); // This seems idiotic
// tabs = Array.from(tabs).map(tabs => new Tabs(tabs));


let buttons = document.querySelectorAll(".Tabs__link");
// // buttons.style.display = "box"
// let test = document.querySelectorAll("Block__header");
// test.style.color = red;
// alert("hello")
class Tabs {
  constructor(element) {
    this.element = element;
    this.dataTabNumber = element.dataset.tab;
    this.element.addEventListener('click', () => {this.buttonClick()});
    this.btnxIndex = document.querySelector(`.Tabs__item[data-tab="${this.dataTabNumber}"]`);
    this.btnxIndex = new Buttons(this.btnxIndex);
  }
  buttonClick() {
    console.log("clicked button");
    this.btnxIndex.toggleButton()
  }
}
class Buttons {
  constructor(element) {
    this.element = element;
  }
  toggleButton() {
    this.element.classList.toggle('Tabs__item')
  }
}

buttons = Array.from(buttons).map(tabs => new Tabs(tabs) );