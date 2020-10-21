import React from "react";
import Photo from "./Photo";
import PhotoData from "./PhotoData";

export default function PhotoList({ photos }) {
  if (!photos.length) return <p>No hay fotos...</p>;
  return (
    <ul>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className="photo">
            <article>
              <Photo image={photo.image} description={photo.description} />
              <PhotoData {...photo} />
            </article>
          </li>
        );
      })}
    </ul>
  );
}
