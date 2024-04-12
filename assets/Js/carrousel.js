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

export { carouselItems };
// Función para inicializar el carrusel
export function initCarousel() {
    const carouselContainer = document.getElementById('carousel');
    const indicatorContainer = document.createElement('div');
    indicatorContainer.classList.add('carousel-indicators');

    // Generamos dinámicamente los elementos del carrusel desde el array
    carouselItems.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.innerHTML = `
            <img id="carousel-image-${index}" class="carousel-image ${index === 0 ? 'active' : ''}" src="${item.image}" alt="${item.text}">
        `;
        carouselContainer.appendChild(carouselItem);

        // Creamos un indicador de punto para cada imagen
        const indicator = document.createElement('span');
        indicator.classList.add('carousel-indicator');
        indicator.setAttribute('data-index', index);
        indicator.addEventListener('click', () => {
            changeImage(index);
        });
        indicatorContainer.appendChild(indicator);
    });

    // Agregamos los indicadores de puntos al contenedor
    carouselContainer.appendChild(indicatorContainer);

    // Mostramos el primer indicador como activo por defecto
    const firstIndicator = indicatorContainer.querySelector('.carousel-indicator');
    firstIndicator.classList.add('active');
}
