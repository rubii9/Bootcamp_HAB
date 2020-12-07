import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./css/PhotoSingle.css";

import { PhotosContext } from "../context/PhotosContext";
import { AppContext } from "../context/AppContext";
import Photo from "./Photo";

export default function PhotoSingle() {
  const { getPhoto, single, setSingle, deletePhoto, likePhoto } = useContext(
    PhotosContext
  );
  const { setWaiting, setError } = useContext(AppContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getSingle() {
      try {
        setWaiting(true);
        const single = await getPhoto({ id });
        setSingle(single);
      } catch (error) {
        setError(error.message);
      } finally {
        setWaiting(false);
      }
    }

    getSingle();
    // eslint-disable-next-line
  }, []);

  if (!single) return <></>;

  const { title, description, likes } = single;

  return (
    <section className="app-photo-single">
      <figure>
        <Photo {...single} />
        <button
          onClick={() => {
            if (window.confirm("Seguro que quieres borrar la foto?"))
              deletePhoto({ id, history });
          }}
        >
          X
        </button>
      </figure>
      <footer className="app-photo-single-footer">
        <div className="data">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="action">
          <span
            className="likes"
            role="img"
            aria-label="Número de likes"
            onDoubleClick={() => {
              likePhoto({ id });
            }}
          >
            ❤️ {likes}
          </span>
        </div>
      </footer>
    </section>
  );
}
