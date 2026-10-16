const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherResult = document.querySelector("#weatherResult");
searchBtn.addEventListener("click", function () {
   const city = cityInput.value.trim();

    console.log(city);
});