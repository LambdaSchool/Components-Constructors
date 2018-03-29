class TabsItem {  //adds select and deselect features/styles to the text box
  constructor(element) {
    this.element = element;// attach dom element to object. Example in Tabs class
  }

  select() {
    this.element.classList.add('Tabs__item-selected');// should use classList
  }

  deselect() {
    this.element.classList.remove('Tabs__item-selected');// should use classList
  }
}

class TabsLink {   
  constructor(element, parent) {
    this.element = element;// attach dom element to object //*** element = tab ???
    this.tabs = parent;// attach parent to object  //*** parent = text box ??
    this.tabsItem = parent.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.tabsItem = new TabsItem(this.tabsItem);// reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem   //*** tabsItem is the text box?? we pass it through constructor so it can have select() and deselect()
    this.element.addEventListener('click', () => {   //*** adding 'click' event listener to the tab button
      this.tabs.updateActive(this);  //*** once the tab is clicked >> tab becomes active, i.e. turns white ??
      this.select(); //*** and the text box displays block
    });
  };

  select() {
    this.element.classList.add('Tabs__link-selected')// select this link              ????????????????????????
    this.element.classList.add('Tabs__item-selected')// select the associated tab     ?????????????????????????
  }

  deselect() {
    this.element.classList.remove('Tabs__link-selected')// deselect this link              ????????????????????????
    this.element.classList.remove('Tabs__item-selected')// deselect the associated tab     ?????????????????????????
  }
}

class Tabs {   
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link"); 
    this.links = Array.from(this.links).map((link) => {     //*** iterate over ----> [Tab1, Tab2, Tab3]   
      return new TabsLink(link, this);   // pass each item in above array through the TabsLink constructor 
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select();// select the first link and tab upon ititialization           ????????????????????
  }

  updateActive(newActive) {
    this.activeLink.deselect(); // deselect the old active link                ???????????????????
    this.activeLink = newActive.select(); // assign the new active link                ??????????????????
  }

  getTab(data) {
  this.element = document.querySelector(`.Tabs__link[data-tab="${this.data}"]`)// use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");  // supposed to be .Tabs__link ?????
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));