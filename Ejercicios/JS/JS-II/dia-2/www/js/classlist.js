"use strict";

const p = document.querySelector("section > p");

p.classList.add("importante");
// p.classList.remove("texto");
p.classList.toggle("importante");
p.classList.replace("texto", "link-header");

console.log(p.classList.contains("texto"));
