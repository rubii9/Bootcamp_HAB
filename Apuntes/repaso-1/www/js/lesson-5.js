'use strict';

/**
 * La definición de una función (también llamada declaración de
 * función o sentencia de función) consiste de la palabra clave
 * (reservada) `function`, seguida por:
 *
 *  - El nombre de la función.
 *
 *  - Una lista de argumentos o parámetros para la función,
 *    encerrados entre paréntesis y separados por comas (,).
 *
 *  - Un bloque de código encerrado por llaves, { }.
 */

/* function calculateAge(birthYear) {
  return 2020 - birthYear;
} */

//** FUNCIÓN ANÓNIMA */

/* const calculateAge = function(birthYear) {
    return 2019 - birthYear;
}

let agePablo = calculateAge(1994);

console.log(agePablo); */

/* function yearsUntilRetirement(age, name) {
  const retirementAge = 65;
  if (retirementAge - age < 65) {
    return `A ${name} le quedan ${retirementAge - age} años hasta el retiro.`;
  } else {
    return `${name} ya se ha retirado.`;
  }
}

let agePablo = 26;
let ageLucia = 34;

let retiredPablo = yearsUntilRetirement(agePablo, 'Pablo');
let retiredLucia = yearsUntilRetirement(ageLucia, 'Lucía');

console.log(retiredPablo);
console.log(retiredLucia); */

/**
 * `Arrow function`
 *
 * En las denominadas `arrow functions` se sustituye la palabra
 * clave `function` por `=>` (no confundir con un mayor o igual que).
 * Este tipo de funciones traen un `return` implícito por lo que no
 * sería necesario decirle a la función qué valor debe devolver.
 *
 * Sintaxis: `const resta = (parámetros) => parámetro 1 - parámetro 2`
 *
 * Ejemplo en base al ejercicio anterior:
 * `const calculateAge = (birthYear) => 2019 - birthYear`
 */
