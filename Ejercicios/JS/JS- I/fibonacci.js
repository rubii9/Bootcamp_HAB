"use strict";
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(prompt()));
/*fib0= 0
  fib1= 1
  fib2= fib1+fib0
  fib3= fib2+fib1
  fib4= fib3+fib2
  ....
  ....
  fibN=() fibN-1)+(fibN-2)
  */


/*Ejemplo
Para f(1)=1 
Para f(0)=0  es decir que para valores <2 return=n
si no cumple esta función sigue llamando a la propia funcion hasta que se cumpla y asi tener una suma de 0 y 1

f(5)=f(4)+f(3)=     f(3)+f(2)+f(2)+f(1)   =    f(2)+f(1)+f(1)+f(0)+f(1)+f(0)+1
= f(1)+f(0)+1 +1 +0 +1 +0 +1 
= 1+0 +4 = 5

*/
