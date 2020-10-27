import React, { useState, useEffect } from "react";
import "./App.css";
import loadingImage from "./puff.svg";

import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import Footer from "./components/Footer";
import PhotoUpload from "./components/PhotoUpload";

const { REACT_APP_API_URL, REACT_APP_MAX_FILE_SIZE } = process.env;

function App() {
  const [photos, setPhotos] = useState([]);
  const [waiting, setWaiting] = useState(true);
  const [error, setError] = useState(null);
  const [uploadMode, setUploadMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Este efecto carga las imágenes inciales
  useEffect(() => {
    const getPhotos = async () => {
      try {
        setWaiting(true);
        const response = await fetch(`${REACT_APP_API_URL}/photos`);

        if (!response.ok) {
          throw new Error("Error cargando fotos iniciales.");
        }

        const json = await response.json();

        setPhotos(json.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setWaiting(false);
      }
    };

    getPhotos();
  }, []);

  // Esta función se ejecutará para subir una foto
  const uploadPhoto = async ({ title, description, image }) => {
    try {
      if (image.size > Number(REACT_APP_MAX_FILE_SIZE)) {
        throw new Error(
          `El tamaño de la imagen es mayor que ${Math.round(
            REACT_APP_MAX_FILE_SIZE / 1024
          )}Kb`
        );
      }

      setError(null);
      setWaiting(true);
      // hacemos cosas asincronas
      const data = new FormData();
      data.append("title", title);

      if (description) {
        data.append("description", description);
      }

      data.append("image", image);

      const response = await fetch(`${REACT_APP_API_URL}/photos`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(
          "No se pudo subir la foto, inténtalo de nuevo más tarde"
        );
      }

      const json = await response.json();

      setPhotos([json.data, ...photos]);
      setUploadMode(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setWaiting(false);
    }
  };

  // Esta función se ejecutará para borrar una foto
  const deletePhoto = async (id) => {
    console.log("vamos a borrar la foto con id", id);
    try {
      setWaiting(true);
      const request = await fetch(`${REACT_APP_API_URL}/photos/${id}`, {
        method: "DELETE",
      });

      if (!request.ok) {
        throw new Error("No se pudo borrar la foto, inténtalo más tarde...");
      }
      // Aquí la foto está borrada

      setPhotos(photos.filter((photo) => photo.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setWaiting(false);
    }
  };

  // Esta función se ejecutará cuando le demos like a una foto
  const likePhoto = async (id) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/photos/${id}/like`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el like, inténtalo de nuevo...");
      }

      const json = await response.json();

      // json.data.likes
      setPhotos(
        photos.map((photo) => {
          if (photo.id === id) {
            photo.likes = json.data.likes;
          }

          return photo;
        })
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Esta función se va a ejecutar cuando se edite una foto
  const editPhoto = async ({ id, newTitle, newDescription }) => {
    console.log("vamos a editar esta foto...");
    console.log(id, newTitle, newDescription);
    setEditingId(null);

    try {
      setWaiting(true);
      // hacer cosas
      const response = await fetch(`${REACT_APP_API_URL}/photos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo editar la foto, iténtalo de nuevo");
      }

      const json = await response.json();

      // json.data tiene los datos nuevos de la foto que acabo de editar

      setPhotos(
        photos.map((photo) => {
          if (photo.id === id) {
            return json.data;
          }

          return photo;
        })
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setWaiting(false);
    }
  };

  // A partir de aquí es el HTML que renderiza este componente
  if (waiting)
    return (
      <div className="waiting">
        <img src={loadingImage} alt="Cargando" />
      </div>
    );

  return (
    <div>
      {error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Cerrar</button>
        </div>
      ) : null}
      <Header />

      <main>
        {!uploadMode ? (
          <button onClick={() => setUploadMode(true)}>Subir nueva foto</button>
        ) : null}

        {uploadMode ? (
          <PhotoUpload
            setUploadMode={setUploadMode}
            uploadPhoto={uploadPhoto}
          />
        ) : (
          <PhotoList
            photos={photos}
            deletePhoto={deletePhoto}
            likePhoto={likePhoto}
            editPhoto={editPhoto}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
