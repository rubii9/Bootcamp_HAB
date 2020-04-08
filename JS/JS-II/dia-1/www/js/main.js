const showURL = () => console.log(window.location.href);

// ERROR: estamos pasando de primer parametro una funcion ejecutada
// esa función devuelve undefined por lo tanto sería lo mismo que
// setTimeout(undefined, 1000);
// setTimeout(showURL(), 1000);

setTimeout(showURL, 1000);

setTimeout(function() {
  console.log("ejecutado!");
}, 2000);

const tarde = setTimeout(() => console.log("ejecutado más tarde"), 3000);

clearTimeout(tarde);

let contador = 10;
const rand = max => Math.round(Math.random() * max);

const randomColor = () => {
  const red = rand(255);
  const green = rand(255);
  const blue = rand(255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const tiktak = () => {
  if (contador > 0) {
    console.log(contador);
    contador = contador - 1;
    document.body.style.backgroundColor = randomColor();
  } else {
    console.log("BUM!");
    clearInterval(interval);
  }
};

const interval = setInterval(tiktak, 1000);
