let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#navlist');
const menuIcon = document.querySelector('#menu-icon')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')

menu.addEventListener('click', () => {
    navlist.classList.remove('active');
    menuIcon.classList.add('active')
});


item1.addEventListener('click', () => {
    navlist.classList.add('active');
    menuIcon.classList.remove('active')
});
item2.addEventListener('click', () => {
    navlist.classList.add('active');
    menuIcon.classList.remove('active')
});
item3.addEventListener('click', () => {
    navlist.classList.add('active');
    menuIcon.classList.remove('active')
});