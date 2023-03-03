//Starships Controller
const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //gets all planets
  async getAllPlanets() {
    let url = baseUrl + "/planets";
    let galaxy = await axios.get(url);
    return galaxy.data;
  },
};
