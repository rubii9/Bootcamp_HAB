import React from "react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

import Title from "./Title";

function Header({ title, lastUpdate }) {
  return (
    <header>
      <Title text={title} />
      <p>
        Actualizado hace{" "}
        {formatDistanceToNow(new Date(lastUpdate), { locale: es })}
      </p>
    </header>
  );
}

export default Header;
