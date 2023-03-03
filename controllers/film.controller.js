//Starships Controller
const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //pass in episode
  async getFilm(episode) {
    let url = baseUrl + `/films/${episode}`;
    // console.log("url", url);
    let film = await axios.get(url);
    // console.log("film", film.data); //debug on luke

    // console.log("starShip.data", starShip.data);
    return film.data;
  },
};
