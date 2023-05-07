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
      <div class="flex justify-center text-white font-light text-xs lg:text-xl lg:font-medium col-span-2 items-center">${
        weatherResults.time[index]
      }</div>
      <div class="flex justify-center col-span-1 items-center">
        <i class="fa-solid fa-${
          weatherSymbols[weatherResults.weathercode[index]]
        } fa-xl" style="color: #ffffff"></i>
      </div>
      <div class="flex justify-center content-center text-white text-xs lg:text-xl col-span-3 items-center">
        <p class="text-center">${
          weatherDescriptions[weatherResults.weathercode[index]]
        }</p>
      </div>
      <div class="flex justify-center text-white text-xs lg:text-xl col-span-2 items-center">${temperature} °C</div>
    </div>`
    );
  });
}
