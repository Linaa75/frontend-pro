const keyAPI = "ca8b9cd9e68e7bdc90549a4a76a219a6";
const select = document.getElementById('city-select');
const selectedCityElement = document.getElementById('selected-city');

select.addEventListener('change', function () {
    const city = select.options[select.selectedIndex].text;
    selectedCityElement.textContent = `Selected City: ${city}`;

    getCoordinates(city);
});

document.getElementById('refresh-btn').addEventListener('click', function () {
    const selectedCity = select.options[select.selectedIndex].value;
    if (!selectedCity) {
        alert("Please, choose your city!");
        return;
    }
    const city = select.options[select.selectedIndex].text;
    getCoordinates(city);
});

function getCoordinates(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            if (data && data.coord) {
                const { lat, lon, name } = data.coord;
                getWeather(lat, lon, name);
            } else {
                console.log("City not found");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyAPI}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            return response.json();
        })
        .then(data => {
            if (data.main && data.weather) {
                updateWeather(data);
            } else {
                console.log("No current weather data available");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function updateWeather(data) {
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const clouds = document.getElementById('clouds');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');

    temperature.textContent = `${data.main.temp} °C`;
    description.textContent = data.weather[0].description;
    clouds.textContent = data.clouds.all;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure;
}