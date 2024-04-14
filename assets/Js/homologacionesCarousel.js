const homologacionesCarouselItems = [
    { image: './assets/img/homologaciones/homologaciones1/0a.png', text: 'Homologación 1' },
    { image: './assets/img/homologaciones/homologaciones1/0b.png', text: 'Homologación 2' },
    { image: './assets/img/homologaciones/homologaciones1/0c.png', text: 'Homologación 3' },
    { image: './assets/img/homologaciones/homologaciones1/0d.png', text: 'Homologación 4' },
    { image: './assets/img/homologaciones/homologaciones1/0e.png', text: 'Homologación 5' }
];

let homologacionesCurrentIndex = 0;
const homologacionesIntervalTime = 10000;

export function initializeHomologacionesCarousel() {
    const homologacionesCarouselContainer = document.getElementById('homologacionesCarousel');
    const homologacionesCarouselItemsContainer = document.createElement('div');
    homologacionesCarouselItemsContainer.classList.add('homologaciones-carousel-items-container');
    
    const homologacionesCarouselItemsHTML = homologacionesCarouselItems.map((item, index) => `
      <div class="homologaciones-carousel-item">
        <img src="${item.image}" alt="${item.text}">
        <div class="homologaciones-carousel-caption">${item.text}</div>
      </div>
    `).join('');
  
    homologacionesCarouselItemsContainer.innerHTML = homologacionesCarouselItemsHTML;
    homologacionesCarouselContainer.appendChild(homologacionesCarouselItemsContainer);
  
    const items = homologacionesCarouselItemsContainer.getElementsByClassName('homologaciones-carousel-item');
  
    const changeHomologacionesCarousel = () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('homologaciones-carousel-active');
      }
      homologacionesCurrentIndex = (homologacionesCurrentIndex + 1) % homologacionesCarouselItems.length;
      items[homologacionesCurrentIndex].classList.add('homologaciones-carousel-active');
    };
  
    changeHomologacionesCarousel(); // Cambiamos el carrusel una vez para comenzar
  
    setInterval(changeHomologacionesCarousel, homologacionesIntervalTime);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeHomologacionesCarousel();
});
