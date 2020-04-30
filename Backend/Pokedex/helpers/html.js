function pageLayout(title, content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${title}</title>
    
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <header>
      <h1><a href="/">Pokedex!</a></h1>
    </header>

      ${content}
  
    </body>
  </html>
  `;
}

function frontPage() {
  return `
  <section id="form">
    <form action="/search" method="GET">
      <fieldset>
        <label for="query">Busca tu pokemon: </label>
        <input type="search" name="query" id="query" placeholder="nombre del pokemon..." /> 
      </fieldset>
      <button>Buscar</button>
    </form>
  </section>
  `;
}

function searchResults(results) {
  const htmlResults = results.map((result) => {
    const { english, japanese } = result.name;

    return `<li>
              <a href="/pokemon/${result.id}">
                ${english} / ${japanese}
              </a>
              (${result.type.join(", ")})
            </li>`;
  });

  return `
  <section id="results">
   <ul>
    ${htmlResults.join("")}
   </ul>
  </section>
  `;
}

function pokemonInfo(result) {
  const { english, japanese } = result.name;
  const { HP, Attack, Defense, Speed } = result.base;
  const htmlResults = `
            <li id="nombre">
              ${english} / ${japanese}
            </li>
            <li>
                Type: (${result.type})
            </li>
            <li id="imagen">
            <img src="/images/${codenumber(result.id)}.png">
            </li>

            <li id="base">
              Base: 
              <ul>
                <li>HP: ${HP}</li>
                <li>Attack: ${Attack}</li>
                <li>Defense: ${Defense}</li>
                <li>Sp Attack: ${result.base["Sp. Attack"]}</li>
                <li>Sp Defense: ${result.base["Sp. Defense"]}</li>
                <li>Speed: ${Speed}</li>
              </ul>
            </li>
            `;

  return `
  <section id="pokemon">
   <ul>
    ${htmlResults}
   </ul>
  </section>
  `;
}

function codenumber(id) {
  if (id < 10) {
    return "00" + id;
  } else if (id >= 10 && id < 100) {
    return "0" + id;
  } else {
    return id.toString();
  }
}

function errorPage(message) {
  return `
    <section class="error">
      <p>${message}</p>
      <a href="/">Volver a la portada</a>
    </section>
  `;
}

module.exports = {
  pageLayout,
  frontPage,
  errorPage,
  searchResults,
  pokemonInfo,
};
