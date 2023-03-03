//Luke Controller
const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

module.exports = {
  async getCharacter(characterNumber) {
    let url = baseUrl + `/people/${characterNumber}`; //luke is the first person
    // console.log("url", url);
    let character = await axios.get(url);
    console.log("luke", character.data); //debug on luke

    return character.data;
  },
};
