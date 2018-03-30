let bilal = document.querySelector('.Dropdown');
let hidenchilds = document.querySelector('.Dropdown__hide');
bilal.addEventListener('click', hideChildsFunction);
function hideChildsFunction() {
    hidenchilds.classList.remove('Dropdown__hide');
    hidenchilds.classList.add('Dropdown--show');
}
// ------------------section 2 -------
let tabsLink = document.querySelectorAll('.Tabs__link');
class Tabslink {
    constructor(element, index) {
        this.index = index;
        this.dataNumber = element.dataset.number;
        this.element = element;
        this.element.addEventListener('mousedown',() => {
            this.toggleTabsLink();
        });
        this.tabsItem = document.querySelectorAll('.Tabs__item');
        this.tabsItem1 = Array.from(this.tabsItem).map((params, index) => new TabsItem(params, index));
    }
    toggleTabsLink() {
        this.tabsItem1[this.index].TabsItem1();
    }
}
class TabsItem {
    constructor(element, index) {
        this.index = index;       
        this.element = element;
        this.dataNumber = element.dataset.number;
    }
    TabsItem1() {   
        this.element.classList.toggle('Tabs__item-selected');       
    }
}
let constructedTabsLink = Array.from(tabsLink).map((param, index) => new Tabslink(param, index));