const suggestions = document.querySelector(".suggestions");

const search = document.querySelector(".search");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

async function fetchCities() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    cities.push(...data);
  } catch (error) {
    console.log(error);
  }
}
fetchCities();

function findMatchedCities(wordToMatch, cities) {
  return cities.filter((place) => {
    // place must match word entered in the search
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
    console.log(place);
  });
}

function displayCities(e) {
  const matchArray = findMatchedCities(this.value, cities);
  console.log(matchArray);
}

search.addEventListener("change", displayCities);
search.addEventListener("keyup", displayCities);
suggestions.addEventListener("enter", findMatchedCities);
