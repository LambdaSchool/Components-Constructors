class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('Tabs__item-selected');
  }

  deselect() {
    this.element.classList.remove('Tabs__item-selected');
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = this.tabs.getTab(this.element.dataset.tab)
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('Tabs__link-selected');
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('Tabs__link-selected');
    this.tabsItem.deselect();
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
    this.tabs = this.element.querySelectorAll('[data-tab]');
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].className === 'Tabs__item') {
        if (this.tabs[i].dataset.tab === data) return this.tabs[i];
      }
    }
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));