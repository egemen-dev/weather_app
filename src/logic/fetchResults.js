import average from "../integerFunctions/average";

export default async function fetchResults(lat, lng) {
  try {
    let averageTemps = [];

    addLoadingAnimation();

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max&daily=temperature_2m_min&timezone=GMT&daily=weathercode`
    );

    const json = await response.json();

    json.daily.temperature_2m_max.forEach((maxTemp, index) => {
      let averageTemp = average(maxTemp, json.daily.temperature_2m_min[index]);
      averageTemps.push(averageTemp);
    });

    json.averageTemps = averageTemps;

    removeLoadingAnimation();
    return json;
  } catch (error) {
    console.log(error);
  }
}

let loadingAnimation = document.getElementById("loader");

function addLoadingAnimation() {
  loadingAnimation.classList.remove("hidden");
}

function removeLoadingAnimation() {
  loadingAnimation.classList.add("hidden");
}
