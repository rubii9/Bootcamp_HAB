import React from "react";
import Dog from "./Dog";

function DogList({ dogs }) {
  console.log(dogs);
  return (
    <ul>
      {dogs.map((dog) => {
        return (
          <li key={dog.id}>
            <Dog
              name={dog.name}
              owner={dog.owner}
              photo={dog.photo}
              age={dog.age}
              rating={dog.rating}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default DogList;
