import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.dogs = [
      {
        id: "dog0",
        name: "Lula",
        owner: "Berto",
        age: 10,
        rating: 5,
      },
      {
        id: "dog1",
        name: "Scooby",
        owner: "Dan",
        age: 9,
        rating: 4,
      },
      {
        id: "dog2",
        name: "Pirulais",
        owner: "David",
        age: 7,
        rating: 5,
      },
      {
        id: "dog3",
        name: "Merchi",
        owner: "María",
        age: 12,
        rating: 3,
      },
    ];
  }

  render() {
    return (
      <>
        <h1 id="principal" className="titulo">
          Bienvenidos a mi app de perros
        </h1>

        <ul>
          {this.dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <h2>{dog.name}</h2>
                <p>Age: {dog.age}</p>
                <p>Owner: {dog.owner}</p>
                <p>Rating: {dog.rating}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
