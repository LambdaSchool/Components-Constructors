class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element
  }

  select() {
    // should ADD class from  classList
    this.element.classList.add('Tabs__item-selected')
  }

  deselect() {
    // should REMOVE classList
    this.element.classList.remove('Tabs__item-selected')
  }
}
class TabsLink {
  /**
   * Creates an instance of TabsLink.
   * @param {DOMNode} element
   * @param {Tabs} parent
   * @memberof TabsLink
   */
  constructor(element, parent) {
    this.element = element // attach dom element to object
    this.tabs = parent // attach parent to object
    this.tabsItem = new TabsItem(parent.getTab(this.element.dataset.tab)) // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    this.element.addEventListener('click', () => {
      // cool arrow function passing 'this'
      this.tabs.updateActive(this)
      this.select()
    })
  }

  select() {
    // select this link
    this.element.classList.add('Tabs__link-selected')

    // select the associated tab
    this.tabsItem.select()
  }

  deselect() {
    // deselect this link
    this.element.classList.remove('Tabs__link-selected')

    // deselect the associated tab
    this.tabsItem.deselect()
  }
}

class Tabs {
  /**
   * Creates an instance of Tabs.
   * @param {DOMNode} element
   * @memberof Tabs
   */
  constructor(element) {
    this.element = element // attaches the dom node to the object as "this.element"
    this.links = [...element.querySelectorAll('.Tabs__link')].map(link => {
      return new TabsLink(link, this)
    })
    this.activeLink = this.links[0]
    this.init()
  }

  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select()
  }

  updateActive(newActive) {
    // deselect the old active link
    this.activeLink.deselect()
    // assign the new active link
    this.activeLink = newActive
    // make sure to select the newLYActive link
    this.activeLink.select()
  }

  /**
   * Get current tabItem/Tab by selecting
   * The data-tab attribute
   * @param number data
   * @returns {DOMNode}
   * @memberof Tabs
   */
  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return document.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }
}

let tabs = document.querySelectorAll('.Tabs')
tabs = [...tabs].map(tabs => new Tabs(tabs))
