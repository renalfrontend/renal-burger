const button = document.querySelector('.menu-toggle');
const element = document.querySelector('nav ul');

button.addEventListener('click', () => element.classList.toggle('toggle-menu'));

const buttonForm = document.querySelector('#container4 button');
const smartphoneDevice = window.matchMedia('(max-width : 700px)');

buttonForm.addEventListener('click', function(e) {
     e.preventDefault();

     Swal.fire({
          title: 'Maaf',
          text: 'Restaurant kami telah tutup, kami hanya menerima pesanan order. Terima kasih.',
          imageUrl: (smartphoneDevice.matches) ? 'img/real/peringatan3.jpg' : 'img/real/peringatan2.jpg',
          imageWidth: 350,
          imageHeight: 180,
          confirmButtonColor: "#FDC74D"
        })
})