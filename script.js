const apiKey = "7e126449fc1bf869825f9da63fca4c12";
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getweather();
})

async function getweather() {
        let inputbox = document.getElementById("inputbox").value;

        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox}&appid=${apiKey}&units=metric`);
            let data = await response.json();
            console.log(data);
            document.getElementById("city").innerText = inputbox;
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


