import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PhotosContext } from "../context/PhotosContext";

const { REACT_APP_API_URL, REACT_APP_STATIC_PATH } = process.env;

export default function Photo({ image, title, description }) {
  const { likePhoto } = useContext(PhotosContext);
  const { id } = useParams();

  return (
    <img
      src={`${REACT_APP_API_URL}${REACT_APP_STATIC_PATH}/${image}`}
      alt={description || title}
      onDoubleClick={() => {
        likePhoto({ id });
      }}
    />
  );
}
