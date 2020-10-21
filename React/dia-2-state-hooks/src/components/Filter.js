import React from "react";

export default function Filter({
  filter,
  onlyPending,
  handleFilterChange,
  handlePendingCheckbox,
  cleanTodos,
}) {
  return (
    <section className="filter">
      <fieldset>
        <label htmlFor="filter">Filtro</label>
        <input
          type="search"
          id="filter"
          onChange={handleFilterChange}
          value={filter}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="pending">Sólo pendientes</label>
        <input
          type="checkbox"
          id="pending"
          onChange={handlePendingCheckbox}
          checked={onlyPending}
        />
      </fieldset>

      <fieldset>
        <button
          onClick={() => {
            cleanTodos();
          }}
        >
          Borrar los todos hechos
        </button>
      </fieldset>
    </section>
  );
}
