import React from "react";

export default function Filter({
  filter,
  onlyPending,
  handleFilterChange,
  handlePendingCheckbox,
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
    </section>
  );
}
