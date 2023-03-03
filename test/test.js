//test script
const axios = require("axios");
const chai = require("chai");
var assert = chai.assert;

let baseUrl = "http://localhost:3000/sw/";
console.log("testing");
// 1. Return a list of the Starships related to Luke Skywalker
describe("Luke Skywalker", function () {
  describe("Starships", async function () {
    it("should return 2 ships", async function () {
      let starShipsData = await axios.get(baseUrl + "character/starships/1");
      assert.lengthOf(starShipsData.data, 2);
    });
  });
});
// http://localhost:3000/sw/character/starships/1
// 2. Return the classification of all species in the 1st episode
describe("Species Classification", function () {
  describe("1st Episode", function () {
    it("should return 4 species", async function () {
      let speciesData = await axios.get(baseUrl + "classification/species/1");
      assert.lengthOf(speciesData.data, 4);
    });
  });
});
// http://localhost:3000/sw/classification/species/1
// 3. Return the total population of all planets in the Galaxy
describe("Total Galaxy Population", function () {
  it("should be a lot", async function () {
    let populationData = await axios.get(baseUrl + "population/all");
    assert.equal(populationData.data, 1007536201000);
  });
});
// http://localhost:3000/sw/population/all
