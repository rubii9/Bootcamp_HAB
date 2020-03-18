"use strict";

const names = ["Willy", "Ivan", "Ramiro"];
const eyeColor = ["azul", "marron", "azul"];
const height = ["bajo", "alto", "alto"];
const tattooed = [true, false, false];
const tip = [
  {
    height: "alto"
  },
  {
    eyeColor: "marron"
  },
  {
    tattooed: false
  }
];
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Suspect extends Person {
  #tip = null;
  constructor(name, eyeColor, height, tattooed, tip) {
    super(name);
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  static createList(names, eyeColors, heights, tattooeds, tips) {
    return names.map((name, index) => {
      return new Suspect(
        name,
        eyeColors[index],
        heights[index],
        tattooeds[index],
        tips[index]
      );
    });
  }
  Confesar() {
    return this.#tip;
  }
}

class Detective extends Person {
  constructor(name) {
    super(name);
  }

  Investigate(names, eyeColors, heights, tattooeds, tips) {
    this.suspects = Suspect.createList(
      names,
      eyeColors,
      heights,
      tattooeds,
      tips
    );
  }

  ConseguirPistas() {
    this.pistas = [];
    for (let i = 0; i < this.suspects.length; i++) {
      this.pistas[i] = this.suspects[i].Confesar();
      this.summaryPistas = { ...this.summaryPistas, ...this.pistas[i] };
    }
    return this.summaryPistas;
  }

  MostrarCulpable() {
    this.culpables = this.suspects.filter(sospechoso => {
      if (
        this.summaryPistas.height === sospechoso.height &&
        this.summaryPistas.eyeColor === sospechoso.eyeColor &&
        this.summaryPistas.tattooed === sospechoso.tattooed
      ) {
        return true;
      }
    });
  }
  Blame() {
    this.guilties = this.suspects.filter(suspect => {
      for (const value in this.summaryPistas) {
        if (this.summaryPistas[value] !== suspect[value]) {
          return false;
        }
      }
      return true;
    });
  }
}

const detective = new Detective("Mr.Anselmo");
detective.Investigate(names, eyeColor, height, tattooed, tip);
detective.ConseguirPistas();
detective.MostrarCulpable();
detective.Blame();
console.log(detective);
console.log(detective.guilties);
console.log(detective.culpables);
