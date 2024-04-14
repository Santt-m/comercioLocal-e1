const carouselItems = [
    { image: './assets/img/carrousel/carrousel1/0a.jpeg', text: 'Trailers para autos 1/4 de milla/autos livianos' },
    { image: './assets/img/carrousel/carrousel1/0b.jpeg', text: 'Trailer para cuatriciclo o 2 Motos' },
    { image: './assets/img/carrousel/carrousel1/0c.jpg', text: 'Trailer para 3 motos' },
    { image: './assets/img/carrousel/carrousel1/0d.jpg', text: 'Trailer con huellas y Sistema Basculante' },
    { image: './assets/img/carrousel/carrousel1/0e.jpg', text: 'Trailer piso enterizo doble eje' },
    { image: './assets/img/carrousel/carrousel1/0f.jpg', text: 'Trailer piso enterizo con eje reforzado' },
    { image: './assets/img/carrousel/carrousel1/0g.jpg', text: 'Trailer para 2 cuatriciclos o 3 motos' }
];

let currentIndex = 0;
const intervalTime = 5000; // reloj de intervalo para cambiar la imagen de carousel

export function initializeCarousel() {
  const carouselContainer = document.getElementById('carousel');
  const carouselControls = document.getElementById('carousel-controls');
  const carouselItemsContainer = document.createElement('div'); // Creamos un contenedor para los carousel-items
  carouselItemsContainer.classList.add('carousel-items-container');
  
  const carouselItemsHTML = carouselItems.map((item, index) => `
    <div class="carousel-item ${index === currentIndex ? 'carousel-active' : ''}">
      <img src="${item.image}" alt="${item.text}">
      <div class="carousel-caption">${item.text}</div>
    </div>
  `).join('');

  carouselItemsContainer.innerHTML = carouselItemsHTML; // Insertamos los carousel-items en el contenedor
  
  carouselContainer.appendChild(carouselItemsContainer); // Insertamos el contenedor de carousel-items dentro del contenedor principal

  // Crear botones dinámicamente si existe el div 'carousel-controls'
  if (carouselControls) {
    carouselItems.forEach((_, index) => {
      const button = document.createElement('button');
      button.classList.add('carousel-btn');
      button.textContent = index + 1; // Usar números para los botones
      
      // Agregar evento click para cambiar el carrusel y activar el botón correspondiente
      button.addEventListener('click', function() {
        changeCarousel(index);
        updateButtonStates();
      });
      
      carouselControls.appendChild(button);
    });
  }

  // Cambiar automáticamente el carrusel cada cierto tiempo
  setInterval(() => {
    const items = carouselItemsContainer.getElementsByClassName('carousel-item');
    items[currentIndex].classList.remove('carousel-active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    items[currentIndex].classList.add('carousel-active');
    updateButtonStates(); // Actualizar el estado de los botones automáticamente
  }, intervalTime);
}

function changeCarousel(index) {
  const carouselContainer = document.getElementById('carousel');
  const items = carouselContainer.getElementsByClassName('carousel-item');
  
  // Remover clase 'carousel-active' de todos los elementos
  Array.from(items).forEach(item => {
    item.classList.remove('carousel-active');
  });
  
  // Agregar clase 'carousel-active' al elemento seleccionado
  items[index].classList.add('carousel-active');
  currentIndex = index;
}

function updateButtonStates() {
  const buttons = document.querySelectorAll('.carousel-controls .carousel-btn');
  buttons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('carousel-btn-active');
    } else {
      button.classList.remove('carousel-btn-active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeCarousel();
});

// codigo para el carousel de trailers.html
