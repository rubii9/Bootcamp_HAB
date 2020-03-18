"use strict";

const input = document.querySelector("#tweet");
const button = document.querySelector("#send");
const list = document.querySelector("#latest");

let tweeList = [];
const cachedTweets = JSON.parse(window.localStorage.getItem("tweet-list"));

if (cachedTweets) {
  tweeList = cachedTweets;
}

writeTweetList();

function writeTweetList() {
  // Vaciar la lista de tweets
  // Escribir un nuevo li por cada elemento del array
  list.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const tweet of tweeList) {
    const li = document.createElement("li");
    li.textContent = tweet;
    fragment.append(li);
  }

  list.append(fragment);
}

function handleClick(event) {
  event.preventDefault();
  const text = input.value.trim();

  if (text.length > 0 && text.length < 281) {
    tweeList.unshift(text);
    writeTweetList();
    window.localStorage.setItem("tweet-list", JSON.stringify(tweeList));
    input.value = "";
  }
}

button.addEventListener("click", handleClick);
