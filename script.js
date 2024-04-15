const  apiKey= `7c109d3881c322dc9323d583ab31ec42`;
// const   city="Rajkot";

async function fetchWeatherData(city){
    try{
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    if(!response.ok){
        throw new Error("Unable to fetch weather data");
    }
    const data=await response.json();
    console.log(data);
    console.log(data.main.temp);
    updateWeatherUpi(data);
}catch(error){
    console.log(error);
}
}
const cityElement=document.querySelector(".city");
const temprature=document.querySelector(".temp");
const windspeed=document.querySelector(".wind-speed");
const humidity=document.querySelector(".humidity");
const visibility=document.querySelector(".visibility-distance");

const description=document.querySelector(".description-text");
const date=document.querySelector(".date");

// fetchWeatherData();

function updateWeatherUpi(data) {
    cityElement.textContent=data.name;
    temprature.textContent=`${Math.round(data.main.temp)}`;
    windspeed.textContent=`${data.wind.speed} km/h`;
    humidity.textContent=`${data.main.humidity}%`;
    visibility.textContent=`${data.visibility/1000}km`;
    description.textContent=data.weather[0].description;

    const currentDate=new Date();
    date.textContent=currentDate.toDateString();

}

const formElement=document.querySelector(".search-form");
const inputElement=document.querySelector(".city-input");
 formElement.addEventListener("submit", function (e){
     e.preventDefault();

    const city=inputElement.value;
    console.log(city);
     if(city !== ""){
        fetchWeatherData(city);
        inputElement.value='';
    }

 });