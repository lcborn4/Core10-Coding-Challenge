//Starships Controller
const axios = require("axios");
// const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //pass in the Starship url
  async getStarShip(starShipUrl) {
    let starShip = await axios.get(starShipUrl);
    return starShip.data;
  },
};
