"use strict";

const lis = document.querySelectorAll("ul li");

const handleLiClick = event => {
  const item = event.target;

  if (!item.hasAttribute("data-count")) {
    item.setAttribute("data-count", 0);
  }

  const newCount = Number(item.getAttribute("data-count")) + 1;

  item.textContent = `clicks ${newCount}`;

  item.setAttribute("data-count", newCount);
};

for (const li of lis) {
  li.addEventListener("click", handleLiClick);
}
