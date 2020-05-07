const BACKEND_URL = "http://localhost:3001";
const entryList = document.querySelector("#entry-list");

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function buildEntry(entry) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = entry.place;
  p.textContent = `${new Date(entry.date)} - ${entry.description}`;

  if (entry.image) {
    const image = document.createElement("img");
    image.setAttribute("src", `${BACKEND_URL}/uploads/${entry.image}`);
    image.setAttribute("alt", entry.place);

    li.append(image);
  }

  li.append(h1);
  li.append(p);

  return li;
}

function addToList(entries) {
  for (const entry of entries.reverse()) {
    entryList.prepend(buildEntry(entry));
  }
}

function emptyList() {
  entryList.innerHTML = "";
}

export { emptyList, addToList, getData, buildEntry, BACKEND_URL };
