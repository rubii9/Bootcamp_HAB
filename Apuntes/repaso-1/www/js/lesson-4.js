'use strict';

/**
 * `if...else`
 *
 * El bloque `if` ejecuta un bloque de código si una condición
 * específicada es `true`. Si la condición es `false`, otra
 * sentencia puede ser ejecutada con `else`.
 *
 * `else if` especifica una nueva condición intermedia entre
 * `if` y `else` si la primera condición no se ha cumplido.
 * Pueden agregarse tantos como sean requeridos.
 *
 */

/* let boyAge = 19;

let girlAge = 24;

if (boyAge > girlAge) {
  console.log('El chico tiene más años que la chica.');
} else if (boyAge === girlAge) {
  console.log('El chico tiene la misma edad que la chica.');
} else {
  console.log('El chico es más joven que la chica.');
} */

/**
 * Operador ternario
 *
 * La función de este operador es similar a la de un `if...else`.
 * Se suelen usar para verificar condiciones simples donde solo
 * haya dos posibles resultados: se cumple, no se cumple.
 *
 * En casos complejos de condicionales anidados lo mejor es usar
 * `if...else`.
 *
 */

/* let myAge = 17;

const isAdult = (myAge >= 18) ? true : false;

console.log('Es adulto? ' + isAdult); */

/**
 * Operadores lógicos booleanos:
 *
 * - `&&`  Su valor es `true` si ambas condiciones son `true`.
 *
 * - `||`  Su valor es `true` si al menos una de las dos condiciones
 *         son `true`.
 *
 * - `!`   Invierte el valor de la condición. Si es `true` pasará
 *         a ser `false` y viceversa.
 *
 */

const myBoolean = true;

console.log(4 < 5 && 5 >= 6);

console.log(4 < 5 || 5 >= 6);

console.log(!myBoolean);
