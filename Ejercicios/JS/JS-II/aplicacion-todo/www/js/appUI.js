class AppUI {
  constructor({ element, db }) {
    this.element = element;
    this.db = db;

    this.form = this.element.querySelector("form.add");
    this.clean = this.element.querySelector("button.clean");
    this.destroy = this.element.querySelector("button.destroy");
    this.list = this.element.querySelector("ul.todolist");
    this.error = this.element.querySelector("section.error");

    if (
      !this.form ||
      !this.clean ||
      !this.destroy ||
      !this.list ||
      !this.error
    ) {
      throw new Error("Faltan elementos. Comprueba el HTML");
    }

    this.addEvents();
    this.render();
  }

  showError(message) {
    this.error.textContent = message;
    this.error.style.display = "block";
  }

  hideError() {
    this.error.display = "none";
  }

  //Asignar eventos a los elementos del UI
  addEvents() {
    // Al enviar el formulario debe añadirse un todo a la db
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      const todoInput = this.form.elements.todotext;
      try {
        this.db.addTodo(todoInput.value);
      } catch (error) {
        if (error.message === "Este todo ya está en la lista") {
          if (
            confirm(
              "Esa tarea ya está en la lista. ¿Quieres añadirlo de nuevo?"
            )
          ) {
            this.db.addTodo(todoInput.value, true);
          }
        }
      }

      todoInput.value = "";

      this.render();
    });

    //Al clickar en limpar completados debe ejecutarse el método de la db correspondiente
    this.clean.addEventListener("click", event => {
      this.db.cleanTodoList();
      this.render();
    });

    //Al clickar en borrar todo debe ejecutarse el método de la db correspondiente
    this.destroy.addEventListener("click", event => {
      const confirmation = window.prompt(
        "Escribe BORRAR para borrar todos los todos"
      );

      if (confirmation && confirmation.toUpperCase() === "BORRAR") {
        this.db.deleteAllTodos();
        this.render();
      }
    });

    // Al clicar en el ul si clico en un checkbox marcar el todo correspondiente como done o no done
    this.list.addEventListener("click", event => {
      const target = event.target;

      if (target.matches("input[type=checkbox]")) {
        const index = Number(target.getAttribute("data-index"));
        this.db.toggleTodoStatus(index);
        this.render();
      }
    });
  }

  render() {
    this.list.innerHTML = "";
    const todos = this.db.getTodos();

    const fragment = document.createDocumentFragment();

    let index = 0;

    for (const todo of todos) {
      const todoItem = document.createElement("li");

      // Creamos el texto del todo
      const todoText = document.createElement("p");
      todoText.textContent = todo.task;

      //Creamos el checkbox
      const todoCheck = document.createElement("input");
      todoCheck.setAttribute("type", "checkbox");
      todoCheck.setAttribute("data-index", index);

      if (todo.done) {
        todoCheck.setAttribute("checked", true);
        todoItem.classList.add("done");
      }

      todoItem.append(todoCheck);
      todoItem.append(todoText);

      fragment.append(todoItem);
      index++;
    }

    this.list.append(fragment);
  }
}

export default AppUI;
