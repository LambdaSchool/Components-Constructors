console.log('I am being called');


let dropdown = document.querySelector('.header__button');

class Dropdown {
    constructor (element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.dropdownOpen();
        })
    }
    dropdownOpen() {
        //console.log('I am being called!');
        let list = document.querySelector('.header__list');
        // list.style.display = 'block';
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    };
    
}





dropdown = new Dropdown(dropdown); // this creates an object 

//////////////////////////////////////////////////////////////////////////////////////////

class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.links = element.querySelectorAll(".Tabs__item");
  }

  select() {
    // should use classList
    this.element.classList.toggle = "Tabs__item-selected"
  }

  deselect() {
    // should use classList
    this.element.classList.toggle = "Tabs__item"
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = new Tabs(this.tabs);// attach parent to object
    // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = document.querySelector(`tab.[data-tab="${this.dataTab}"]`);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
       // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
  };

  select() {
    // select this link
    this.links.classList.toggle = 'Tabs__link-selected';
    // select the associated tab
    this.links.classList.toggle = 'Tabs__link-selected';
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));

let items = document.querySelectorAll(".Tabs__item");
items = Array.from(items).map(items => new TabsItem(items));

let link = document.querySelectorAll(".Tabs__link");
link = Array.from(link).map(link => new Tabs(link));