
let tabs = document.querySelectorAll('.Tabs');

class TabsItem {
    constructor(element) {
        this.element = element;
    }
    select () {
        this.element.classList.add('Tabs__item-selected');
    }
    deselect () {
        this.element.classList.remove('Tabs__item-selected');
    }
}

class TabsLink {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem)
        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    };
    select() {
        this.element.classList.add('Tabs__link-selected')
        this.tabsItem.select()
    }
    deselect() {
        this.element.classList.remove('Tabs__link-selected')
        this.tabsItem.deselect()
    }
}

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = element.querySelectorAll('.Tabs__link');
        this.links = Array.from(this.links).map((link) => {
            return new TabsLink(link, this);
        })
        this.activeLink = this.links[0];
        this.init();
    }
    init() {
        this.activeLink.select()
    }
    updateActive(newActive) {
        //deselect the old active link
        //asign the new active link
        this.activeLink.deselect();
        this.activeLink = newActive;
    }
    getTab(data) {
        const item = this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
        return item;
        //use the tab item classname and the data attribute to select the proper tab
    }
}
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));