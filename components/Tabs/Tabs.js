
class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Tabs__item-selected");
  }

  deselect() {
    this.element.classList.remove("Tabs__item-selected");
  }
}

class TabsLink {
  constructor(element) {
    this.element = element;
  };

  select() {
    this.element.classList.add("Tabs__link-selected")
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected");
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link);
    });
    this.tabs = element.querySelectorAll(".Tabs__item")
    this.tabs = Array.from(this.tabs).map((tab) => {
      return new TabsItem(tab);
    });
    this.activeLink = this.links[0];
    this.activeTab = this.tabs[0];
    this.init();
    this.toggleTab();
  }

  init() {
    this.activeLink.select();
    this.activeTab.select();
  }

  toggleTab() {
    this.links.forEach((link) => {
      link.element.addEventListener('click', (e) => {
        this.updateActiveLink(link);
        let tab = this.getTab(link.element.dataset.tab);
        tab = new TabsItem(tab);
        this.updateActiveTab(tab);
      });
    });
  };

  updateActiveLink(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
  }

  updateActiveTab(newActive) {
    this.activeTab.deselect();
    this.activeTab = newActive;
    this.activeTab.select();
  }

  getTab(data) {
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));