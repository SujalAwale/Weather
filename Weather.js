const apikey = "1536428e316c5b837100e2d1c1be7347";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

   
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
    
        }else{

        const data = await response.json();    


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "Image/cloud.png";
    }
     else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "Image/clear.png";
    }
     else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Image/rain.png";
    }
     else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Image/drizzle.png";
    }
     else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Image/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

}


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

