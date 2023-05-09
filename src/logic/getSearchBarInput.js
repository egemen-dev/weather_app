import capitalize from "../stingFunctions/capitalize";

export default function getSearchBarInput(cities, searchBar) {
  let input = searchBar.value.split(",")[0];
  input = input.replaceAll(" ", "");

  if (input.length < 3) return;

  let result = cities.find((city) => {
    let cityToSearch = capitalize(input);

    return city.city.includes(cityToSearch);
  });

  return result;
}
