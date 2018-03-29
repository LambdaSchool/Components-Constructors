class TabsItem {
  constructor(element) {
    this.element = element;
    // this.tabNum = element.dataset.tab;
    // attach dom element to object. Example in Tabs class
  }

  select() {
    this.element.classList.add("Tabs__item-selected");
    // should use classList
  }

  deselect() {
    this.element.classList.remove("Tabs__item-selected");
    // should use classList
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    // this.tabNum = element.dataset.tab;
    this.tabsItem = document.querySelector(`.Tabs__item[data-tab="${element.dataset.tab}"]`);
    this.tabsItem = new TabsItem(this.tabsItem);
    // assign this to the associated tab using the
    // parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem,
    // passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link-selected");
    this.tabsItem.select();
    // select this link
    // select the associated tab
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected");
    this.tabsItem.deselect();
    // deselect this link
    // deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as
    // "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
    console.log(this.links);
  }

  init() {
    this.activeLink.select();
    this.activeLink.tabsItem.select();
    // select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // return document.querySelector(`.Tabs__item[data-tab="${data}"]`);
    for (let i = 0; i < this.links.length; i++) {
      if (data === this.links[i].tabNum) {
        return this.links[i].tabsItem;
      }
    }
    // use the tab item classname and the data attribute to
    // select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));