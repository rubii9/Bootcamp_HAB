import React, { useState } from "react";

const { REACT_APP_MAX_FILE_SIZE } = process.env;

export default function PhotoUpload({ setUploadMode, uploadPhoto }) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    uploadPhoto({ title, description, image });
  };

  return (
    <section className="photo-upload">
      <h2>Subir nueva foto</h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            required
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            maxLength="200"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <p className="help">Opcional</p>
        </fieldset>

        <fieldset>
          <label htmlFor="image">Foto</label>

          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg,.jpeg,.png"
            required
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <p className="help">{`Tamaño máximo ${
            REACT_APP_MAX_FILE_SIZE / 1024
          }Kb`}</p>

          {image ? (
            <img
              src={window.URL.createObjectURL(image)}
              width="100"
              alt="File Preview"
            />
          ) : null}
        </fieldset>

        <button>Subir foto</button>

        <button type="button" onClick={() => setUploadMode(false)}>
          Cancelar
        </button>
      </form>
    </section>
  );
}
