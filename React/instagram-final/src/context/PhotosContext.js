import { createContext, useState, useContext, useEffect } from "react";

import { AppContext } from "./AppContext";

const PhotosContext = createContext();

const { REACT_APP_API_URL, REACT_APP_MAX_FILE_SIZE } = process.env;

function PhotosContextProvider({ children }) {
  const { setWaiting, setError } = useContext(AppContext);
  const [photos, setPhotos] = useState([]);
  const [single, setSingle] = useState(null);

  // Este hook carga las fotos iniciales
  useEffect(() => {
    async function getPhotos() {
      try {
        setWaiting(true);
        const response = await fetch(`${REACT_APP_API_URL}/photos`);

        if (!response.ok) {
          throw new Error("Error cargando fotos iniciales");
        }

        const json = await response.json();

        setPhotos(json.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setWaiting(false);
      }
    }

    getPhotos();
  }, [setError, setWaiting]);

  // Esta función se ejecutará para subir una foto
  const uploadPhoto = async ({ title, description, image, history }) => {
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

      if (history) history.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setWaiting(false);
    }
  };

  // Esta función asíncrona devuelve una foto....
  const getPhoto = async ({ id }) => {
    const response = await fetch(`${REACT_APP_API_URL}/photos/${id}`);
    const json = await response.json();

    return json.data;
  };

  // Esta función se ejecutará para borrar una foto
  const deletePhoto = async ({ id, history }) => {
    try {
      setWaiting(true);
      const request = await fetch(`${REACT_APP_API_URL}/photos/${id}`, {
        method: "DELETE",
      });

      if (!request.ok) {
        throw new Error("No se pudo borrar la foto, inténtalo más tarde...");
      }
      // Aquí la foto está borrada

      setPhotos(photos.filter((photo) => photo.id !== Number(id)));
      if (history) history.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setWaiting(false);
    }
  };

  // Esta función se ejecutará cuando le demos like a una foto
  const likePhoto = async ({ id }) => {
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
          if (photo.id === Number(id)) {
            photo.likes = json.data.likes;
          }

          return photo;
        })
      );

      setSingle({ ...single, likes: single.likes + 1 });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <PhotosContext.Provider
      value={{
        photos,
        uploadPhoto,
        getPhoto,
        single,
        setSingle,
        deletePhoto,
        likePhoto,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

export { PhotosContext, PhotosContextProvider };
