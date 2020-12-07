import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/PhotoUpload.css";

import { PhotosContext } from "../context/PhotosContext";

import { Input, TextArea } from "./FormFields";

const { REACT_APP_MAX_FILE_SIZE } = process.env;

export default function PhotoUpload() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  const { uploadPhoto } = useContext(PhotosContext);

  const history = useHistory();

  return (
    <form
      className="app-upload"
      onSubmit={(event) => {
        event.preventDefault();
        uploadPhoto({ title, description, image, history });
      }}
    >
      <h2>Subir nueva foto</h2>
      <Input
        type="text"
        label="Título"
        id="title"
        required
        onChange={(event) => setTitle(event.target.value)}
      >
        <p className="help">Campo requerido.</p>
      </Input>

      <TextArea
        label="Descripción"
        id="description"
        maxLength="200"
        onChange={(event) => setDescription(event.target.value)}
      >
        <p className="help">Máximo 200 caracteres</p>
      </TextArea>

      <Input
        type="file"
        label="Imagen"
        id="image"
        required
        accept=".jpg,.jpeg,.png"
        onChange={(event) => setImage(event.target.files[0])}
      >
        <p className="help">{`Campo requerido. Tamaño máximo ${
          REACT_APP_MAX_FILE_SIZE / 1024
        }Kb`}</p>

        {image ? (
          <img
            src={window.URL.createObjectURL(image)}
            className="preview"
            width="100"
            alt="File Preview"
          />
        ) : null}
      </Input>

      <button>Enviar</button>
      <p className="cancel">
        <Link to="/">Cancelar</Link>
      </p>
    </form>
  );
}
