// Función para renderizar una sola card de producto
function renderProductCard(product, container) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('productos-card');
    cardElement.innerHTML = `
        <img class="card-img" src="${product.image}" alt="${product.name}">
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <a class="ver-mas-btn" href="trailers.html?id=${product.id}">Ver más</a>
        </div>
    `;
    cardElement.addEventListener('click', () => {
        window.location.href = `trailers.html?id=${product.id}`;
    });

    // Cambiar la imagen al pasar el mouse sobre la card
    cardElement.addEventListener('mouseover', () => {
        cardElement.querySelector('.card-img').src = product.imageb;
    });
    cardElement.addEventListener('mouseout', () => {
        cardElement.querySelector('.card-img').src = product.image;
    });

    container.appendChild(cardElement);
}

// Función para renderizar las cards de productos
function renderProductCards(products, container) {
    container.innerHTML = ""; // Limpiar el contenido actual

    products.forEach(product => {
        renderProductCard(product, container);
    });
}

// Función para renderizar los detalles del producto
function renderProductDetails(product, container) {
    container.innerHTML = ""; // Limpiar el contenido actual

    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <h2 class="w100 fc p10">${product.name}</h2>
        <div class="product-info">
            <div class="fx -c a768-r a768-a-c">
                <img class="w90 a768w30" src="${product.image}" alt="${product.name}">
                <div class="p10">
                    <h3 class= "roboto-regular ff14">Características:</h3>
                    <div class="ff12 roboto-regular">
                        ${product.detalles}
                    </div>
                </div>
            </div>
            <div class="fx -c a768-r a768-j-s-a a768-a-c">
                <img class="w90 a768w30" src="${product.imageb}" alt="${product.name}">
                <div class="p10 ff12 roboto-regular">
                    ${product.texto}
                </div>
            </div>
        </div>
    `;

    // Agregar el producto a la sección de detalles de productos
    container.appendChild(productElement);
}

// Función para mostrar los detalles del producto si hay un ID en la URL
function showProductDetails(productId, products, container) {
    const product = products.find(p => p.id === productId);
    if (product) {
        renderProductDetails(product, container);
    }
}

export { renderProductCards, showProductDetails };
