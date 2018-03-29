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
