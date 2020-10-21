import React from "react";

export default function Todo({ text, id, done, deleteTodo, toggleTodo }) {
  return (
    <>
      <p className={done ? "todo-done" : null}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            toggleTodo(id);
          }}
        ></input>
        <span className="text">{text}</span>

        <span
          role="img"
          aria-label="Borrar todo"
          onClick={() => {
            if (done || window.confirm("Estás seguro/a?")) {
              deleteTodo(id);
            }
          }}
        >
          🗑️
        </span>
      </p>
    </>
  );
}
