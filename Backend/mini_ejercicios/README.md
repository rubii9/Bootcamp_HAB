# MINI EJERCICIOS


## Ejercicio 1


Hacer un programa en Node que al ejecutarlo escriba en el terminal: "La última vez que me ejecutaste fue hace 2 minutos", pero que ponga realmente el tiempo que pasó, claro. Y la primera vez que lo ejecutes ponga *"Es la primera vez que me ejecutas"**.


## Ejercicio 2

Hacer un servidor web usando el módulo http de node de forma que cuando pongáis en el navegador http://localhost:3000/freedom conteste con un JSON así:

{
   "message": "Faltan 32 días para el final de la cuarentena"
}

(asumimos arbitrariamente que el final de la cuarentena es el martes 30 de junio de 2020)


## Ejercicio 3

aquí tenéis un json grande con una lista de nombre de persona gallegos: https://raw.githubusercontent.com/bertez/corpora/master/names/names.json
teneis que hacer un servidor web en express que responda a las seguintes urls:

a) http://localhost:3000/names -> devuelve al navegador una respuesta tipo json con la lista completa de nombres
b) http://localhost:3000/names?gender=F -> devuelve al navegador sólo los nombres de mujer
c) http://localhost:3000/names?gender=M -> devuelve al nav sólo los nombres de hombre
d) http://localhost:3000/random -> devuelve un nombre aleatorio de la lista


Podéis usar require para cargar el json: const names = require('./names.json');

## Ejercicio 4

Show me the files!!
Crear un programa de node que muestre en la consola el contenido de los ficheros que se pasen por línea de comandos pero sólo si son menos de 10Kb. node showfiles.js fichero1.txt ../files/fichero2.css

## Ejercicio 5

Medidor de memoria
Hacer un programa en node que cuando lo ejecutes te ponga el % de memoria RAM libre que tienes disponible en el ordenador.

##Ejercicio 6

Servidor web regular
Hacer un servidor web que responda a la url / con un texto que ponga "Hola" pero sólo por la mañana, el resto del día debería devolver una página de error 404.
