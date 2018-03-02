/**********************************TABSITEM CLASS********************************/
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add("Tabs__item-selected");
  }

  deselect() {
    // should use classList
    this.element.classList.remove("Tabs__item-selected");
  }
}
/**********************************TABSLINK CLASS********************************/
class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = parent.getTab(element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    // select the associated tab
    this.element.classList.add("Tabs__link-selected");
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    this.element.classList.remove("Tabs__link-selected");
  }
}
/**********************************TABS CLASS************************************/
class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link"); // **this.links NOW HOLDS A NODELIST
    this.links = Array.from(this.links).map((link) => { // **using Array.from BECAUSE I HAVE AN ARRAY-LIKE OR ITERABLE OBJECT
      return new TabsLink(link, this); // ** link REPRESENTS EACH ITERABLE FROM NODELIST!
    }); // **link CHANGES BUT NOT this. this IS THE PARENT for TabsLink
    this.activeLink = this.links[0]; // ** I AM JUST STATING HERE THAT THE FIRST NODELIST ELEMENT IS MY SO-CALLED activeLink 
    this.init(); // CALLING init() FUNCTION UPON CONTRUCTOR EXECUTION
  }

  init() {
    // select the first link and tab upon ititialization
    let a = document.querySelectorAll(".Tabs__link");
    a[0].setAttribute("display", "block");
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}
/********************************************************************************/
let tabs = document.querySelectorAll(".Tabs"); // tabs is a variable. ".Tabs" is being selected and assigned to tabs. querySelectorAll RETURNS A NODELIST, A LIST OF CHILD ELEMENTS AND IT'S DIFFERENT THAN CLASS LIST
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));