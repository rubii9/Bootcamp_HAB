import React from "react";

export default function NewTodo({ addTodo }) {
  const [newTodoText, setNewTodoText] = React.useState("");
  const [error, setError] = React.useState("");

  const handleButtonClick = () => {
    if (newTodoText.length > 0 && newTodoText.length < 200) {
      addTodo(newTodoText);
      setNewTodoText("");
    } else {
      setError("El texto del todo debe estar entre 1 y 199 caracteres");
    }
  };

  return (
    <section className="new-todo">
      <fieldset>
        <label htmlFor="new">Nuevo todo</label>

        <input
          type="text"
          id="new"
          value={newTodoText}
          onChange={(event) => {
            setNewTodoText(event.target.value);
            setError("");
          }}
        />

        <button onClick={handleButtonClick}>Enviar</button>
        {error ? <p className="error">{error}</p> : null}
      </fieldset>
    </section>
  );
}
