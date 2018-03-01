
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
    this.tabsItem = parent.getTab(element.getAttribute("data-tab"));// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = new TabsItem(this.tabsItem);// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link-selected");
    // select this link
    // select the associated tab
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected");

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
    this.activeLink.select();
    this.activeLink.tabsItem.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink.tabsItem.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
    this.activeLink.tabsItem.select();
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelectorAll(`[data-tab='${data}']`)[1];
  }
}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));