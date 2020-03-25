"use strict";

const body = document.body;

const p = document.createElement("p");
p.textContent = "Párrafo creado desde javascript";
p.style.color = "green";

body.prepend(p);

const favoriteFruits = ["Platano", "Manzana", "Cereza", "Kiwi"];

const listaFrutas = document.createElement("ul");

for (const fruit of favoriteFruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  listaFrutas.append(li);
}

body.append(listaFrutas);

const melocoton = document.createElement("li");
melocoton.textContent = "Melocotón";

const cereza = listaFrutas.querySelector("li:nth-child(3)");

listaFrutas.insertBefore(melocoton, cereza);

const parrafo = document.createElement("p");
parrafo.textContent = "Ola raul";
listaFrutas.append(parrafo);

cereza.remove();
