//Species Controller
const axios = require("axios");
// const baseUrl = "https://swapi.dev/api/";

module.exports = {
  //pass in the species url
  async getSpecies(speciesUrl) {
    // console.log("speciesUrl", speciesUrl);
    let species = await axios.get(speciesUrl);
    // console.log("species.data", species.data);
    return species.data;
  },
};
