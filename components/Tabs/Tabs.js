// .Tabs__item {
//   display: none;
// }

// .Tabs__item-selected {
//   display: block;
// }

// .Tabs__links {
//   left: 0;
//   margin: 20px 0;
// }

// .Tabs__link {
//   display: inline-block;
//   box-sizing: border-box;
//   padding: 10px 15px;
//   margin: 10px 10px 10px 0;
//   background-color: gray;
// }

// .Tabs__link-selected {
//   background-color: white;
//   border: solid 1px gray;
// }

//Tabs --> Tabs__links --> Tabs__link
//Tabs --> Tabs__item --> Box
// multiple of Tabs__item  --> box, Tabs__link--------------both of these have datanumbers
//also, inside Box there is Box__title, Box__description

class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
  }

  select() {
    // should use classList
  }

  deselect() {
    // should use classList
  }
}

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
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
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
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));