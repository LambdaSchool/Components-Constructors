
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
  //   console.log(this.element);
  //   this.tabs = parent;
  //   console.log(this.tabs);
  //   this.tabsItem = this.tabs.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
  //   // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
  //   this.tabsItem = new TabsItem(this.tabsItem);
  //   this.element.addEventListener('click', () => {
  //     this.tabs.updateActive(this);
  //     this.select();
  //   });
  };

  select() {
    this.element.classList.add("Tabs__link-selected");
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected");
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link);
    });
    this.tabs = element.querySelectorAll(".Tabs__item");
    this.tabs = Array.from(this.tabs).map((tab) => {
      return new TabsItem(tab);
    });
    this.tab = new TabsItem(element.querySelector(".Tabs__item"));
    this.activeLink = this.links[0];
    this.activeTab = this.tab;
    this.init();
    this.listen();
  }

  listen() {
    this.links.forEach((link) => {
      let tab = this.getTab(link.element.dataset.tab);
      tab = new TabsItem(tab);
      this.clickEvent(link, tab);
    });
  };

  clickEvent(link, tab) {
    link.element.addEventListener('click', () => {
      this.updateActiveLink(link);
      this.updateActiveTab(tab);
    });
  }

  init() {
    this.activeLink.select();
    this.activeTab.select();
  }

 
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
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));