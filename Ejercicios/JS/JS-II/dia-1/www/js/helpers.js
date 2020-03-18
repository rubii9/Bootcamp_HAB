const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const RADIO_TIERRA = 6397;

export function multiplica(a, b) {
  return a * b;
}

export class Persona {
  constructor(name) {
    this.name = name;
  }
}

export default suma;
export { RADIO_TIERRA, resta };
