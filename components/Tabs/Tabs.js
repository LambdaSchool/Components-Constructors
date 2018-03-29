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
    this.tab = new TabsItem(element.querySelector(".Tabs__item"));
    this.activeLink = this.links[0];
    this.activeTab = this.tab;
    this.init();
    this.toggleTab();
  }

  init() {
    this.activeLink.select();
    this.activeTab.select();
  }

  toggleTab() {
    this.links.forEach((link) => {
      let tab = this.getTab(link.element.dataset.tab);
      tab = new TabsItem(tab);
      this.addEvent(link, tab);
    });
  };

  addEvent(link, tab) {
    link.element.addEventListener('click', () => {
      this.updateActiveLink(link);
      this.updateActiveTab(tab);
    });
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
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
// class TabsItem {
//   constructor(element) {
//     // attach dom element to object. Example in Tabs class
//   }

//   select() {
//     // should use classList
//   }

//   deselect() {
//     // should use classList
//   }
// }

// class TabsLink {
//   constructor(element, parent) {
//     this.element;// attach dom element to object
//     this.tabs;// attach parent to object
//     this.tabsItem;// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
//     // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
//     this.element.addEventListener('click', () => {
//       this.tabs.updateActive(this);
//       this.select();
//     });
//   };

//   select() {
//     // select this link
//     // select the associated tab
//   }

//   deselect() {
//     // deselect this link
//     // deselect the associated tab
//   }
// }

// class Tabs {
//   constructor(element) {
//     this.element = element;// attaches the dom node to the object as "this.element"
//     this.links = element.querySelectorAll(".Tabs__link");
//     this.links = Array.from(this.links).map((link) => {
//       return new TabsLink(link, this);
//     });
//     this.activeLink = this.links[0];
//     this.init();
//   }

//   init() {
//     // select the first link and tab upon ititialization
//   }

//   updateActive(newActive) {
//     // deselect the old active link
//     // assign the new active link
//   }

//   getTab(data) {
//     // use the tab item classname and the data attribute to select the proper tab
//   }

// }

// let tabs = document.querySelectorAll(".Tabs");
// tabs = Array.from(tabs).map(tabs => new Tabs(tabs));