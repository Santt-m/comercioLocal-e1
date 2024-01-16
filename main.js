// import Js
import "./assets/Js/script.js";

// import funciones

import { sInit } from "./assets/Js/script.js";

//Menu

// Función para alternar la visibilidad del menú en dispositivos móviles
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Evento de clic para el botón de hamburguesa
document.querySelector('.burger').addEventListener('click', toggleMenu);

// Evento de clic para cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show');
    });
});


// Servicios

// Render de las cards

const renderProduct = (productName, productDescription, productImage) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('productos-card');
    cardElement.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="card-img" src="${productImage}" alt="${productName}">
                <div class="productos-card-txt-info">
                    <h4 class="montserrat fontCenter ff20">${productName}</h4>
                    <div class="productos-card-txt-info-accion">
                    <a class="cardBtn" href=""><img class="icon" src="./assets/img/redes/WhatsApp.webp" alt="whatsapp logo"> Comunicarse</a>
                </div>
                </div>
            </div>
            <div class="flip-card-back">
                ${productDescription}
                <div class="productos-card-txt-info-accion">
                    <a class="cardBtn" href=""><img class="icon" src="./assets/img/redes/WhatsApp.webp" alt="whatsapp logo"> Comunicarse</a>
                </div>
            </div>
        </div>
    `;

    // Obtén el contenedor de servicios y agrega la card al final
    const serviciosContCard = document.querySelector('.serviciosContCard');
    serviciosContCard.appendChild(cardElement);
};

// Datos de los productos

const productsData = [
    {
        id: 0,
        name: 'Trailers para autos 1/4 de milla/autos livianos',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 4 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpes</li>
                    <li>• Malacate manual</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, huellas con chapa semilla de melón 2mm.</p>
                <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
                <p>✔️ También se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/0.jpeg'
    },
    {
        id: 1,
        name: 'Trailer para cuatriciclo o 2 Motos',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Fiat/Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 3 hojas</li>
                    <li>• Símbolo max 80</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro UPN 60 piso chapa de melón 2MM, rampas con caño 25x25</p>
                <p>▪️ Capacidad carga: 800 kg</p>
                <p>Medida estándar: 2200mm x 1300mm</p>
                <p>✔️ También se realizan a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/1.jpeg'
    },
    {
        id: 2,
        name: 'Trailer para 3 motos',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Fiat/Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 3 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpes</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro UPN 60, rampas 25x25, piso con chapa semilla de melón 2mm.</p>
                <p>Medida estándar: 2200mm largo x 1700mm ancho + 1200mm lanza.</p>
                <p>Capacidad de carga: 800 kg</p>
                <p>✔️ También se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/2.jpeg'
    },
    {
        id: 3,
        name: 'Trailer con huellas y Sistema Basculante',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 4 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpes</li>
                    <li>• Malacate manual</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, huellas con chapa semilla de melón 2mm.</p>
                <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
                <p>Capacidad de carga: 1200 kg</p>
                <p>✔️ También se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/3.jpeg'
    },
    {
        id: 4,
        name: 'Trailer piso enterizo doble eje',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Fiat/Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 4 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpe</li>
                    <li>• Malacate manual</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 3/4mm.</p>
                <p>Medida estándar: 5000mm largo x 1900mm ancho + 1200mm lanza</p>
                <p>Capacidad de carga: 2.000 kg</p>
                <p>✔️ Se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/4.jpeg'
    },
    {
        id: 5,
        name: 'Trailer piso enterizo con eje reforzado',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R15</li>
                    <li>• Masas F100/Toyota</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 5 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpes</li>
                    <li>• Malacate manual</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 3,2mm.</p>
                <p>Medida estándar: 4500mm largo x 2000mm ancho + 1200mm lanza</p>
                <p>Capacidad de carga: 1800 kg</p>
                <p>✔️ Se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/5.jpeg'
    },
    {
        id: 6,
        name: 'Trailer piso enterizo de un eje',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Fiat/Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 5 hojas</li>
                    <li>• Guardabarros</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Paragolpes</li>
                    <li>• Malacate manual</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 2mm.</p>
                <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
                <p>Capacidad de carga: 1200 kg</p>
                <p>✔️ Se realizan modelos a medida</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/6.jpeg'
    },
    {
        id: 7,
        name: 'Trailer para 2 cuatriciclos o 3 motos',
        description: `
            <div class="productDescription">
                <p>Detalles</p>
                <ul>
                    <li>• Llantas y cubiertas R14</li>
                    <li>• Masas Fiat/Peugeot</li>
                    <li>• Instalación eléctrica completa con luces LED</li>
                    <li>• Elásticos de 3 hojas</li>
                    <li>• Símbolo max 80</li>
                    <li>• Tortuga y cadenas</li>
                    <li>• Bandas reflectivas</li>
                    <li>• Color a elección</li>
                </ul>
                <p>✔️ Chasis y lanza fabricado con hierro UPN 60, piso chapa de melón 2MM, rampas con caño 25x25</p>
                <p>Medidas: 4000mm x 1300mm</p>
                <p>Capacidad de carga: 800 kg</p>
            </div>
        `,
        image: './assets/img/servicios/Modelos/render/7.jpeg'
    },
    // ... más productos
];

// Llama a la función renderProduct para cada producto
productsData.forEach(product => {
    renderProduct(product.name, product.description, product.image);
});


const init = () => {

    sInit();
};

init ();