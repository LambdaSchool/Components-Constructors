
class TabsItem { //items in list
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() { //essentially button click
    // should use classList
    this.element.classList.add('Tabs__items-selected');
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__items');
  }
}

class TabsLink { // the list itself
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object (Tabs)
    this.tabsItem = parent.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = new TabsItem(this.tabsItem)// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.element.classList.add('Tabs__Links-selected');
    // select the associated tab
    this.TabsItem.select();
  }

  deselect() {
    // deselect this link
    this.element.classList.remove('Tabs__Links-selected');
    // deselect the associated tab
    this.TabsItem.deselect();
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

  updateActive(newActive) { // ????
    // deselect the old active link
    this.activeLink.deselect();
    // assign the new active link
    this.activeLink.select();
    
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return document.querySelector(`.Tabs__link[data-number="${this.dataNumber}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));