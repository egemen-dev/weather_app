import { weatherDescriptions } from "../data/weatherDescriptions.json";
import { weatherSymbols } from "../data/weatherSymbols.json";

export default function displayResults(results) {
  const weatherList = document.getElementById("weatherList");

  weatherList.innerHTML = "";

  results.averageTemps.forEach((temperature, index) => {
    let weatherResults = results.daily;
    weatherList.insertAdjacentHTML(
      "beforeend",
      `<div class="grid grid-cols-8 flex justify-around">
      <div class="flex justify-center text-white text-xs lg:text-lg col-span-2">${
        weatherResults.time[index]
      }</div>
      <div class="flex justify-center col-span-1">
        <i class="fa-solid fa-${
          weatherSymbols[weatherResults.weathercode[index]]
        } fa-2xl" style="color: #ffffff"></i>
      </div>
      <div class="flex justify-center text-white text-xs lg:text-lg col-span-4">
        <p>${weatherDescriptions[weatherResults.weathercode[index]]}</p>
      </div>
      <div class="flex justify-center text-white text-xs lg:text-lg col-span-1">${temperature} °C</div>
    </div>`
    );
  });
}
