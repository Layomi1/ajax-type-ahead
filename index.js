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

function commaSeparateNumber(val) {
  val = val.replace(",", "");
  var array = val.split("");
  var index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ",");
    // Decrement by 4 since we just added another unit to the array.
    index -= 4;
  }
  return array.join("");
}

function numericWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findMatchedCities(wordToMatch, cities) {
  return cities.filter((place) => {
    // place must match word entered in the search
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayCities(e) {
  const matchArray = findMatchedCities(this.value, cities);

  const html = matchArray
    .map((place) => {
      // style the city name

      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        ` <span class='hl'>${this.value}</span>`,
      );
      const stateName = place.state.replace(
        regex,
        ` <span class='hl'>${this.value}</span>`,
      );
      return `<li>
              <span class='name'>${cityName}, ${stateName}</span>
              <span class='population'>${numericWithCommas(place.population)}</span>
            </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

search.addEventListener("change", displayCities);
search.addEventListener("keyup", displayCities);
suggestions.addEventListener("enter", findMatchedCities);
x;
