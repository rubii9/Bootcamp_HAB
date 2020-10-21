import React from "react";
const { REACT_APP_API_URL, REACT_APP_STATIC_PATH } = process.env;

export default function Photo({ image, description }) {
  return (
    <figure>
      <img
        src={`${REACT_APP_API_URL}${REACT_APP_STATIC_PATH}/${image}`}
        alt={description}
      ></img>
    </figure>
  );
}
