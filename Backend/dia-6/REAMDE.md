node todo.js Comprar pan //Añadiria "comprar pan" al principio de la lista de tareas
node todo.js Ir al dentista --priority //Añadiria con prioridad alta
node todo.js --list //Listaría todas las tareas
node todo.js --done=1 //Marcaría la tarea 1 como hecha
node todo.js --undone=1 //Desmarcaría la tarea 1 como hecha
node todo.js --clean //Borraria las tareas ya hechas

Cada tarea debe guardar el texto de la tarea, el estado y fecha añadida
Cuando se listen debe mostrar toda esa información

La lista de tareas debe guardarse en un archivo .tasks.json en el directorio personal del usuario.

Modules:
//minimist
//fs-extra
//date-fns

PARA NOTA:
La aplicación debería leer un archivo .env que tuviera una variable de entorno LANG=es/gl en base a esa variable mostrar los textos de la aplicación
{
"tasks": [
{
"text": "Texto de la tarea",
"added": "2020-04-25T10:34:28.140Z",
"priority": "normal",
"done": false
},
{
"text": "Texto de otra tarea",
"added": "2020-04-25T10:24:28.140Z",
"priority": "high",
"done": false
}
],
"lastUpdate": "2020-04-25T10:34:28.140Z"
}
