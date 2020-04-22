let i = 1;

const repeat = () => {
  console.log(i);
  i++;
};

console.log("Iniciando cuenta");

setInterval(repeat, 1000);
