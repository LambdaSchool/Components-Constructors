let bilal = document.querySelector('.Dropdown');
let hidenchilds = document.querySelector('.Dropdown__hide');
bilal.addEventListener('click', hideChildsFunction);
function hideChildsFunction() {
    hidenchilds.classList.remove('Dropdown__hide');
    hidenchilds.classList.add('Dropdown--show');
}




// ------------------section 2 -------


let tabsLink = document.querySelectorAll('.Tabs__link');
// let box = document.querySelector('.box');
console.log(tabsLink);

class Tabslink{
    constructor(element,index){
        this.index = index;
        // this.dataNumber = element.dataset.number;
        this.element = element;
        this.element.addEventListener('click',() =>{
            this.toggleTabsLink();
        });
        this.TabsItem = document.querySelectorAll('.Tabs__item');
        this.TabsItem1 = Array.from(this.TabsItem).map(params => new TabsItem(params));
    } 
    
    toggleTabsLink(){
        console.log(this.TabsItem1);
        this.TabsItem1[this.index].TabsItem1();
        // event.target.classList.toggle('Tabs__link--hide');
    }    
}

class TabsItem{
    constructor(element){
        this.element = element;
    }
    TabsItem1(){
        this.element.classList.toggle('Tabs__item')
       
    }
}
constructedTabsLink = Array.from(tabsLink).map((param,index) => { new Tabslink(param,index) });