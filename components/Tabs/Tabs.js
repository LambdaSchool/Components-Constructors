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
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add("Tabs__item-selected")
  }

  deselect() {
    // should use classList
    this.element.classList.add("Tabs__item")
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = this.tabs.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem)
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
    thiis.element.classList.add("Tabs__link")
    // deselect the associated tab
    this.tabsItem.deselect()
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
    this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    this.activeLink.deselect()
    // assign the new active link
    this.activeLink = newActive;
    this.activeLink.select();
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));