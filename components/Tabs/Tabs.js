
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.style.display = 'flex';
  }

  deselect() {
    // should use classList
    this.element.style.display = 'none';
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = this.tabs.getTab(element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    // select the associated tab
    this.element.style.backgroundColor = 'white';
    this.element.style.border = '1px solid black';
    console.log(this);
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    this.element.style.backgroundColor = "gray";
    this.element.style.border = "none";
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
    this.activeLink.tabsItem.select();
    this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
    //this.activeLink.tabsItem.element.style.display = 'none';
    
    // this is how you get at the button
    //this.activeLink.tabsItem.element.style.display = 'none';
    this.activeLink.tabsItem.deselect();
    this.activeLink.deselect();
    newActive.tabsItem.select();
    this.activeLink = this.links[newActive.element.dataset.tab - 1];
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab 
    return new TabsItem(this.element.querySelectorAll(`[data-tab='${data}']`)[1]);
  }

}

let tabs = document.querySelectorAll(".Tabs");
console.log(tabs);
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
console.log(tabs);