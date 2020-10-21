import React from "react";
import Title from "./Title";

function DogInfo({ name, age, rating }) {
  return (
    <section className="dog-info">
      <Title text={name} />
      <p>{age} años de can</p>
      <p>{rating} estrellas</p>
    </section>
  );
}

function Dog({ name, owner, photo, age, rating }) {
  return (
    <article>
      <figure>
        <img alt={name} src={`/img/${photo}`} />
        <figcaption>Foto hecha por {owner}</figcaption>
      </figure>

      <DogInfo name={name} age={age} rating={rating} />
    </article>
  );
}

export default Dog;
