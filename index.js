
const { fetchBreedDescription } = require('./breedFetcher2');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, descript) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});