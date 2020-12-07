import React from "react";
import { Link } from "react-router-dom";
import "./css/PhotoThumb.css";

import Photo from "./Photo";

export default function PhotoThumb({ id, image, title, description }) {
  return (
    <Link to={`/photos/${id}`} className="app-photothumb">
      <figure>
        <Photo image={image} title={title} description={description} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  );
}
