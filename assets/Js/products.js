// Datos de los productos

const products = [
    {
        id: 0,
        tag: "",
        name: 'Trailers para autos 1/4 de milla/autos livianos',
        image: './assets/img/servicios/Modelos/render/0a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/0b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, huellas con chapa semilla de melón 2mm.</p>
            <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
            <p>✔️ También se realizan modelos a medida</p>
        `,
    },
    {
        id: 1,
        tag: "",
        name: 'Trailer para cuatriciclo o 2 Motos',
        image: './assets/img/servicios/Modelos/render/1a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/1b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro UPN 60 piso chapa de melón 2MM, rampas con caño 25x25</p>
            <p>▪️ Capacidad carga: 800 kg</p>
            <p>Medida estándar: 2200mm x 1300mm</p>
            <p>✔️ También se realizan a medida</p>
        `,
        carousel: [
            './assets/img/carrousel/carrousel1/0a.jpeg',
            './assets/img/carrousel/carrousel1/0b.jpeg',
            './assets/img/carrousel/carrousel1/0c.jpeg',
            './assets/img/carrousel/carrousel1/0d.jpeg',
        ],
    },
    {
        id: 2,
        tag: "",
        name: 'Trailer para 3 motos',
        image: './assets/img/servicios/Modelos/render/2a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/2b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro UPN 60, rampas 25x25, piso con chapa semilla de melón 2mm.</p>
            <p>Medida estándar: 2200mm largo x 1700mm ancho + 1200mm lanza.</p>
            <p>Capacidad de carga: 800 kg</p>
            <p>✔️ También se realizan modelos a medida</p>
        `,
    },
    {
        id: 3,
        tag: "",
        name: 'Trailer con huellas y Sistema Basculante',
        image: './assets/img/servicios/Modelos/render/3a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/3b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, huellas con chapa semilla de melón 2mm.</p>
            <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
            <p>Capacidad de carga: 1200 kg</p>
            <p>✔️ También se realizan modelos a medida</p>
        `,
    },
    {
        id: 4,
        tag: "",
        name: 'Trailer piso enterizo doble eje',
        image: './assets/img/servicios/Modelos/render/4a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/4b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 3/4mm.</p>
            <p>Medida estándar: 5000mm largo x 1900mm ancho + 1200mm lanza</p>
            <p>Capacidad de carga: 2.000 kg</p>
            <p>✔️ Se realizan modelos a medida</p>
        `,
    },
    {
        id: 5,
        tag: "",
        name: 'Trailer piso enterizo con eje reforzado',
        image: './assets/img/servicios/Modelos/render/5a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/5b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 3,2mm.</p>
            <p>Medida estándar: 4500mm largo x 2000mm ancho + 1200mm lanza</p>
            <p>Capacidad de carga: 1800 kg</p>
            <p>✔️ Se realizan modelos a medida</p>
        `,
    },
    {
        id: 6,
        tag: "",
        name: 'Trailer piso enterizo de un eje',
        image: './assets/img/servicios/Modelos/render/6a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/6b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro IPN 80, rampas 40x30, piso con chapa semilla de melón 2mm.</p>
            <p>Medida estándar: 3700mm largo x 1700mm ancho + 1200mm lanza</p>
            <p>Capacidad de carga: 1200 kg</p>
            <p>✔️ Se realizan modelos a medida</p>
        `,
    },
    {
        id: 7,
        tag: "",
        name: 'Trailer para 2 cuatriciclos o 3 motos',
        image: './assets/img/servicios/Modelos/render/7a.jpeg',
        imageb: './assets/img/servicios/Modelos/render/7b.jpeg',
        detalles: `
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
        `,
        texto: `
            <p>✔️ Chasis y lanza fabricado con hierro UPN 60, piso chapa de melón 2MM, rampas con caño 25x25</p>
            <p>Medidas: 4000mm x 1300mm</p>
            <p>Capacidad de carga: 800 kg</p>
        `,
    },
];

export { products };