import React, { useState, useEffect } from "react";
import "./App.css";
import loadingImage from "./puff.svg";

import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import Footer from "./components/Footer";

const { REACT_APP_API_URL } = process.env;

function App() {
  const [photos, setPhotos] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setWaiting(true);
        const response = await fetch(`${REACT_APP_API_URL}/photos`);

        if (!response.ok) {
          throw Error("Error cargando fotos iniciales");
        }
        const json = await response.json();
        setPhotos(json.data);
        setWaiting(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setWaiting(false);
      }
    };

    getPhotos();
  }, []);

  if (waiting) {
    return (
      <div className="waiting">
        <img src={loadingImage} alt="Cargando"></img>
      </div>
    );
  }
  return (
    <>
      {error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Cerrar</button>
        </div>
      ) : null}

      <Header />

      <main>
        <PhotoList photos={photos} />
      </main>

      <Footer />
    </>
  );
}

export default App;
