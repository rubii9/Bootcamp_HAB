import plus from "/js/helpers.js";
import suma, {
  RADIO_TIERRA as RT,
  resta,
  multiplica,
  Persona
} from "/js/helpers.js";

import * as opers from "/js/operaciones.js";

console.log(opers.suma(10, 20));
console.log(opers.modulo(10, 20));

console.log(plus(10, 20));

console.log(RT);
console.log(suma(resta(RT, 1000), 1000));

console.log(new Persona("pikachu"));
