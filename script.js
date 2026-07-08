const apiKey = "7e126449fc1bf869825f9da63fca4c12";
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getweather();
})

document.getElementById("inputbox").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        getweather();
    }
})

async function getweather() {
        let inputbox = document.getElementById("inputbox").value;

        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox}&appid=${apiKey}&units=metric`);
            let data = await response.json();
            console.log(data);
            document.getElementById("city").innerText = inputbox;
            let icon = data.weather[0].icon;
            document.getElementById("weather-icon").src =`https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById("temp").innerText = data.main.temp + "°C"; 
            document.getElementById("desc").innerText = data.weather[0].description;
            document.getElementById("inputbox").value = "";

        } catch (error) {
        alert("City not found");
        document.getElementById("city").innerText = "";
        document.getElementById("temp").innerText = "";
        document.getElementById("inputbox").value = "";
        }
}

    // Popluar cities
    let cities = ["London", "Paris", "New York", "Jeddah", "Medinah", "Mecca", "Karachi", "Islamabad", "Lahore", "Dubai", "Istanbul", "Berlin", "Sydney", "Chicago", "Delhi", "Mumbai", "Tokyo"];
    // let CityTemp = document.querySelectorAll(".city-temp");
    cities.forEach((city) => {
        console.log(city);
        popularCities(city);
        
    })

    async function popularCities(city) {
        let cityId = city.toLowerCase().replace(" ", "-");;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let data  = await response.json();
        console.log(data.main.temp);
        document.getElementById(cityId).innerText = data.main.temp + "°C";
    }
