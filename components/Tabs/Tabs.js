
// the content of the tab element
class TabsItem {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {this.TabsItemClick()})
    this.tabs = docuemnt.querySelector('.tabs');
    this.tabs = new Tabs(this.tabs); // attach dom element to object. Example in Tabs class
  }

  select() {
    this.element.classList.toggle('tabs__item');
  }

  deselect() {
    // should use classList
  }
}

// the tab that selects the tabsItem
class TabsLink {
  constructor(element, parent) {
    this.element;// attach dom element to object
    this.tabs;// attach parent to object
    this.tabsItem;// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.toggle('tabs__link');  // select this link
    this.element.classList.toggle('tabs__item'); // select the associated tab
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
  }
}


class Tabs {
  constructor(element) {
    this.element = element; // attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.element.classList.toggle('tabs__item-selected')
    this.tabs__link.toggleTabs('data-tab[1]');   // select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    this.data-tab = toggle('data-tab'['']);  // deselect the old active link
    this.data-tab = toggle(this.'data-tab'['']);   // assign the new active link
  }

  getTab(data) {
   this.element.classList.tab__item.data[].data-tab; // use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));