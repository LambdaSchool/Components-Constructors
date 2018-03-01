
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('Item--selected');
    
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Item--selected');
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = parent.getTab(this.element.dataset.tab); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    
    this.tabsItem = new TabsItem(element)// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
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
    this.Tabs_link = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.Tabs_link).map((link) => {
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
    console.log(newActive.tabs.activeLink)
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__Item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Section__Tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
