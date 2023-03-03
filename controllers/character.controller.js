//Luke Controller
const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

module.exports = {
  async getCharacter(characterNumber) {
    let url = baseUrl + `/people/${characterNumber}`; //luke is the first person
    let character = await axios.get(url);

    return character.data;
  },
};
