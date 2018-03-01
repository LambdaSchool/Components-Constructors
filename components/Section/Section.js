const button = document.getElementsByClassName('Dropdown')[0];
const list = document.getElementsByClassName('Dropdown__list')[0];

button.addEventListener('click', () => {
    if (list.classList.contains('Dropdown--hidden')) {
        list.classList.remove('Dropdown--hidden');
    } else {
        list.classList.add('Dropdown--hidden');
    }
});