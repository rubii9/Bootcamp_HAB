import React from "react";

export default function Todo({ text, id, done, deleteTodo }) {
  return (
    <>
      <p className={done ? "todo-done" : null}>
        {done ? <strong>HECHO </strong> : null}
        {text}

        <span
          role="img"
          aria-label="Borrar todo"
          onClick={() => deleteTodo(id)}
        >
          🗑️
        </span>
      </p>
    </>
  );
}
