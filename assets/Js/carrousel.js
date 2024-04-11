// Definimos las imágenes y los textos asociados
const carouselItems = [
    { image: '../assets/img/carrousel/carrousel1/0a.jpeg', text: 'Autos livianos' },
    { image: '../assets/img/carrousel/carrousel1/0b.jpeg', text: 'Cuatriciclos' },
    { image: '../assets/img/carrousel/carrousel1/0c.jpeg', text: 'Motos' },
    { image: '../assets/img/carrousel/carrousel1/0d.jpeg', text: 'Huellas con sistema basculante' },
    { image: '../assets/img/carrousel/carrousel1/0e.jpeg', text: 'Piso enterizo de un eje' },
    { image: '../assets/img/carrousel/carrousel1/0f.jpeg', text: 'Piso enterizo doble eje' },
    { image: '../assets/img/carrousel/carrousel1/0g.jpeg', text: 'Piso enterizo con eje reforzado' }
];

export {carouselItems};

// Variable para almacenar el índice actual del carrusel
let currentIndex = 0;

// Función para cambiar la imagen del carrusel
function changeImage(index) {
    // Ocultar todas las imágenes
    carouselItems.forEach((item, i) => {
        const image = document.getElementById(`carousel-image-${i}`);
        image.classList.remove('active');
    });

    // Mostrar la imagen actual
    const image = document.getElementById(`carousel-image-${index}`);
    image.classList.add('active');

    // Actualizar el índice actual
    currentIndex = index;
}

// Función para avanzar al siguiente imagen del carrusel
function nextImage() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    changeImage(currentIndex);
}

// Función para retroceder a la imagen anterior del carrusel
function prevImage() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    changeImage(currentIndex);
}

// Función para inicializar el carrusel
function initCarousel() {
    const carouselContainer = document.getElementById('carousel');

    // Generamos dinámicamente los elementos del carrusel desde el array
    carouselItems.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.innerHTML = `
            <img id="carousel-image-${index}" class="carousel-image ${index === 0 ? 'active' : ''}" src="${item.image}" alt="${item.text}">
        `;
        carouselContainer.appendChild(carouselItem);
    });

    // Agregar botones de control para avanzar y retroceder
    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('carousel-controls');
    controlsContainer.innerHTML = `
        <button onclick="prevImage()">Prev</button>
        <button onclick="nextImage()">Next</button>
    `;
    carouselContainer.appendChild(controlsContainer);
}

// Llamamos a la función para inicializar el carrusel cuando se carga la página
window.addEventListener('DOMContentLoaded', initCarousel);
