document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '33491c088465bf8304dfdeba00516814'; // Replace with your OpenWeatherMap API key
    const weatherDiv = document.getElementById('weather');
    const cityElement = document.getElementById('city');
    const iconElement = document.getElementById('icon');
    const descriptionElement = document.getElementById('description');
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    const searchButton = document.getElementById('searchButton');
    const locationInput = document.getElementById('locationInput');

    searchButton.addEventListener('click', function() {
        const location = locationInput.value;
        if (location) {
            fetchWeather(location);
        }
    });

    function fetchWeather(location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function displayWeather(data) {
        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        weatherDiv.style.display = 'block';
        cityElement.textContent = data.name;
        descriptionElement.textContent = data.weather[0].description;
        tempElement.textContent = `Temperature: ${data.main.temp}°C`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        const iconCode = data.weather[0].icon;
        iconElement.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconCode}@2x.png)`;
    }
});
