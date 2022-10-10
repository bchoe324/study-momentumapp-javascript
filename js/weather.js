const API_key = config.API_Key;

const IDtoIcon = {
  "01d": ["fa-solid", "fa-sun"],
  "01n": ["fa-solid", "fa-moon"],
  "02d": ["fa-solid", "fa-cloud-sun"],
  "02n": ["fa-solid", "fa-cloud-moon"],
  "03d": ["fa-solid", "fa-cloud"],
  "03n": ["fa-solid", "fa-cloud"],
  "04d": ["fa-solid", "fa-cloud"],
  "04n": ["fa-solid", "fa-cloud"],
  "09d": ["fa-solid", "fa-cloud-showers-heavy"],
  "09n": ["fa-solid", "fa-cloud-showers-heavy"],
  "10d": ["fa-solid", "fa-cloud-sun-rain"],
  "10n": ["fa-solid", "fa-cloud-moon-rain"],
  "11d": ["fa-solid", "fa-cloud-bolt"],
  "11n": ["fa-solid", "fa-cloud-bolt"],
  "13d": ["fa-regular", "fa-snowflake"],
  "13n": ["fa-regular", "fa-snowflake"],
  "50d": ["fa-solid", "fa-cloud-fog"],
  "50n": ["fa-solid", "fa-cloud-fog"],
};

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather .icon");
      const weather = document.querySelector("#weather .weather");
      const city = document.querySelector("#weather .city");
      const iconID = data.weather[0].icon;
      const i = document.createElement("i");
      i.classList.add(...IDtoIcon[iconID]);
      icon.appendChild(i);

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
