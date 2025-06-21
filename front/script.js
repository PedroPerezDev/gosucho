var btnSwith = document.getElementById("switch");

btnSwith.addEventListener('click', ()=>{
    document.body.classList.toggle("light");
    btnSwith.classList.toggle("active");
})


//VISOR DE IMAGENES 

const images = [
  '../front/assets/images/01.jpg',
  '../front/assets/images/02.jpg',
  '../front/assets/images/03.jpg',
  '../front/assets/images/04.jpg',
  '../front/assets/images/05.jpg',
  '../front/assets/images/06.jpg',
  '../front/assets/images/07.jpg',
  '../front/assets/images/08.jpg'
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
  mainImage.src = images[index];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Inicializa con la primera imagen
showImage(currentIndex);