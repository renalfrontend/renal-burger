const button = document.querySelector('.menu-toggle');
const element = document.querySelector('nav ul');

button.addEventListener('click', () => element.classList.toggle('toggle-menu'));