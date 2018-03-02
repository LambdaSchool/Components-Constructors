// const dropDownButton = document.querySelector(".Dropdown__button");
// const dropDownMenu = document.querySelector(".Dropdown__menu")

// console.log(dropDownButton);

// dropDownButton.addEventListener("click", () =>{
//     dropDownMenu.classList.toggle("Dropdown__menu--clicked");
// });


// dropDownButton.forEach( (item) => {
//     item.addEventListener("click", () => {
//         dropDownButton.classList.toggle("Dropdown__menu--clicked");
//         console.log("test");
//     });
// })


/*      let dropdownMenu = document.querySelector('.block__dropdown');

        class DropdownMenu {
            constructor(element) {
                this.element = element;
                this.button = this.element.querySelector('a');
                this.button.addEventListener('click', toggleMenu);
                this.menu = this.element.querySelector('.block__dropdown__menu');
                console.log(this.menu.classList);
            }
            toggleMenu() {
                console.log(this.menu);
                this.menu.classList.toggle('component--hidden');
            }
        }
        const menu = new DropdownMenu(dropdownMenu);

        */ 




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
        this.element.classList.add("Tabs__link-selected");
        // select the associated tab
        this.tabsItem.select();
    }

    deselect() {
        // deselect this link
        this.element.classList.remove("Tabs__link-selected");
        // deselect the associated tab
        this.tabsItem.deselect();
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
        this.activeLink.select();
    }

    updateActive(newActive) {
        // deselect the old active link
        this.activeLink.deselect();
        // assign the new active link
        this.activeLink = newActive;
    }

    getTab(data) {
        // use the tab item classname and the data attribute to select the proper tab
        return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
    }

}

const tabs = document.querySelector(".Tabs");
new Tabs(tabs);

//weird ivan stuff
// let tabs = document.querySelectorAll(".Tabs");
// tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
    