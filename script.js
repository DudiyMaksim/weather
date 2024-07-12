window.onload = function() {
    const url = "https://api.weatherapi.com/v1/current.json?key=457fe1390de343fa8af95631241107&q=Rivne&aqi=no"
    sendRequest(url);
};

function showWeather(weather) {
    const tempElement = document.getElementById("temp");
    const cityElement = document.getElementById("city");
    const countryElement = document.getElementById("country");
    const windElement = document.getElementById("wind");
    const windvElement = document.getElementById("windv");
    const cloudsElement = document.getElementById("clouds");
    tempElement.innerHTML = `Температура ${weather.current.temp_c}&degC`;clouds
    cityElement.innerText = `Місто ${weather.location.name}`;
    countryElement.innerText = `Країна ${weather.location.country}`
    windElement.innerText = `Швидкість вітру ${weather.current.wind_kph} км`
    windvElement.innerHTML = `Напрямок вітру ${weather.current.wind_degree}&deg`
    cloudsElement.innerHTML = `Хмарність ${weather.current.cloud} <img src="/icons8-облако-48.png" alt="">`
}

function sendRequest(url){
    const request = new XMLHttpRequest();
    
    function responseHandler() {
        const json = request.responseText;
        const weather = JSON.parse(json);
        console.log(weather);

        showWeather(weather);
    }

    request.onload = responseHandler;

    request.open("GET", url);
    request.send();
    
}

function changeCity() {
    const city = document.getElementById("cityField").value;

    const requestUrl = `http://api.weatherapi.com/v1/current.json?key=d4a52ccbf4504eb4916142034233110&q=${city}&lang=uk`;
    sendRequest(requestUrl);
}