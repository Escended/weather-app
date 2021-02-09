
// Fetch weather data
const getWeatherData = async () => {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=8ec3526584e8eb7f00058f797b2a6eab');
        if (response.status == 200) {
            const weatherData = await response.json();
            console.log(weatherData);
        } else {
            throw new HttpError('Broken');
        }
    } 
    catch(err) {
        console.log('Error fetching data');
    };
    
}

getWeatherData();
