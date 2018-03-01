let links = document.getElementsByClassName('Dropdown')[0];
let hidden = document.getElementById('Dropdown__hide');


links.addEventListener('click', () => {

    if(hidden.style.display === 'none') {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    }
    
});




























// if(hidden === document.getElementsByClassName('.Dropdown__hide')) {
//     hidden.classList.remove('Dropdown__hide');
// }
//  hidden = hidden.classList.add('Dropdown__show'); 