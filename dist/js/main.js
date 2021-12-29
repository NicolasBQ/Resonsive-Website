const burguer = document.querySelector('.burguer-container');
const navLinks = document.querySelector('.navegation__links');
const navItems = document.querySelector('.navegation__links--item');

burguer.addEventListener('click', showMenu)

function showMenu() {
    navLinks.classList.toggle('navegation__links--active');
}