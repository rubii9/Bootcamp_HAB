import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <h1>My Instagram</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Portada</Link>
          </li>
          <li>
            <Link to="/upload">Subir foto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
