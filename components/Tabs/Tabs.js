
class TabsItem {
  constructor(element) {
    this.element = element;
    this.element = element.querySelectorAll(".Box__title");
    this.element = element.querySelectorAll(".Box__description");
    // attach dom element to object. Example in Tabs class
  }

  select() {
    this.element.classList.add("Box__title");
    this.desc.classList.add("Box__description");
    // should use classList
  }

  deselect() {
    this.title.classList.remove("Box_title");
    this.element.classList.remove("Box__description");
    // should use classList
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem  = element.querySelectorAll(".Tabs__item");// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = Array.from(this.tabsItem).map((link) => {
      return new TabsItem(link, this);
    });// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link");
    // select this link
    this.element.classList.add("")
    // select the associated tab
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