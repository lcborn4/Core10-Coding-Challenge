//Species Controller
const axios = require("axios");
// const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //pass in the species url
  async getSpecies(speciesUrl) {
    let species = await axios.get(speciesUrl);
    return species.data;
  },
};
