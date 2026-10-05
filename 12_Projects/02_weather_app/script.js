function getWeather() {

    let city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    // city coordinates
    fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    )
        .then(response => response.json())
        .then(data => {
            if (!data.results) {
                alert("City not found");
                return;
            }
            let location = data.results[0];
            let latitude = location.latitude;
            let longitude = location.longitude;

            // Now get weather
            return fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
            );
        })

        .then(response => response.json())
        .then(data => {
            let weather = data.current;
            // result output/display
            document.getElementById("weatherResult").innerHTML = `<div class="card shadow mx-auto" style="max-width: 500px;">
                    <div class="card-body text-center">
                        <h2 class="card-title">
                            Weather Information
                        </h2>
                        <hr>
                        <h4>
                             Temperature
                        </h4>
                        <p class="fs-4">
                            ${weather.temperature_2m} °C
                        </p>
                        <h4>
                             Humidity
                        </h4>
                        <p class="fs-4">
                            ${weather.relative_humidity_2m} %
                        </p>
                        <h4>
                             Wind Speed
                        </h4>
                        <p class="fs-4">
                            ${weather.wind_speed_10m} km/h
                        </p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.log(error);
            document.getElementById("weatherResult").innerHTML = `
                <div class="alert alert-danger text-center">
                    Something went wrong. Please try again.
                </div>
            `;
        });
}