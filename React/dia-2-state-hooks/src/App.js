import React from "react";
import { v1 } from "uuid";

import "./App.css";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

/*
  App
    - Header
    - TodoList
      - Todo

  Estructura objecto todo:
  {
    id: "todo1",
    text: "Ir a por pan",
    done: false,
  },
*/

function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todoCache")) || []
  );
  const [filter, setFilter] = React.useState(
    localStorage.getItem("todoFilter") || ""
  );
  const [onlyPending, setOnlyPending] = React.useState(
    JSON.parse(localStorage.getItem("todoOnlyPendingCache")) || false
  );

  //Funcion que se ejecuta cuando cambia la variable todos
  React.useEffect(() => {
    localStorage.setItem("todoCache", JSON.stringify(todos));
    localStorage.setItem("todoFilter", filter);
    localStorage.setItem("todoOnlyPendingCache", JSON.stringify(onlyPending));
  }, [todos, filter, onlyPending]);

  // Esta función se ejecuta cuando cambia el input de filter (en el componente Filter)
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Esta función se ejecuta cuando cambia el checkbox de pendientes (en el componente Filter)
  const handlePendingCheckbox = (event) => {
    setOnlyPending(event.target.checked);
  };

  // Esta función recibe un texto y añade un todo con ese texto
  const addTodo = (todoText) => {
    const todo = {
      id: v1(),
      text: todoText,
      done: false,
    };

    setTodos([todo, ...todos]);
  };

  //Esta funcion borra un todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Esta funcion cambia el estad del todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Esta funcion borra todos los hechos
  const cleanTodos = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  // Filtro el array de todos en base al estado de "filter"
  let filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filter.toLowerCase());
  });

  // Si onlyPending es true, sólo dejo los que están hechos
  if (onlyPending) {
    filteredTodos = filteredTodos.filter((todo) => todo.done === false);
  }

  return (
    <>
      <Header />

      <NewTodo addTodo={addTodo} />

      <Filter
        filter={filter}
        onlyPending={onlyPending}
        handleFilterChange={handleFilterChange}
        handlePendingCheckbox={handlePendingCheckbox}
        cleanTodos={cleanTodos}
      />

      <main>
        <TodoList
          list={filteredTodos}
          name="berto"
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </main>
    </>
  );
}

export default App;
