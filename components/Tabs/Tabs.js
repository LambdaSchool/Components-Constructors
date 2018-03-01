class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
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
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = this.tabs.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    console.log(this.element);

    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
      console.log(tabs);

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
    this.element = element; // attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
      console.log('tabslinks')


    });
    //this.activeLink = this.links[0];
    this.init();
    //console.log(this.element);
  }

  init() {
    // select the first link and tab upon ititialization
    console.log('init')
    this.activeLink = this.links[0];
    this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    this.activeLink.deselect();

    //newActive.select();
    // assign the new active link
    console.log('updateactive')

    this.activeLink = newActive;
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}


let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tab => 
  {new Tabs(tab);
   // console.log(tab);
  }
);

//console.log(tabs);
//new Tabs(tabs); 
// console.log(tabs);
// let tab = tabs[1];
// console.log(tab);