import React, { useContext } from "react";
import "./css/PhotoList.css";

import PhotoThumb from "./PhotoThumb";

import { PhotosContext } from "../context/PhotosContext";

export default function PhotoList() {
  const { photos } = useContext(PhotosContext);

  return (
    <ul className="app-photolist">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoThumb {...photo} />
          </li>
        );
      })}
    </ul>
  );
}
