
class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element = element.querySelector('.Tabs__item-selected')
  }

  deselect() {
    this.element = element.querySelector('.Tabs__item')
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = this.tabs.getTab();
    this.tabsItem = new TabsItem(this.tabsItem)
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element = document.querySelector('.Tabs__link-selected')
    this.tabs = document.querySelector('.Tabs__link-selected')
  }

  deselect() {
    this.element = element.querySelector('.Tabs__item')
    this.tabs = element.querySelector('.Tabs__item')
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));