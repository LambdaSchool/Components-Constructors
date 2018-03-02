
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
    this.element.classList.add("tabs__item");
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = parent.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
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
    this.updateActive(this.activeLink); 
     
  }

  updateActive(newActive) {
	  for(let i = 0; i < this.links.length; i++){
		  if(newActive.element.dataset.tab !== this.links[i].element.dataset.tab){
			this.links[i].tabsItem.deselect();
		        this.links[i].deselect();

		  }
		  else{
			  this.links[i].tabsItem.select();
			  this.links[i].select();
		  }
	  }
	  

  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    let tabs = document.getElementsByClassName("Tabs__item");
    let current = undefined;
    Array.from(tabs).map( (e) => {
	    if(e.dataset.tab === data){
		    current = e;
	    }
    });
    return current;

    
  }

}
let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
