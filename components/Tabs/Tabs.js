
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('tabs__item--active');
  }

  deselect() {
    // should use classList
    this.element.classList.remove('tabs__item--active');
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = new TabsItem(this.tabs.getTab(this.element.dataset.tab));
    
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('tabs__link--active');
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs__link--active');
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".tabs__link");
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
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return document.querySelector(`.tabs__item[data-tab="${data}"]`);
  }

}
console.log('made it here');
let tabs = Array.from(document.querySelectorAll(".tabs")).map(tabs => new Tabs(tabs));