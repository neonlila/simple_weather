🌤️ Weather Widget

A sleek, real-time weather widget for OBS using HTML, CSS, and JavaScript. It shows the current temperature, weather condition icon, time, and date using data from the Bright Sky Weather API.
Perfect for stream overlays with built-in green screen support!

📦 Features

- ✅ Live temperature display with dynamic icons
- ✅ Real-time weather condition icon (sunny, rain, etc.)
- ✅ Always up-to-date time & date
- ✅ Green background for chroma key (can be customized)
- ✅ Easy integration in OBS


🚀 Usage
1. Clone the Repository

git clone https://github.com/your-username/weather-widget.git

2. Set Your Location Open weather_api.js and update the lat and lon values with your coordinates:
const apiUrl = `https://api.brightsky.dev/weather?lat=YOUR_LAT&lon=YOUR_LON&date=${formattedDate}`;

3. Open OBS

    1. Go to Sources → Click + → Choose Browser.
    2. Set a name like Weather Widget, then click OK.
    3. In the URL field, paste the local file path to index.html, e.g.: file:///C:/Users/YourName/Downloads/weather-widget/index.html
    4. Set the width to 950 and height to 364 (or adjust based on your layout).
    5. Enable "Refresh browser when scene becomes active".
    6. Click OK.

4. (Optional) Chroma Key for Transparency
    1. Right-click the Browser Source → Filters.
    2. Add a Chroma Key filter.
    3. Set Key Color Type to Green (default).
    4. Tweak Similarity, Smoothness, and Key Color Spill Reduction to clean up the background.


📁 Folder Structure

weather-widget/
├── assets/
│   └── images/        # Weather icons, background, clock/calendar icons
├── weather.css        # Widget styles
├── weather_api.js     # API logic and DOM manipulation
└── index.html         # Widget markup

🎨 Customization
- Green Screen: Remove or change background: var(--green-screen); in weather.css to match your design.
- Fonts: Uses Teko from Google Fonts.
- Icons: Located in assets/images/. Replace or expand as needed.

🔧 Requirements
- Internet connection (to fetch weather data)
- A modern browser (Chrome, Firefox, Edge, etc.)

🧠 Notes
- The widget fetches data for the current day and updates the time every second.
- Temperature display changes dynamically based on thresholds (≤10°C, 11–20°C, >20°C).

🔗 API Info
This widget uses the Bright Sky API, which provides free weather data for Germany and surrounding areas. Make sure the API supports your location or swap to another provider if needed.

📄 License
- MIT License — feel free to use and modify!