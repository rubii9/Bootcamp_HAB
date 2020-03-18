"use strict";

/**
 * Asignar una serie de alumnos a una serie profesores en base a ciertas propiedades.
 *
 * - 1. Clase Persona: la clase persona va a tener un "nombre", "edad" y un metodo que nos devuelva un
 *                     mensaje diciendonos el nombre y la edad.
 *
 * - 2. Clase Alumno que hereda de Persona: tendran los atributos "materia" y "grupo". Necesitamos
 *                                          a mayores un metodo estatico que genere los alumnos.
 *
 * - 3. Clase Profesor que hereda de Persona: tendran los atributos "materia" y "grupo". Necesitamos
 *                                            a mayores un mÃ©todo estatico que genere los profesores,
 *                                            y otro metodo no estatico que asigne los estudiantes al
 *                                            profesor.
 *
 */
// Array con los nombres y edades de los estudiantes
//++++++++++++++++++++++++++++++++++++++++++++++//
//++++++++++++++++++++++++++++++++++++++++++++++/
const studentsNames = [
  "Laura",
  "Ramon",
  "Jorge",
  "Dani",
  "Eustaquia",
  "Raimunda",
  "Jaimito",
  "Sara",
  "Lucas"
];
const studentsAges = [19, 34, 67, 43, 22, 26, 45, 32, 25];
const teachersNames = ["Palleiro", "Yañez", "Mato", "Yago"];
const teachersAges = [24, 45, 65, 98];
const teachersSubjects = ["js", "js", "html", "html"];
const teachersGroups = ["A", "B", "A", "B"];
//++++++++++++++++++++++++++++++++++++++++++++++//
//++++++++++++++++++++++++++++++++++++++++++++++//
//++++++++++++++++++++++++++++++++++++++++++++++//

class Persona {
  constructor(name, edad) {
    this.name = name;
    this.edad = edad;
  }
  menssage() {
    console.log(`Hola me llamo ${this.name} y tengo ${this.edad} años`);
  }
}

class Alumno extends Persona {
  constructor(name, age, materia, grupo) {
    super(name, age);
    this.materia = materia;
    this.grupo = grupo;
  }
  static createAlumnos(name, age) {
    return name.map((student, i) => {
      const materia = Math.round(Math.random()) === 0 ? "html" : "js";
      const grupo = Math.round(Math.random()) === 0 ? "A" : "B";
      return new Alumno(student, age[i], materia, grupo);
    });
  }
}

class Profesor extends Persona {
  constructor(name, age, materia, grupo) {
    super(name, age);
    this.materia = materia;
    this.grupo = grupo;
  }
  static createProfes(name, age, materia, grupo) {
    return name.map((profe, i) => {
      return new Profesor(profe, age[i], materia[i], grupo[i]);
    });
  }
  asignarAlumnos(alumnos) {
    this.alumnosAsiggned = alumnos.filter(
      alumno => alumno.materia === this.materia && alumno.grupo === this.grupo
    );
  }
}

const listaAlumnos = Alumno.createAlumnos(studentsNames, studentsAges);
const listaProfes = Profesor.createProfes(
  teachersNames,
  teachersAges,
  teachersSubjects,
  teachersGroups
);

for (const teacher of listaProfes) {
  teacher.asignarAlumnos(listaAlumnos);
}
console.log(listaAlumnos, listaProfes);
