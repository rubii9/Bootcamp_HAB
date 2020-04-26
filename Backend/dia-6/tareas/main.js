const fs = require("fs-extra");
const minimist = require("minimist");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
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
  const text = _.join(" ");
  const date = new Date();
  const added = format(date, "d 'de' MMMM 'del' yyyy 'a las' H:mm", {
    locale: es,
  });
  const done = false;
  const message = { text, added, priority, done };

  await buildArray(message);
}

//Añadir mensaje al array de tareas
async function buildArray(message) {
  let listaTareas = await comprobarLista();
  listaTareas.tasks.push(message);
  fs.writeFile(todoPath, JSON.stringify(listaTareas));
  console.log(chalk`
    {blue.bold Tarea añadida correctamente} `);
}

//Mostrar las tareas
async function showList() {
  let listaTareas = await comprobarLista();

  if (listaTareas.tasks.length < 1) {
    console.log(chalk`
    {blue.bold No hay ninguna tarea} `);
  }

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
        ? chalk.greenBright("completada ✔️")
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
    {blue.bold Estado:}  ${
      listaActualizada.tasks[index].done === true
        ? chalk.greenBright("completada ✔️")
        : chalk.bold.magentaBright("pendiente")
    }
    `);
}

//Borrar tareas completadas
async function cleanDoneList() {
  let listaActualizada = await comprobarLista();
  for (let i = listaActualizada.tasks.length - 1; i > -1; i--) {
    if (listaActualizada.tasks[i].done) {
      listaActualizada.tasks.splice(i, 1);
    }
  }
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log(chalk`
    {blue.bold Se han eliminado las tareas completadas} `);
}

if (list) {
  showList();
} else if (done || done === 0) {
  makeDone(done, true);
} else if (undone || undone === 0) {
  makeDone(undone, false);
} else if (clean) {
  cleanDoneList();
} else if (_.length > 1) {
  buildMessage();
}
