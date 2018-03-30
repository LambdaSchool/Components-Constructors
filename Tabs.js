
class TabsItem {
  constructor(element) {
    this.element = element;
    // attach dom element to object. Example in Tabs class
  }

  select() {
    // should use classList
    this.element.classList.add("Tabs__item-selected");

  }

  deselect() {
    // should use classList
    this.element.classList.remove("Tabs__item-selected");

  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object<< this.element;
    this.tabs = parent;// attach parent to object<<this.tabs;
    this.tabsItem = parent.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data <<this.tabsItem;
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.element.classList.add("Tabs__link-selected");

    // select the associated tab
    this.tabsItem.select();
  }

  deselect() {
    // deselect this link
    this.element.classList.remove("Tabs__link-selected");

    // deselect the associated tab
    this.tabsItem.deselect();

  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link"); // <<an array of the link buttons
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this); //<< link is the object, this is the Tabs class
    });
    this.activeLink = this.links[0]; //<< first tab link, Tab 1
    this.init(); // Initial call to set the default link, Tab 1.

  };

  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select();     //addEventListener('click', () => {this.element.classList.toggle('.Tabs__item')} ) //<< //Tabs__link or Tabs__item
  }

  updateActive(newActive) {
    // deselect the old active link
    this.activeLink.deselect();
    // assign the new active link
    this.activeLink = newActive;

  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);


  }

}

let tabs = document.querySelectorAll(".Tabs"); // Useful if there will be more .Tabs in the future...
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));


//////////// <<<testing >>>>>>>>>>> testing >>>>>> testing<<<<<<<<<< testing >>>>>>>>>>>

// let buttons = document.querySelectorAll(".Tabs__link");

// class Tabs {
//   constructor(element) {
//     this.element = element;
//     this.dataTabNumber = element.dataset.tab;
//     this.clearMenu = document.querySelector(".Tabs__item");
//     // this.clearMenu = this.clearMenu.map(item => { })
//     this.element.addEventListener('click', () => {this.buttonClick()});
//     this.btnxIndex = document.querySelector(`.Tabs__item[data-tab="${this.dataTabNumber}"]`);
//     this.btnDisplay = document.querySelector(`.Tabs__link[data-tab="1"]`);
//     this.callBegin();
//     this.btnxIndex = new Buttons(this.btnxIndex, this);
//   }
//   callBegin() {
//     // this.btnDisplay.startF();
   
//   }


//   buttonClick() {
//     // this.clearMenu.style.color = "blue";
//     console.log("clicked button");
//     this.btnxIndex.toggleButton()
//   }
// }
// class Buttons {
//   constructor(element, preclass) {
//     this.element = element;
//     // this.element = new Tabs(element);
//   }
//   startF() {
//     this.element.classList.add("Tabs__link-set");
//     this.element.classList.add(".Tabs__item-set");
//   }
//   toggleButton() {
//     this.element.classList.toggle('Tabs__item');
    
//   }
// }

// buttons = Array.from(buttons).map(tabs => new Tabs(tabs) );

//<<<<TEST <>>>>>>>>>>TEST  <<<<<<<<<<TEST >>>>>>>>>>TEST

