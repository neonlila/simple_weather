async function getCurrentWeather() {
    // todays date
    const today = new Date();
    const formattedDate = today.getFullYear() + '-' + 
                          String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                          String(today.getDate()).padStart(2, '0');

    // change lat=xxx and lon=xx form your location. Go on google, search your location and copy the coordinats
    const apiUrl = `https://api.brightsky.dev/weather?lat=52.11829069911159&lon=8.677120452847769&date=${formattedDate}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.weather) {

            // use this, if you want to see the api response -> console.log(data.weather);
            
            // get current weather accordion to actual time
            const currentHour = String(today.getHours()).padStart(2, '0') + ":00:00"; // Format: HH:00:00
            const currentWeather = data.weather.find(entry => entry.timestamp.includes(currentHour));

            // get DOM elements for temp and date
            const temperatureElement = document.getElementById("weather__temp");
            const dateElement = document.getElementById("weather__date");
        

            if (temperatureElement) {
                let iconSrc = ""; // Variable to store the icon image path

                if (currentWeather.temperature <= 10) {
                    iconSrc = "assets/images/temp-1.png"; 
                } else if (currentWeather.temperature > 10 && currentWeather.temperature <= 20) {
                    iconSrc = "assets/images/temp-2.png"; 
                } else {
                    iconSrc = "assets/images/temp-3.png"; 
                }
                const tempIcon = document.createElement("img");
                tempIcon.src = iconSrc;

                temperatureElement.innerHTML = ""; 
                temperatureElement.appendChild(tempIcon);
                temperatureElement.appendChild(document.createTextNode(`${currentWeather.temperature}\u00B0C`));
            } else {
                console.error("Element #weather__temp not found!");
            }

            if (dateElement) {
              // get date and convert to day-month-year  
              const date = String(today.getDate()).padStart(2, '0') + '.' + 
              String(today.getMonth() + 1).padStart(2, '0') + '.' + today.getFullYear();
                
              dateElement.textContent = `${date}`;

            } else {
                console.error("Element #weather__speed not found!");
            }

            // check what icon is assign
            const icon = data.weather[1]?.icon || 'unknown';
            
            // get all icons
            const iconMap = {
                'clear-day': 'assets/images/clear-day.png',
                'clear-night': 'assets/images/clear-night.png',
                'cloudy': 'assets/images/cloudy.png',
                'fog': 'assets/images/fog.png',
                'partly-cloudy-day': 'assets/images/partly-cloudy-day.png',
                'partly-cloudy-night': 'assets/images/partly-cloudy-night.png',
                'rain': 'assets/images/rain.png',
                'snow': 'assets/images/snow.png',
                'thunderstorm': 'assets/images/thunderstorm.png',
            };

            // Update image source
            const weatherIconElement = document.getElementById("weather__icon");
            if (weatherIconElement) {
                weatherIconElement.src = iconMap[icon] || 'assets/images/clear-day.png';
            } else {
                console.error("weather__icon element not found!");
            }
            return currentWeather;
        } else {
            console.error("No weather data available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getCurrentWeather();

// get your time updated
function updateTime() {
    const today = new Date();
    const time = String(today.getHours()).padStart(2, '0') + ":" + 
    String(today.getMinutes()).padStart(2, '0') + ":" + 
    String(today.getSeconds()).padStart(2, '0');
    
    const timeElement = document.getElementById("weather__time");
    timeElement.textContent = `${time}`; 
    
}
setInterval(updateTime, 1000);
updateTime();