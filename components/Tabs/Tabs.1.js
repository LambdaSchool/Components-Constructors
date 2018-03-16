
// stretch goal
let counter = 0;

class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
    this.id = counter++;
    console.log(this.id);

  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__item-selected');
  
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__item-selected');
  }
}

class TabsLink {
  constructor(element) {
    this.element = element;// attach dom element to object
    // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
  }
  select() {
    // select this link
    // select the associated tab
    this.element.classList.add('Tabs__link-selected');
    // this.tabsItem.select();
  }
  deselect() {
    // deselect this link
    // deselect the associated tab
    this.element.classList.remove('Tabs__link-selected');
    // this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.domLinks = element.querySelectorAll(".Tabs__link");
    this.links = [...this.domLinks].map((link) => {
      return new TabsLink(link);
    });
    this.activeLink = this.links[0];

    this.domItems = element.querySelectorAll(".Tabs__item");
    this.items = [...this.domItems].map((item) => {
      return new TabsItem(item);
    });
    this.activeTab = this.items[0];
    this.init();

    // add event listeners to tab links
    this.domLinks.forEach((link, i) => {
      link.addEventListener('click', (e) => {
        this.updateActive(this.links[i], i);
      });
    });
  }


  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select();
    this.activeTab.select();

  }

  updateActive(newActive, i) {
    // deselect the old active link
    // assign the new active link
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
    this.activeTab.deselect();
    // this.activeTab = this.getTab(newActive.element.dataset.tab);
    this.activeTab = this.items[i];
    this.activeTab.select();

  }

  // getTab(data) {
  //   // use the tab item classname and the data attribute to select the proper tab
  //   const selectedTab = this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  //   return new TabsItem(selectedTab);
  // }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
console.log(tabs);