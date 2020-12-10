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
const tomorrowWeather = document.querySelector('.day1');
const day2Weather = document.querySelector('.day2')
const day3Weather = document.querySelector('.day3')
const day4Weather = document.querySelector('.day4')
const day5Weather = document.querySelector('.day5')






 async function weather() {
    let city, temperature, icon, humidity, windSpeed, temperature1, currentDate, day, month, year, tomorrow;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=austin&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            console.log(data)
        }) 

        currentDate =  new Date();
        day = currentDate.getDate();
        month = currentDate.getMonth() + 1;
        year = currentDate.getFullYear();
        tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}



async function weather2() {
    let city, temperature, icon, humidity, windSpeed, temperature1, currentDate, day, month, year, tomorrow;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast1(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            currentDate =  new Date();
            day = currentDate.getDate();
            month = currentDate.getMonth() + 1;
            year = currentDate.getFullYear();
            tomorrow = day + '/' + month + '/' + year;
        }) 

        
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather3() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=new york&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast2(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather4() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=orlando&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast3(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather5() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=san francisco&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast4(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather6() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=seattle&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast5(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather7() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast6(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather8() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q=atlanta&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            
            getForecast7(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
        weathercardDiv.innerHTML= "";
        weathercardDiv.insertAdjacentHTML('beforeend', note);
        
}

async function weather9() {
    let city, temperature, icon, humidity, windSpeed, temperature1;
       await fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=metric&appid=c03a533f4026f79204ba9b29b7374993')
       .then(response => response.json())
        .then(data => {
            getForecast8(data.coord.lat, data.coord.lon)
            city = data.name;
            temperature = data.main.temp;
            temperature1 = Math.floor(temperature)
            icon = data.weather[0].icon;
            humidity = data.main.humidity
            windSpeed = data.wind.speed
            
        }) 

        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + '/' + month + '/' + year;
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_city">${city} (${tomorrow}) </h3><p class="weather_date"></p><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p><p class="weather_windspeed">Windspeed: ${windSpeed}MPH</p></div>`
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













async function getForecast(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast1(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast2(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast3(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast4(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast5(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast6(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast7(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}

async function getForecast8(lat, lon) {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c03a533f4026f79204ba9b29b7374993`)
        .then(response => response.json())
        .then(data => {
        let currentDate =  new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let tomorrow = day + 1 + '/' + month + '/' + year;
        let temperature = data.daily[1].temp.day
        let temperature1 = Math.floor(temperature)
        let humidity = data.daily[1].humidity
        let icon = data.daily[1].weather[0].icon
        console.log(data);
        const note = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow}</h3><p class="weather_temperature">Temperature: ${temperature1}&deg;C</p><p class="weather_humidity">Humidity: ${humidity}%</p></div>`
        
    tomorrowWeather.innerHTML= "";
    tomorrowWeather.insertAdjacentHTML('beforeend', note);
      
       
        let day2 = currentDate.getDate();
        let month2 = currentDate.getMonth() + 1;
        let year2 = currentDate.getFullYear();
        let tomorrow2 = day + 2 + '/' + month + '/' + year;
        let temperature2 = data.daily[2].temp.day
        let temperature3 = Math.floor(temperature)
        let humidity2 = data.daily[2].humidity
        let icon2 = data.daily[2].weather[0].icon
        
        const note2 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon2}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow2}</h3><p class="weather_temperature">Temperature: ${temperature3}&deg;C</p><p class="weather_humidity">Humidity: ${humidity2}%</p></div>`
        
    day2Weather.innerHTML= "";
    day2Weather.insertAdjacentHTML('beforeend', note2); 

        let day3 = currentDate.getDate();
        let month3 = currentDate.getMonth() + 1;
        let year3 = currentDate.getFullYear();
        let tomorrow3 = day + 3 + '/' + month + '/' + year;
        let temperature4 = data.daily[3].temp.day
        let temperature5 = Math.floor(temperature4)
        let humidity3 = data.daily[3].humidity
        let icon3 = data.daily[3].weather[0].icon
        
        const note3 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon3}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow3}</h3><p class="weather_temperature">Temperature: ${temperature5}&deg;C</p><p class="weather_humidity">Humidity: ${humidity3}%</p></div>`
        
    day3Weather.innerHTML= "";
    day3Weather.insertAdjacentHTML('beforeend', note3); 

        let day4 = currentDate.getDate();
        let month4 = currentDate.getMonth() + 1;
        let year4 = currentDate.getFullYear();
        let tomorrow4 = day + 4 + '/' + month + '/' + year;
        let temperature6 = data.daily[4].temp.day
        let temperature7 = Math.floor(temperature6)
        let humidity4 = data.daily[4].humidity
        let icon4 = data.daily[4].weather[0].icon
        
        const note4 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon4}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow4}</h3><p class="weather_temperature">Temperature: ${temperature7}&deg;C</p><p class="weather_humidity">Humidity: ${humidity4}%</p></div>`
        
    day4Weather.innerHTML= "";
    day4Weather.insertAdjacentHTML('beforeend', note4); 

        let day5 = currentDate.getDate();
        let month5 = currentDate.getMonth() + 1;
        let year5 = currentDate.getFullYear();
        let tomorrow5 = day + 5 + '/' + month + '/' + year;
        let temperature8 = data.daily[5].temp.day
        let temperature9 = Math.floor(temperature8)
        let humidity5 = data.daily[5].humidity
        let icon5 = data.daily[5].weather[0].icon
        
        const note5 = `<div class="weather"> <img src="http://openweathermap.org/img/wn/${icon5}@2x.png" class="weather_icon"><h3 class="weather_date">${tomorrow5}</h3><p class="weather_temperature">Temperature: ${temperature9}&deg;C</p><p class="weather_humidity">Humidity: ${humidity5}%</p></div>`
        
    day5Weather.innerHTML= "";
    day5Weather.insertAdjacentHTML('beforeend', note5); 
})



}