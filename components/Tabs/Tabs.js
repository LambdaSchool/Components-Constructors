//variables
const tabsLink = document.querySelectorAll('.Tabs__link');
const boxstuff = document.querySelectorAll('.Tabs__item');
class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }


  select() {
    // should use classList
    element.classList.add("Tabs__item-selected"); //should reveal itself upon being clicked
  }

  deselect() {
    // should use classList
    element.classList.remove("Tabs__item-selected"); //should hide itself upon being unclicked
  }
}

// the actual tab buttons themselves
class TabsLink {
  constructor(element) {
    this.element = element;
  };

  select() {
    this.element.classList.add("Tabs_link-selected");
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove("Tabs_link-selected");
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {

  }
}
