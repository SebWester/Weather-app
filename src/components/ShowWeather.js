import { useState, useEffect, useContext } from "react";
import { fetchWeatherData } from "../services/weatherData";
import { ThemeContext } from "../contexts/themeContext";
import { LocationContext } from "../contexts/locationContext";
import WeatherCard from "./WeatherCard";
import "../styles/weatherStyle.css";

function ShowWeather() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [loading, setLoading] = useState(true);
  const { location } = useContext(LocationContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // Fetch weather data
  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      const currentData = await fetchWeatherData(location);

      setData(currentData);
      // Set theme
      setLoading(false);
    };

    getWeatherData();
  }, [location]);

  // Get current index for weather data
  useEffect(() => {
    if (!data) {
      console.log("No data available.");
      return;
    }
    const currentTime = new Date().toISOString().slice(0, 13) + ":00";
    const index = data.hourly.time.indexOf(currentTime);

    if (index !== -1) {
      setCurrentIndex(index + 2); // +2 due to GMT timezone
      const isDay = data.hourly.is_day[currentIndex] === 1 ? "light" : "dark";
      setTheme(isDay);
    } else {
      console.log("Couldn't set index");
    }
  }, [data, setTheme, currentIndex]);

  console.log(data);

  const renderLoading = () => {
    return (
      <div>
        <h2>Loading weather...</h2>
      </div>
    );
  };

  const renderWeatherData = () => {
    // FIX className depending on theme
    return (
      <div className="weather-container">
        {/* Temperature */}
        <WeatherCard
          title="Temperature"
          data={data.hourly.temperature_2m[currentIndex]}
          unit={data.hourly_units.temperature_2m}
        />
        {/* Cloud coverage */}
        <WeatherCard
          title="Cloud coverage"
          data={data.hourly.cloud_cover[currentIndex]}
          unit={data.hourly_units.cloud_cover}
        />
        {/* Rain */}
        <WeatherCard
          title="Rain"
          data={data.hourly.rain[currentIndex]}
          unit={data.hourly_units.rain}
        />
        {/* Snow */}
        <WeatherCard
          title="Snow"
          data={data.hourly.snowfall[currentIndex]}
          unit={data.hourly_units.snowfall}
        />
        {/* Wind speed */}
        <WeatherCard
          title="Wind speed"
          data={data.hourly.wind_speed_10m[currentIndex]}
          unit={data.hourly_units.wind_speed_10m}
        />
        {/* Wind gusts */}
        <WeatherCard
          title="Wind gusts"
          data={data.hourly.wind_gusts_10m[currentIndex]}
          unit={data.hourly_units.wind_gusts_10m}
        />
      </div>
    );
  };
  return <div>{loading ? renderLoading() : renderWeatherData()}</div>;
}

export default ShowWeather;
