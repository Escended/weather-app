
// Fetch weather data
const getWeatherData = async (location) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8ec3526584e8eb7f00058f797b2a6eab`);

        if (response.status == 200) {
            const weatherData = await response.json();
            const dataObj = processData(weatherData);
            console.log(weatherData);
            console.log(dataObj);
            displayWeather(dataObj);
        } else {
            throw new HttpError('Broken');
        }
    } catch(err) {
        console.log(err);
    };
    
};

const processData = (data) => {
    const weather = {
        location: data.name,
        currentTemp: Math.round(data.main.temp),
        tempMin: Math.round(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
        forecast: data.weather[0].description,
    }  
    return weather;
};
const content = document.getElementById('content');
// Get city name from textbox
const formData = () => {
    const textBox = document.querySelector('input');
    let cityName = textBox.value;
    getWeatherData(cityName);
    textBox.value = null;
    
    const infoDisplay = document.querySelector('.weather-info');

    console.log(content.children)
    
    const city = document.querySelector('.city');
    if (infoDisplay.children) {
        infoDisplay.innerHTML = "";
    }
    if (document.querySelector('.city')) {
        content.removeChild(city);
    }
}



const displayWeather = (location="london") => {
    
    
    const container = document.querySelector('.weather-info');

    const city = document.createElement('div');
    city.textContent = location.location;
    city.classList.add('city', 'info')

    const currentTemp = document.createElement('div');
    currentTemp.textContent = `Current: ${location.currentTemp}\u00B0`;
    currentTemp.classList.add('info')

    const tempMin = document.createElement('div');
    tempMin.textContent = `Min: ${location.tempMin}\u00B0`; 
    tempMin.classList.add('info')

    const tempMax = document.createElement('div'); 
    tempMax.textContent = `Max: ${location.tempMax}\u00B0`; 
    tempMax.classList.add('info')


    const forecast = document.createElement('div'); 
    forecast.textContent = location.forecast
    forecast.classList.add('info');

    

    container.append(
                         
                        currentTemp, 
                        tempMin, 
                        tempMax,
                        forecast
                    );
    content.append(city, container);
}
