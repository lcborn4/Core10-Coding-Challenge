const express = require("express");
const router = express.Router();
const axios = require("axios");

const { getCharacter } = require("../controllers/character.controller");
const { getStarShip } = require("../controllers/starships.controller");
const { getFilm } = require("../controllers/film.controller");
const { getSpecies } = require("../controllers/species.controller");
const { getAllPlanets } = require("../controllers/planets.controller");

//Return a list of the Starships related to Luke Skywalker
//return luke's starships
router.get("/character/starships/:characterNumber", async (req, res, next) => {
  try {
    let characterNumber = req.params.characterNumber; //1 for luke
    let charObj = await getCharacter(characterNumber); //character object
    let starShips = charObj.starships;
    //they are in starships

    //set in promise
    let promises = [];
    //find the ships
    starShips.forEach((starShip) => {
      promises.push(getStarShip(starShip));
    });

    let retrievedStarShips = await Promise.all(promises);
    let starShipNames = [];
    retrievedStarShips.forEach((starShips) => {
      starShipNames.push(starShips.name);
    });
    //return starships
    return res.status(200).json(starShipNames);
  } catch (err) {
    console.log(err);
    //possibly send error code
    res.status(400).send(err);
  }
});

// Return the classification of all species in the 1st episode
//1 is the episode
router.get("/classification/species/:episode", async (req, res, next) => {
  try {
    let episode = req.params.episode;

    //get film
    let film = await getFilm(episode);

    let promises = [];
    //get the species
    film.species.forEach((species) => {
      promises.push(getSpecies(species));
    });

    let speciesObjs = await Promise.all(promises);
    let classifications = [];
    speciesObjs.forEach((species) => {
      classifications.push(species.classification);
    });
    //remove duplicates
    let uniqueClassifications = [...new Set(classifications)];
    return res.status(200).json(uniqueClassifications);
  } catch (err) {
    console.log(err);
    //possibly send error code
    res.status(400).send(err);
  }
});

// Return the total population of all planets in the Galaxy
router.get("/population/all", async (req, res, next) => {
  try {
    let population = 0;

    let allPlanets = await getAllPlanets();

    allPlanets.results.forEach((planet) => {
      if (planet.population !== "unknown") {
        let planetPopulation = Number(planet.population);
        population = population + planetPopulation;
      }
    });

    return res.status(200).json(population);
  } catch (err) {
    console.log(err);
    //possibly send error code
    res.status(400).send(err);
  }
});

module.exports = router;
