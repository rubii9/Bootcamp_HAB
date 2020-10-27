import React from "react";
import Photo from "./Photo";
import PhotoData from "./PhotoData";

export default function PhotoList({
  photos,
  deletePhoto,
  likePhoto,
  editPhoto,
  editingId,
  setEditingId,
}) {
  if (!photos.length) return <p>No hay fotos...</p>;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} className="photo">
          <article>
            <Photo
              id={photo.id}
              image={photo.image}
              description={photo.description}
              deletePhoto={deletePhoto}
              likePhoto={likePhoto}
            />
            <PhotoData
              {...photo}
              likePhoto={likePhoto}
              editPhoto={editPhoto}
              editingId={editingId}
              setEditingId={setEditingId}
            />
          </article>
        </li>
      ))}
    </ul>
  );
}
