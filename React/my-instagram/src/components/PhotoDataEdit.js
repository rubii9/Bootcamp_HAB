import React, { useState } from "react";

export default function PhotoDataEdit({
  id,
  title,
  description,
  setEditingId,
  editPhoto,
}) {
  // TODO: reutilizar los fieldsets del formulario de subida de imagen!!!!

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    editPhoto({ id, newTitle, newDescription });
  };

  return (
    <form onSubmit={handleEditFormSubmit}>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(event) => setNewTitle(event.target.value)}
          defaultValue={title}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          onChange={(event) => setNewDescription(event.target.value)}
          defaultValue={description}
        ></textarea>
      </fieldset>

      <button>Editar</button>
      <button type="button" onClick={() => setEditingId(null)}>
        Cancelar
      </button>
    </form>
  );
}
