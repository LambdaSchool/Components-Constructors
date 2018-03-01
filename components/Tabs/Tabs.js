
class TabsItem { // right track with extends, or no???
  constructor(element) {
    // attach dom element to object. Example in Tabs class GOOD_
    this.element = element;
  } 

  select() {
    // should use classList GOOD_
    element.classList.add('Tabs__item-selected'); 
  }

 deselect() {
    // GOOD_
    element.classList.remove('Tabs__item-selected');
  }
}

class TabsLink {  
  constructor(element, parent) {
    this.element = element;// attach dom element to object GOOD_
    this.tabs = parent;// attach parent to object GOOD_
    this.tabsItem =this.tabs.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data GOOD https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
    this.tabsItem = new TabsItem(this.tabsItem); // reassign this.tabsItem to be a new instance of TabsItem class, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    // select the associated tab
    element.classList.add('Tabs__link-selected'); // ????
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    element.classList.remove('Tabs__link-selected'); // ????
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element" GOOD
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon initialization
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    const tabsItem = document.querySelector('.Tabs__item');
    /// check out method usage HTMLElement.dataset

  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));