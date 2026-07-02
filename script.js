const apiKey = "7e126449fc1bf869825f9da63fca4c12";

async function getweather() {
        let inputbox = document.getElementById("inputbox").value;

        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox}&appid=${apiKey}&units=metric`);
            

        } catch (error) {
        alert("City not found");
        document.getElementById("city").innerText = "";
        document.getElementById("temp").innerText = "";
        document.getElementById("inputbox").value = "";
        }
}