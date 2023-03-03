//Starships Controller
const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //pass in episode
  async getFilm(episode) {
    let url = baseUrl + `/films/${episode}`;
    let film = await axios.get(url);
    return film.data;
  },
};
