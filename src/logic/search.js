import cities from "../data/cities.json";
import capitalize from "../stingFunctions/capitalize";
import fetchResults from "../logic/fetchResults";
import displayResults from "../logic/displayResults";
import getSearchBarInput from "../logic/getSearchBarInput";

export default function Search() {
  let searchBar = document.getElementById("searchBar");
  let searchButton = document.getElementById("searchButton");
  let citiesDropdown = document.getElementById("cities");
  let filteredCities = [];

  searchBar.addEventListener("input", (event) => {
    let searchValue = event.target.value;

    if (searchValue.length > 2) {
      filteredCities = cities.filter((city) => {
        return city.city.includes(capitalize(searchValue));
      });

      citiesDropdown.innerHTML = "";

      // add results to the DOM as dropdown options
      filteredCities.forEach((city) => {
        let optionElement = document.createElement("option");
        optionElement.value = `${city.city}, ${city.admin_name}, ${city.country}`;

        citiesDropdown.appendChild(optionElement);
      });
    }
  });

  window.addEventListener("keypress", (event) => {
    if (event.key !== "Enter") return;

    let selectedCity = getSearchBarInput(cities, searchBar);

    fetchResults(selectedCity.lat, selectedCity.lng).then((results) => {
      displayResults(results);
    });

    searchBar.value = `${selectedCity.city}, ${selectedCity.admin_name}, ${selectedCity.country}`;
  });

  searchButton.addEventListener("click", () => {
    let selectedCity = getSearchBarInput(cities, searchBar);

    fetchResults(selectedCity.lat, selectedCity.lng).then((results) => {
      displayResults(results);
    });
  });
}
