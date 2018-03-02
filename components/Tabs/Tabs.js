/* ************* GRANDCHILD *************** */

class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__item--selected');
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__item--selected');
  }
}

/* *************CHILD ******************** */

class TabsLink {
  constructor(element, parent) {
    // attach dom element to object
    this.element = element;
    // attach parent to object
    this.tabs = parent;
    // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
      // dataset grabs the data atribute set on the element and you specify the data type that comes after it
    this.tabsItem = this.tabs.getTab(this.element.dataset.tab); 
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.tabsItem.select();
    // select the associated tab
    this.element.classList.add("Tabs__link--selected");
  }

  deselect() {
    // deselect this link
    this.tabsItem.deselect();
    // deselect the associated tab
    this.element.classList.remove("Tabs__link--selected");
  }
}
 /* <<<<<<<<<<<<<<<<<<<PARENT>>>>>>>>>>>>*/
class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.activeLink.select();
    // this.init();

  }

  // init() {
  //   // select the first link and tab upon ititialization
  //   this.activeLink.select();
  // }
  
  updateActive(newActive) {
    // deselect the old active link
    this.activeLink.deselect();
    // assign the new active link
    this.activeLink = newActive;
    console.log(this.newActive);
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }

}

let tabs = document.querySelectorAll(".Tabs");
console.log(tabs)
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
