"use strict";
//clase animal galliña y zorro
//array de 2gallinas y 2 zorros

class Animal {}
class Gallina extends Animal {
  criar() {
    let criaGallina = new Gallina();
    return criaGallina;
  }
}
class Zorro extends Animal {
  criar() {
    let criaZorro = new Zorro();
    return criaZorro;
  }
}
function crearAnimales() {
  let arrayAnimales = [null, null];

  for (let i = 0; i < arrayAnimales.length; i++) {
    let random = Math.round(Math.random());
    if (random === 0) {
      arrayAnimales[i] = new Gallina();
    } else {
      arrayAnimales[i] = new Zorro();
    }
  }
  return arrayAnimales;
}

function checkAnimals(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].constructor.name === array[i + 1].constructor.name) {
      let newAnimal = array[i].criar();
      array.push(newAnimal);
      return array;
    } else {
      return array.filter(animal => animal instanceof Zorro);
    }
  }
}

let animals = crearAnimales();
console.log("Antes", animals);
console.log("Despues", checkAnimals(animals));
