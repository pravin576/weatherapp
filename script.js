const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        document.querySelector(".city").innerHTML = city;

        document.querySelector(".temp").innerHTML =
            data.current_condition[0].temp_C + "°C";

        document.querySelector(".humidity").innerHTML =
            data.current_condition[0].humidity + "%";

        document.querySelector(".wind").innerHTML =
            data.current_condition[0].windspeedKmph + " km/h";

    } catch (error) {

        alert("Weather data fetch failed!");
        console.log(error);

    }
}

searchBtn.addEventListener("click", () => {

    const city = searchBox.value.trim();

    if(city !== ""){
        checkWeather(city);
    }

});

searchBox.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        const city = searchBox.value.trim();

        if(city !== ""){
            checkWeather(city);
        }
    }

});