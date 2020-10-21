import React from "react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export default function PhotoData({ title, description, date }) {
  const prettyDate = formatDistanceToNow(new Date(date), { locale: es });
  return (
    <section className="photo-data">
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="extra">
        <time dateTime={date}>hace {prettyDate}</time>
        <span className="likes" role="img" aria-label="Número de likes">
          ❤️ 0
        </span>
      </div>
    </section>
  );
}
