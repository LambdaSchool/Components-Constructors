
class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs__item--active');
  }

  deselect() {
    // should use classList
    this.element.classList.remove('tabs__item--active');
  }
}

class TabsLink {
  constructor(element) {
    this.element = element;
  };

  select() {
    this.element.classList.add('tabs__link--active');
  }

  deselect() {
    this.element.classList.remove('tabs__link--active');
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = Array.from(element.querySelectorAll('.tabs__link')).map((link) => new TabsLink(link));
    this.items = Array.from(element.querySelectorAll('.tabs__item')).map((item) => new TabsItem(item));
    
    this.links.forEach((link) => {
      link.element.addEventListener('click', (event) => this.select(link.element.dataset.tab));
    });

    this.init();

  }

  init() {
    // select the first link and tab upon ititialization
    this.select(1);
  }

  select(tab) {
    this.links.forEach((link) => {
      if (link.element.dataset.tab == tab) {
        link.select();
      } else {
        link.deselect();
      }
    });
    this.items.forEach((item) => {
      if (item.element.dataset.tab == tab) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }
}

let tabs = Array.from(document.querySelectorAll(".tabs")).map(tabs => new Tabs(tabs));