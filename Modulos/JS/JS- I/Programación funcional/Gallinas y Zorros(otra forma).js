"use strict";
//clase animal galliña y zorro
//array de 2gallinas y 2 zorros

class Animal {}
class Chicken extends Animal {
  criar() {
    return new Chicken();
  }
}
class Fox extends Animal {
  criar() {
    return new Fox();
  }
  eat(animals) {
    return animals.filter(animal => animal.constructor.name === "Fox");
  }
}

class Room {
  animals = [];
  constructor(animals) {
    this.animals = animals;
  }
  closeDoor() {
    if (this.animals[0].constructor.name === this.animals[1].constructor.name) {
      this.animals.push(this.animals[0].criar());
    } else {
      const foxPosition = this.animals[0] instanceof Fox ? 0 : 1;
      this.animals = this.animals[foxPosition].eat(this.animals);
    }
  }
  openDoor() {
    return this.animals;
  }
}

function getRandomAnimal() {
  if (Math.round(Math.random())) {
    return new Fox();
  } else {
    return new Chicken();
  }
}

const myAnimals = [getRandomAnimal(), getRandomAnimal()];
console.log(myAnimals);
const myRoom = new Room(myAnimals);
myRoom.closeDoor();
console.log(myRoom.openDoor());
