// import Js
import "./assets/Js/script.js";

// import funciones

import { sInit } from "./assets/Js/script.js";

//Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}



const init = () => {

    sInit();
};

init ();