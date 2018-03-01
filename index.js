

const dropDownBtn = document.querySelector('.Section__btn');

const dropDownMenu = document.querySelector('.Section__drop-down');


dropDownBtn.addEventListener('click', () => {
    if (dropDownMenu.style.visibility === 'hidden') dropDownMenu.style.visibility = 'visible';
    else dropDownMenu.style.visibility = 'hidden';
});
