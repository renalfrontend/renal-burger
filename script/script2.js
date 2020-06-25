const button = document.querySelector('.menu-toggle');
const element = document.querySelector('nav ul');

button.addEventListener('click', () => element.classList.toggle('toggle-menu'));

const section = Array.from(document.querySelectorAll('#container5 section img'));

section.forEach(element => {

     element.addEventListener('click', function(){
          section.forEach(res => res.parentElement.classList.remove('active'));

          this.parentElement.classList.add('active');
     }) 
     
})

