// sistema para la barra del nav
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
  
    burger.addEventListener('click', function() {
      nav.classList.toggle('nav-active');
    });
  });

  // efecto scroll para el nav
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('nav-pequeno');
    } else {
      nav.classList.remove('nav-pequeno');
    }
  });