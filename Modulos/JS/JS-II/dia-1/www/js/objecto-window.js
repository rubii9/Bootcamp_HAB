"use strict";

// ancho y alto del viewport
// Nota: lo siguiente es innecesario ya que estas variables están disponibles sin usar window.
const { innerHeight, innerWidth } = window;

console.log(
  `El viewport tiene de ancho ${innerWidth}px y de alto ${innerHeight}px`
);

// Ancho y alto de la ventana
console.log(
  `La ventana tiene de ancho ${window.outerWidth} y de alto ${window.outerHeight}`
);

// Location
console.log(`
  - La url del navegador: ${location.href}
  - Conexión segura: ${location.protocol === "http:" ? "No" : "Si"}
  - Hostname: ${location.hostname}
  - Path: ${location.pathname}
  - Hash: ${location.hash}
`);

// location.href = "https://google.com";
// location.pathname = "/noticias/2020/movida.html";

// Navigator
console.log(`Tu navegador es: ${navigator.userAgent}`);

// Scroll

setInterval(() => {
  console.log("Scroll vertical", window.scrollY);
  console.log("Scroll horizontal", window.scrollX);
}, 100000);

// const wikipedia = window.open("https://en.wikipedia.org");

// setTimeout(() => {
//   wikipedia.close();
// }, 1000);

if (window.confirm("Te gustan los pimientos?")) {
  console.log("Viva Shinosuke");
} else {
  console.log("Vale");
}

const edad = window.prompt("En que año naciste");

console.log("Edad", 2020 - edad);
