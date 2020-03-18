"use strict";

const dogs = [true, false, true, true];

function getAnimals(animals) {
  return animals.map(animal => (animal === true ? "dog" : "cat"));
}

function getDogs(animals) {
  return animals
    .map(animal => (animal === true ? "dog" : "cat"))
    .filter(animal => animal === "dog");
}

function howManyAnimals(animals) {
  return animals
    .map(animal => (animal === true ? "dog" : "cat"))
    .filter(animal => animal === "dog")
    .reduce(
      (accumulator, currentAnimal) =>
        currentAnimal === "dog" ? accumulator + 1 : accumulator,
      0
    );
}

console.log(dogs);
console.log(getAnimals(dogs));
console.log(getDogs(dogs));
console.log(howManyAnimals(dogs));
