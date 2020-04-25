const fs = require("fs-extra");
const path = require("path");
const minimist = require("minimist");
const dateFns = require("date-fns");
const { format } = require("date-fns");

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

async function buildMessage() {
  let text = _.join(" ");
  let added = new Date();
  let done = false;
  let message = { text, added, priority, done };

  await buildArray(message);
}

async function buildArray(message) {
  let listaTareas = await comprobarLista();
  listaTareas.tasks.push(message);
  console.log(listaTareas);
  fs.writeFile(todoPath, JSON.stringify(listaTareas));
}

async function showList() {
  let listaTareas = await comprobarLista();

  for (const tarea of listaTareas.tasks) {
    console.log(`Tarea: ${tarea.text}`);
    console.log(`Prioridad: ${tarea.priority}`);
    console.log(`Echa: ${tarea.done}`);
    console.log(`Añadida: ${tarea.added}`);
    console.log("\n");
  }
}
async function makeDone(index, value) {
  let listaActualizada = await comprobarLista();
  listaActualizada.tasks[index].done = value;
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log(listaActualizada.tasks[index]);
}

async function cleanDoneList() {
  let listaActualizada = await comprobarLista();
  for (let i = 0; i < listaActualizada.tasks.length; i++) {
    if (listaActualizada.tasks[i].done) {
      listaActualizada.tasks.splice(i, 1);
    }
  }
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log("Borradas las tareas hechas!");
}

if (list) {
  showList();
} else if (done || done === 0) {
  makeDone(done, true);
} else if (undone || done === 0) {
  makeDone(undone, false);
} else if (clean) {
  cleanDoneList();
} else {
  buildMessage();
}
