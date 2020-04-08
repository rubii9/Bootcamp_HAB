class AppData {
  constructor({ dbName }) {
    this.dbName = dbName;

    this.state = {
      todos: []
    };

    const storedState = window.localStorage.getItem(this.dbName);

    if (storedState) {
      this.state = JSON.parse(storedState);
    }
  }

  // Añadir un nuevo todo al estado
  addTodo(text, force) {
    const cleanText = text.trim();

    if (!force) {
      const existingTodo = this.state.todos.find(
        todo => todo.task.toLowerCase() === cleanText.toLowerCase()
      );

      if (existingTodo) {
        throw new Error("Este todo ya está en la lista");
      }
    }

    if (cleanText.length === 0 || cleanText.length > 256) {
      throw new Error("El texto del todo debe tener entre 1 y 256 caracteres");
    }

    const newTodo = {
      task: cleanText,
      done: false
    };

    this.state.todos.unshift(newTodo);
    this.sync();
  }

  // Marcar un todo como hecho/pendiente
  toggleTodoStatus(index) {
    if (typeof index !== "number") {
      throw new Error("El índice del todo debe ser un número");
    }

    if (index < 0) {
      throw new Error("El índice del todo debe ser positvo");
    }

    if (index >= this.state.todos.length) {
      throw new Error("El todo no existe");
    }

    const todo = this.state.todos[index];
    todo.done = !todo.done;

    this.sync();
  }

  // Borra todos los todos marcados como hechos
  cleanTodoList() {
    const cleanList = this.state.todos.filter(todo => todo.done === false);

    this.state.todos = cleanList;
    this.sync();
  }

  // Borra la lista completa de todos
  deleteAllTodos() {
    this.state.todos = [];
    this.sync();
  }

  // Devuelve todos los todos
  getTodos() {
    return this.state.todos;
  }

  sync() {
    const stateAsString = JSON.stringify(this.state);
    window.localStorage.setItem(this.dbName, stateAsString);
  }
}

export default AppData;
