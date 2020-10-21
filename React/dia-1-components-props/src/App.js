import React from "react";

import Header from "./components/Header";
import DogList from "./components/DogList";

import data from "./data";

import "./App.css";

function App() {
  const appInfo = {
    title: "Lista de perros molones",
    author: "Berto Yáñez",
    lastUpdate: "2020-10-19 20:15",
  };

  return (
    <>
      <Header title={appInfo.title} lastUpdate={appInfo.lastUpdate} />

      <main>
        <DogList dogs={data} />
      </main>

      <footer>(c) {appInfo.author}</footer>
    </>
  );
}

export default App;
