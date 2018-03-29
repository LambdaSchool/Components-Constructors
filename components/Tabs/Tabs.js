
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    this.element.classList.toggle('Tabs__item-selected');
  }

  deselect() {
    this.select();
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object ... class Tabs
    this.tabsItem = this.tabs.getTab(this.element); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = new TabsItem(this.tabsItem);// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  }

  select() {
    // select this link
    // select the associated tab
    this.element.classList.toggle('Tabs__item-selected');
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    this.select();
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
    // assign the new active link
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.init();
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    this.dataNumber = data.dataset.tab;
    this.tabAddress = document.querySelector(`.Tabs__item[data-tab="${this.dataNumber}"]`);
    console.log(this.tabAddress);
    return this.tabAddress;
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
console.log(tabs);