export default async function fetchResults(lat, lng) {
  try {
    addLoadingAnimation();

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max&daily=temperature_2m_min&timezone=GMT&daily=weathercode`
    );

    removeLoadingAnimation();
    return await response.json();
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
