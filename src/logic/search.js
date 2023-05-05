import cities from "../data/cities.json";
import capitalize from "../stingFunctions/capitalize";
import fetchResults from "../logic/fetchResults";

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

        optionElement.id = city.city;
        optionElement.value = `${city.city}, ${city.admin_name}, ${city.country}`;
        optionElement.dataset.lat = city.lat;
        optionElement.dataset.lng = city.lng;

        citiesDropdown.appendChild(optionElement);
      });
    }
  });

  searchButton.addEventListener("click", () => {
    let selectedCity = cities.filter((city) => {
      return city.city.includes(capitalize(searchBar.value.split(",")[0]));
    });

    console.log(fetchResults(selectedCity[0].lat, selectedCity[0].lng));
  });
}
