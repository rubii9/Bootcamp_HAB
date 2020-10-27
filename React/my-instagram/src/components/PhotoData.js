import React from "react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

import PhotoDataEdit from "./PhotoDataEdit";

export default function PhotoData({
  id,
  title,
  description,
  date,
  likes,
  likePhoto,
  editPhoto,
  editingId,
  setEditingId,
}) {
  const prettyDate = formatDistanceToNow(new Date(date), { locale: es });

  const editMode = editingId === id;

  return (
    <section className="photo-data">
      <div className="info">
        {editMode ? (
          <PhotoDataEdit
            id={id}
            title={title}
            description={description}
            editPhoto={editPhoto}
            setEditingId={setEditingId}
          />
        ) : (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        )}

        {!editMode ? (
          <button onClick={() => setEditingId(id)}>Editar foto</button>
        ) : null}
      </div>

      <div className="extra">
        <time dateTime={date}>hace {prettyDate}</time>
        <span
          className="likes"
          role="img"
          aria-label="Número de likes"
          onDoubleClick={() => {
            likePhoto(id);
          }}
        >
          ❤️ {likes}
        </span>
      </div>
    </section>
  );
}
