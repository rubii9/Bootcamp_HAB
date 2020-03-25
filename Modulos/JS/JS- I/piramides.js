
//Ejercicio 1
function buildFloor(size) {
  let floor = '';
  for (let i = 0; i < size; i++) {
    floor = floor + '*';
  }
  return floor;
}

function buildPiramide(height) {
  for (let i = 1; i <= height; i++) {
    console.log(buildFloor(i));
  }
}

buildPiramide(6);


//Ejercicio 2

function buildFloor(size, bricks) {
  let floor = '';
  for (let i = 0; i < size; i++) {
    floor = floor + bricks;
  }
  return floor;
}

function buildPiramide(height) {
  let floor = '';
  for (let i = 1; i <= height; i++) {
    floor = buildFloor(height - i, '_ ') + buildFloor(i, '* ');
    console.log(floor);
  }
}

buildPiramide(10);



//Ejercicio 3

function buildFloor(size, bricks) {
  let floor = '';
  for (let i = 0; i < size; i++) {
    floor = floor + bricks;
  }
  return floor;
}

function buildPiramide(height) {
  let floor = '';
  for (let i = 1; i <= height; i++) {
    floor = buildFloor(height - i, ' ') + buildFloor(i, '*') + buildFloor(i - 1, '*');
    console.log(floor);
  }
}

buildPiramide(14);




//Ejercicio 4

function buildFloor(size, bricks) {
  let floor = '';
  for (let i = 0; i < size; i++) {
    floor = floor + bricks;
  }
  return floor;
}

function buildPiramide(height) {
  let floor = '';
  for (let i = 1; i <= height; i++) {
    floor = buildFloor(height - i, ' ') + buildFloor(i, '*') + buildFloor(i - 1, '*');
    console.log(floor);
  }
}

function buildPiramideInverse(height) {
  let floor = '';
  for (let i = height - 1; i >= 1; i--) {
    floor = buildFloor(height - i, ' ') + buildFloor(i, '*') + buildFloor(i - 1, '*');
    console.log(floor);
  }
}
function showPiramide(value) {
  let message = '';
  message = buildPiramide(value) + buildPiramideInverse(value);
  return message;
}
showPiramide(4);
//Crea una piramide de 4 pisos y una inversa que tendra los mismos menos 1 pq comparten el eje simetrico































