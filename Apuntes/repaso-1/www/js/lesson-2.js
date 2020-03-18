'use strict';

/**
 * Tipos de datos en JS:
 *
 *  - `Number` Compuesto por uno o más números.
 *
 *  - `String` Compuesto por uno o más caracteres.
 *
 *  - `Boolean` Solo puede tener dos valores, o `true`, o `false`.
 *
 *  - `Undefided` Dato que JS adjudica de forma automática a una
 *                variable sin valor a la cual no se le ha asignado
 *                nada.
 *
 *  - `Null` Dato que debe ser asignado por el usuario. Indica que
 *           que la variable sí tiene valor, pero este es un valor
 *           vacío.
 *
 * Para identificar el tipo de dato almacenado en una variable
 * podemos usar el operador `typeof(nombreVariable)`.
 */

let numberOfDogs = 6;

const text = 'Soy un string';

const isAdult = true;

let emptyData;

let data = null;

console.log(typeof isAdult);
