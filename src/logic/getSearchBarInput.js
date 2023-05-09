import capitalize from "../stingFunctions/capitalize";

export default function getSearchBarInput(cities, searchBar) {
  let result = cities.find((city) => {
    let input = searchBar.value.split(",")[0];
    let cityToSearch = capitalize(input.replaceAll(" ", ""));

    return city.city.includes(cityToSearch);
  });

  return result;
}
