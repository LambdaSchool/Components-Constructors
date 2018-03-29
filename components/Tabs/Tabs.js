//variables
let tabButtons = document.querySelectorAll(".Tabs__links");


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
  }

  deselect() {
    this.element.classList.remove("Tabs_link-selected");
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.
  }
