import React from "react";

const { REACT_APP_API_URL, REACT_APP_STATIC_PATH } = process.env;

export default function Photo({
  id,
  image,
  description,
  deletePhoto,
  likePhoto,
}) {
  return (
    <figure className="photo-image">
      <button
        onClick={() => {
          if (window.confirm("Estás seguro? no hay vuelta atrás")) {
            deletePhoto(id);
          }
        }}
      >
        X
      </button>
      <img
        src={`${REACT_APP_API_URL}${REACT_APP_STATIC_PATH}/${image}`}
        alt={description}
        onDoubleClick={() => {
          likePhoto(id);
        }}
      />
    </figure>
  );
}
