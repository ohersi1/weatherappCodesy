const austinDiv = document.querySelector('.Austin');
const chicagoDiv = document.querySelector('.Chicago');
const newyorkDiv = document.querySelector('.New_York');
const orlandoDiv = document.querySelector('.Orlando');
const sanfranDiv = document.querySelector('.SanFran');
const seattleDiv = document.querySelector('.Seattle');
const denverDiv = document.querySelector('.Denver');
const atlantaDiv = document.querySelector('.Atlanta');
const weathercardDiv = document.querySelector('.weather_card');
const searchBox = document.querySelector('#search-box');
const submitButton = document.querySelector('#submit-button');



 async function weather() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=austin&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}



async function weather2() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather3() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=new york&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather4() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=orlando&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather5() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=san francisco&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather6() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=seattle&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather7() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather8() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=atlanta&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather9() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

       let date = new Date().toJSON().slice(0,10);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${date}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}




austinDiv.addEventListener('click', weather);
chicagoDiv.addEventListener('click', weather2);
newyorkDiv.addEventListener('click', weather3);
orlandoDiv.addEventListener('click', weather4);
sanfranDiv.addEventListener('click', weather5);
seattleDiv.addEventListener('click', weather6);
denverDiv.addEventListener('click', weather7);
atlantaDiv.addEventListener('click', weather8);
submitButton.addEventListener('click', weather9);













/*async function getForecast(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => console.log(data))
        
}*/