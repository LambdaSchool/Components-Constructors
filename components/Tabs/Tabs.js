// TabsItem refers to the tab contents only
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
    console.log(this.element);
    this.dataTab = element.dataset.tab;
    console.log(this.dataTab);
    // this.tabsItem = document.querySelector(`.Tabs__item[data-tab="${this.dataTab}"]`);
    // console.log(this.tabsItem);
  }

  select() {
    // should use classList
    this.element.classList.toggle('Tabs__item-selected');
  }

  deselect() {
    // should use classList
    this.element.classList.toggle('Tabs__item');
  }
}

// TabsLink connects a link to its corresponding item
class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = this.tabs.getTab(`.Tabs__item[data-tab="${this.element.dataset.tab}"]`);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    console.log(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    // select the associated tab
    this.element.classList.toggle('Tabs__link-selected');
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    this.element.classList.toggle('Tabs__link');
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    // console.log(this.links);
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    // console.log(this.links);
    this.activeLink = this.links[0];
    console.log(this.activeLink);
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization
    return this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
    this.activeLink.deselect;
    this.activeLink = event.currentTarget;
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return document.querySelector(data);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));



