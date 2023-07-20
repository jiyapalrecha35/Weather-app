const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c32a951da4msh50e74dde4c960b5p148019jsnf2ef16c24c0d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather= (city)=>{
    cityname.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp1.innerHTML=response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        humidity1.innerHTML=response.humidity
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        console.log(response)
    })

    .catch(err => console.error(err));
}
Submit.addEventListener("click",(e)=>{
getWeather(city.value)
e.preventDefault();
});

getWeather('Hubli')

