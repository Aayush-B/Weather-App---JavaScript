let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");

let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");

let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");


check.addEventListener("click", () => {

    let key = `152205ffda113a29847daf40a2fd7a0c`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
    })
    country.value = "";
    city.value = "";
})
