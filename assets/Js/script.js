// Carousel
let currentIndex = 0;
const intervalTime = 5000;

function changeImage(index) {
    const items = document.querySelectorAll('.carousel-item');

    // Oculta el elemento actual
    items[currentIndex].style.display = 'none';

    // Muestra el nuevo elemento
    items[index].style.display = 'flex';

    currentIndex = index;
}

// Agrega el evento mouseover para activar el cambio de imagen
function activateChangeOnHover(index) {
    const listItem = document.querySelectorAll('.carousel-list li')[index];
    listItem.addEventListener('mouseover', function () {
        changeImage(index);
    });
}
function startCarousel() {
    // Activa el evento mouseover para cada elemento de la lista
    document.querySelectorAll('.carousel-list li').forEach((item, index) => {
        activateChangeOnHover(index);
    });

    // Cambia automáticamente la imagen una vez y luego cada cierto tiempo
    function transition() {
        const nextIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
        changeImage(nextIndex);
        setTimeout(transition, intervalTime);
    }

    // Inicia la transición automática
    transition();
}



// EXPORT

export const sInit = () => {
    startCarousel();
}
