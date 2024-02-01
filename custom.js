let city = document.querySelector(".city-temp p");
let searchInput= document.querySelector("#search-bar");
let searchButton = document.querySelector(".search-icon-div");
let temperature = document.querySelector(".city-temp h1");
let windSpeed = document.querySelector(".wind-speed p");
let humidity = document.querySelector(".humidity p");
let weather_icon = document.querySelector(".weather-icon img");
let selectCity = document.querySelector("#countries")
// import axios from "axios"
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
onsole.log(await getUser());

function func1() {
   return new Promise((resolve, reject) => {
     let myKey = "7c83c17d657d4e28e2200ead56ac93af";
     let cityName = searchInput.value;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&unit=metric`
     const data = fetch(`${apiUrl}`)
       .then(response => response.json())
       .then(data=>{setItems(data)
      ifState(data)
      })
       .catch(error=> console.log(`Error:${error}`))
    })
}

 
  



searchButton.addEventListener("click",(evt)=>{
  evt.preventDefault()
  if (searchInput.value!=="") {
func1()
    
  }else{
    alert("Type in a Country or any location");
  }
})

function setItems(data){
  temperature.innerText = `${Math.round(data.main.temp)/10|0 } °c`;
  windSpeed.innerText = `${data.wind.speed} km/h`;
  city.innerText = data.name;
  humidity.innerText = `${data.main.humidity} %`;

}
function ifState(data){
  if (data.weather[0].main === "Clear") {
    weather_icon.src = "./images/clear-clouds.png"
  } else if (data.weather[0].main === "Sunny") {
    weather_icon.src = "./images/sun.png"
  } else if (data.weather[0].main === "Rain") {
    weather_icon.src = "./images/rain-clouds.png"
  } else if (data.weather[0].main === "Snow") {
    weather_icon.src = "./images/snow-clouds.png"
  } else if (data.weather[0].main === "Drizzle") {
    weather_icon.src = "./images/partly-clouds.png"
  } else if (data.weather[0].main === "mist") {
    weather_icon.src = "./images/partly-clouds.png"
  } else if (data.weather[0].main === "Clouds") {
    weather_icon.src = "./images/rain-clouds.png"
  } else {
    console.log(data.weather[0].main);
  }
} 
async function getCities() {
  const cities = await fetch('http://restcountries.eu/rest/v2/all',{mode:'no-cors'});
  const data = await cities.json();
  // cityList(data);
  console.log(data);
}

selectCity.addEventListener("click",(evt)=> {
  evt.preventDefault();
  getCities();

})

function cityList(data) {
  data.forEach(city => {
    searchInput.innerHTML += `<option>${country.name}</option>`;
  });
}

async function func2() {
  let myKey = "7c83c17d657d4e28e2200ead56ac93af";
  let cityName = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&unit=metric`
         const weather = await fetch(apiUrl);
         const data =  await weather.json();
         setItems(data);
         ifState(data);

          
  console.log(data);

}
let result = func2;










