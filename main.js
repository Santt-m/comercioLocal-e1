import { products } from './assets/Js/products.js';
import { renderProductCards, showProductDetails } from './assets/Js/renderProducts.js';
import { carouselItems, initCarousel as initCarouselFunction, nextImage, prevImage } from './assets/Js/carrousel.js'; // Usar un alias para initCarousel

// Función para leer el valor ID de la URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    return productId ? parseInt(productId) : null;
}

// Ejecutar en todas las páginas para verificar la presencia de elementos con id
document.addEventListener('DOMContentLoaded', function() {
    const cardProductsDiv = document.getElementById('cardProducts');
    const detailsProductsDiv = document.getElementById('detailProduct');
    const carouselDiv = document.getElementById('carousel');

    // Verificar si hay una sección de productos para renderizar
    if (cardProductsDiv) {
        console.log("Card products div found. Rendering product cards...");
        renderProductCards(products, cardProductsDiv);
    }

    // Verificar si hay una sección de detalles de productos para renderizar
    
    if (detailsProductsDiv) {
        console.log("Details product div found. Rendering product details...");
        const productId = getProductIdFromURL();
        if (productId) {
            console.log("Product ID found in URL:", productId);
            showProductDetails(productId, products, detailsProductsDiv);
        } else {
            console.log("No product ID found in URL. Rendering all product cards...");
            renderProductCards(products, detailsProductsDiv);
        }
    }

    // Verificar si hay un carrusel para renderizar
    if (carouselDiv) {
        console.log("Carousel div found. Rendering carousel...");
        initCarouselFunction(carouselDiv); // Llamar a la función de inicialización con el alias
    }
});
window.addEventListener('DOMContentLoaded', initCarousel);