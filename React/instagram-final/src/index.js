import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AppContextProvider } from "./context/AppContext";
import { PhotosContextProvider } from "./context/PhotosContext";

ReactDOM.render(
  <AppContextProvider>
    <PhotosContextProvider>
      <App />
    </PhotosContextProvider>
  </AppContextProvider>,
  document.getElementById("root")
);
