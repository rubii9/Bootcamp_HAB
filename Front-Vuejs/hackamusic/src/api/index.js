import config from "./config.js";
const axios = require("axios").default;
const apiKey = config.apiKey;
const url_base = "https://ws.audioscrobbler.com/";
const url_geo =
  "2.0/?method=geo.gettopartists&country=spain&api_key=" +
  apiKey +
  "&format=json";
const url_tracks =
  "2.0/?method=geo.gettoptracks&country=spain&api_key=" +
  apiKey +
  "&format=json";
const url_tags =
  "2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";

function getArtists() {
  try {
    const response = axios.get(`${url_base}${url_geo}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function getTopTracks() {
  try {
    const response = axios.get(`${url_base}${url_tracks}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function getTopTags() {
  try {
    const response = axios.get(`${url_base}${url_tags}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
