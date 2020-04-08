"use strict";

// getElementById

const tituloPrincipal = document.getElementById("titulo");

tituloPrincipal.style.textAlign = "center";
tituloPrincipal.style.color = "red";
tituloPrincipal.style.fontSize = "4rem";

// console.log(tituloPrincipal.clientHeight);
// console.log(tituloPrincipal.tagName);
// console.log(tituloPrincipal.getAttribute("id"));
// tituloPrincipal.textContent = "Viva pikachu";

const contenido = document.getElementById("contenido"); //estrictamente no es necesario pero si recomendable por legibilidad
contenido.style.color = "green";

// querySelector
const segundoLink = document.querySelector("li:nth-child(2) a");
segundoLink.style.fontSize = "2rem";

const sectionPrincipal = document.querySelector("#contenido");
sectionPrincipal.style.color = "steelblue";
