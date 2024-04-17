function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  function currentTemp(response) {
    let temperature = Math.round(response.data.temperature.current);
    let currentTemperature = document.querySelector("#temp-value");
    currentTemperature.innerHTML = temperature;
  }
  let city = searchInputElement.value;
  let key = "594t1344a33ebb79a8c028f85db36co0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
