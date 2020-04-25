const fs = require("fs-extra");
const path = require("path");
const minimist = require("minimist");
const dateFns = require("date-fns");
const { format } = require("date-fns");
const chalk = require("chalk");

const todoPath = "./.tasks.json";
const { _, priority, done, undone, clean, list } = minimist(
  process.argv.slice(2)
);

//comprobar si existe .tasks.json
async function comprobarLista() {
  try {
    if (!fs.existsSync(todoPath)) {
      const lista = { tasks: [], update: new Date() };
      fs.writeFile(todoPath, JSON.stringify(lista));
      return lista;
    } else {
      const lista = require("./.tasks.json");
      return lista;
    }
  } catch (error) {
    console.log(error);
  }
}

//Crear el mensaje
async function buildMessage() {
  let text = _.join(" ");
  let added = new Date();
  let done = false;
  let message = { text, added, priority, done };

  await buildArray(message);
}

//Añadir mensaje al array de tareas
async function buildArray(message) {
  let listaTareas = await comprobarLista();
  listaTareas.tasks.push(message);
  fs.writeFile(todoPath, JSON.stringify(listaTareas));
  for (const tarea of listaTareas.tasks) {
    console.log(chalk`
    {blue.bold Nombre:} ${chalk.yellow.bold(tarea.text)}
    {blue.bold Prioridad:} {magenta ${
      tarea.priority === undefined
        ? chalk.greenBright("normal")
        : chalk.bold.redBright.underline("alta")
    }}
    {blue.bold Estado:}  ${
      tarea.done === true
        ? chalk.greenBright("completada")
        : chalk.bold.magentaBright("pendiente")
    }
    {blue.bold Añadida:} {magenta ${tarea.added}}
    `);
  }
}

//Mostrar las tareas
async function showList() {
  let listaTareas = await comprobarLista();

  for (const tarea of listaTareas.tasks) {
    console.log(chalk`
    {blue.bold Nombre:} ${chalk.yellow.bold(tarea.text)}
    {blue.bold Prioridad:} {magenta ${
      tarea.priority === undefined
        ? chalk.greenBright("normal")
        : chalk.bold.redBright.underline("alta")
    }}
    {blue.bold Estado:}  ${
      tarea.done === true
        ? chalk.greenBright("completada")
        : chalk.bold.magentaBright("pendiente")
    }
    {blue.bold Añadida:} {magenta ${tarea.added}}
    `);
  }
}

//Marcar como hechas las tareas
async function makeDone(index, value) {
  let listaActualizada = await comprobarLista();
  listaActualizada.tasks[index].done = value;
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log(chalk`
    {blue.bold Nombre:} ${chalk.yellow.bold(listaActualizada.tasks[index].text)}
    {blue.bold Prioridad:} {magenta ${
      listaActualizada.tasks[index].priority === undefined
        ? chalk.greenBright("normal")
        : chalk.bold.redBright.underline("alta")
    }}
    {blue.bold Estado:}  ${
      listaActualizada.tasks[index].done === true
        ? chalk.greenBright("completada")
        : chalk.bold.magentaBright("pendiente")
    }
    {blue.bold Añadida:} {magenta ${listaActualizada.tasks[index].added}}
    `);
}

//Borrar tareas completadas
async function cleanDoneList() {
  let listaActualizada = await comprobarLista();
  for (let i = 0; i < listaActualizada.tasks.length; i++) {
    if (listaActualizada.tasks[i].done) {
      listaActualizada.tasks.splice(i, 1);
    }
  }
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log("Borradas las tareas completadas!");
}

if (list) {
  showList();
} else if (done || done === 0) {
  makeDone(done, true);
} else if (undone || undone === 0) {
  makeDone(undone, false);
} else if (clean) {
  cleanDoneList();
} else {
  buildMessage();
}
