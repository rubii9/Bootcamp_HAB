"use strict";

import { getRandomColor } from "/js/helpers.js";

const seccion = document.querySelector("#contenido");

console.log(seccion.children); //hijos de la sección
console.log(seccion.parentElement); //elemento padre
console.log(seccion.firstElementChild); //primer hijo
console.log(seccion.lastElementChild); //ultimo hijo
console.log(seccion.lastElementChild.previousElementSibling); //hermano anterior
console.log(seccion.firstElementChild.nextElementSibling); //hermano siguiente

const p = document.querySelector("section > p");

//Necesitamos el segundo link del header
const segundoLinkHeader =
  p.parentElement.parentElement.parentElement.children[2].lastElementChild
    .firstElementChild.children[1].firstElementChild;
