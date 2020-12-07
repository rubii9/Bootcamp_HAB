import React, { useContext } from "react";
import "./css/AppStatus.css";
import loading from "../puff.svg";

import { AppContext } from "../context/AppContext";

export function AppError() {
  const { error, setError } = useContext(AppContext);

  return (
    <>
      {error ? (
        <div className="app-error">
          <p>{error}</p> <button onClick={() => setError(null)}>Cerrar</button>
        </div>
      ) : null}
    </>
  );
}

export function AppWaiting() {
  const { waiting } = useContext(AppContext);
  return (
    <>
      {waiting ? (
        <div className="app-waiting">
          <img src={loading} alt="Cargando..." />
        </div>
      ) : null}
    </>
  );
}
