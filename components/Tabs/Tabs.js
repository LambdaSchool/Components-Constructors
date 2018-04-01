



class TabsItem {
  constructor(element) {
    this.element = element// attach dom element to object. Example in Tabs class
  }

  select() {

  this.element.classList.add("Tabs__item-selected") // should use classList
  }

  deselect() {
    this.element.classList.remove('Tabs__item-selected') // should use classList
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element// attach dom element to object
    this.tabs = parent// attach parent to object
    this.tabsItem= this.tabs.getTab(this.element.dataset.tab)// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
   this.tabsItem = new TabsItem(this.tabsItem);// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
  
    this.element.addEventListener('click', () => {
      console.log('click worked')
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link-selected")
    this.tabsItem.select();
    // select this link
    // select the associated tab
  }

  deselect() {
 this.element.classList.remove("Tabs__link-selected");// deselect this link
    this.tabsItem.deselect();// deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.dataNumber = element.dataset.number;
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select()
    // select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    this.activeLink.deselect();// deselect the old active link
    this.activeLink = newActive;// assign the new active link
    this.activeLink.select()
  }

  getTab(data) {
  return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`) // use the tab item classname and the data attribute to select the proper tab

  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));