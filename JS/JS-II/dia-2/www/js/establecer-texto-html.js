"use strict";

import { getRandomColor } from "/js/helpers.js";

const titulo = document.getElementById("titulo");

// ver contenido textual
console.log(titulo.textContent);

// establecer contenido textual
const ahora = new Date();
titulo.textContent = `Hola, son las ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;

const footer = document.querySelector("footer");

// la linea siguiente es un error: establece ese html como texto
// footer.textContent = "<strong>Hackaboss</strong>";

console.log(footer.innerHTML);

footer.innerHTML = `
  <ul>
    <li>hora: ${ahora.getHours()}</li>
    <li>minuto: ${ahora.getMinutes()}</li>
    <li>segundos: ${ahora.getSeconds()}</li>
  </ul>
`;
