import { products } from './assets/Js/products.js';
import { renderProductCards, showProductDetails } from './assets/Js/renderProducts.js';
import {initializeCarousel} from './assets/Js/carrousel.js';
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

// NavBar
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    });

    // busca un div con id cardProducts
    if (cardProductsDiv) {
        console.log("Card products div found. Rendering product cards...");
        renderProductCards(products, cardProductsDiv);
    }

    // busca un div con id detailProduct (para trailers.html)
    // busca un id en la url para mostrar los detalles automaticamente
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

});
