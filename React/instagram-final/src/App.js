import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoList from "./components/PhotoList";
import PhotoSingle from "./components/PhotoSingle";
import PhotoUpload from "./components/PhotoUpload";
import NotFound from "./components/NotFound";
import { AppError, AppWaiting } from "./components/AppStatus";

function App() {
  return (
    <BrowserRouter>
      <AppError />
      <AppWaiting />

      <Header />
      <main className="app-main">
        <Switch>
          <Route exact path="/">
            <PhotoList />
          </Route>

          <Route exact path="/upload">
            <PhotoUpload />
          </Route>

          <Route exact path="/photos/:id">
            <PhotoSingle />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
