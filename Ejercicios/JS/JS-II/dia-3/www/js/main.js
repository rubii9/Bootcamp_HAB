const seccion = document.querySelector("#principal");

console.log(seccion.innerHTML);
console.log(seccion.outerHTML);

// Mal: escribe el HTML como texto
// seccion.textContent = `
//   <ul>
//     <li>uno</li>
//     <li>dos</li>
//   </ul>
// `;

seccion.innerHTML = `
  <ul>
    <li>uno</li>
    <li>dos</li>
  </ul>
`;

seccion.outerHTML = "<strong>fuera todo</strong>";

seccion.innerHTML = "";

// Listado
const listado = document.getElementById("listado");

const newLi = document.createElement("li");
newLi.innerHTML = "<strong>Soy nuevo!</strong>";

// listado.prepend(newLi);

// const thirdLi = document.querySelector("#listado li:nth-child(3)");
// listado.insertBefore(newLi, thirdLi);

const lis = Array.from(document.querySelectorAll("ul#listado li"));

const chosenLi = lis.find(li => li.classList.contains("este"));

listado.insertBefore(newLi, chosenLi);
