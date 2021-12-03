const request = require("request");
const fs = require("fs");


const userInput = process.argv[2];


// Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
// https://api.thecatapi.com/v1/breeds/search?breed_ids={userInput}

const fetchBreedDescription = function (breed, callback) {
  let URL = `https://api.theecatapi.com/v1/breeds/search?q=${userInput}`;


  request(URL, function (error, response, body) {
    
    if (error) {
      console.log("Error Alert, sorry!\n", error);
      return;
    }
    if (!userInput) {
      console.log("Search term undefined.");
      return;
    }
    
    if (response && response.statusCode === 200) {
      
      if (!data[0]) {
        console.log("Breed does not exist.");
        return;
      }
      console.log("data type: ", data[0].description);
      console.log(typeof body);
    }
  });
};
fetchBreedDescription("breed", "callback");


