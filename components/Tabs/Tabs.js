
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__Item--selected');
    
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__Item--selected');
  }
}


/*

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = parent.getTab(this.element.dataset.tab); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    
    this.tabsItem = new TabsItem(this.tabsItem)// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.element.classList.add('Tabs__link--selected');
    // select the associated tab
    this.tabsItem.select();
  }

  deselect() {
    // deselect this link
    this.element.classList.remove('Tabs__link--selected');
    // deselect the associated tab
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.Tabs_link = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.Tabs_link).map((link) => {
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
    this.activeLink.deselect();
    // assign the new active link
    this.activeLink = newActive;
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__Item[data-tab="${data}"]`);
  }

}
*/

class TabsLink {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__link--selected');
    
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__link--selected');
  }
}
class Tabs {
  constructor(element){
    this.index = 0;
    this.element = element;// attaches the dom node to the object as "this.element"
    
    this.Tabs_links = Array.from(element.querySelectorAll(".Tabs__link")).map((Tabs_link, index) => {
      Tabs_link.addEventListener('click', () => {
        this.index = index;
        this.deselectActive();
        this.updateActive();
        this.selectActive()
      });
      return new TabsLink (Tabs_link);
    });
    
    this.Tabs_Items = Array.from(element.querySelectorAll(".Tabs__Item")).map(Tabs_Item => new TabsItem(Tabs_Item));

    this.updateActive();
    this.init();
  }
  init() {
    // make the init selected
    this.selectActive();
  }

  deselectActive() {
    // deselect both link and item
    this.activeLink.deselect();
    this.activeItem.deselect();
  }

  updateActive() {
    this.activeLink = this.Tabs_links[this.index];
    this.activeItem = this.Tabs_Items[this.index];
  }

  selectActive() {
    // select the item and link
    this.activeLink.select();
    this.activeItem.select();
  }
}

let tabs = document.querySelectorAll(".Section__Tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
