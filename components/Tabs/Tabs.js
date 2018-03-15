
class TabsItem {
  constructor(element) {
    this.element = element;
    // attach dom element to object. Example in Tabs class
  }

  select() {
    this.element = element.querySelector('.Tabs__item-selected')
    // should use classList
  }

  deselect() {
    this.element = element.querySelector('.Tabs__item')
    // should use classList
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = this.tabs.getTab();// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = new TabsItem(this.tabsItem)
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element = document.querySelector('.Tabs__link-selected')
    this.tabs = document.querySelector('.Tabs__link-selected')
    // select this link
    // select the associated tab
  }

  deselect() {
    this.element = element.querySelector('.Tabs__item')
    this.tabs = element.querySelector('.Tabs__item')
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
    console.log(this.links)
    this.init();
  }

  init() {
    // select the first link and tab upon initialization
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