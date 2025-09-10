import { useState, useEffect, useContext } from "react";
import { fetchWeatherData } from "../services/weatherData";
import { ThemeContext } from "../contexts/themeContext";
import { LocationContext } from "../contexts/locationContext";
import { renderWeatherData } from "./renderWeatherData.js";
import "../styles/weatherStyle.css";

function ShowWeather() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [loading, setLoading] = useState(true);
  const { location } = useContext(LocationContext);
  const { setTheme } = useContext(ThemeContext);

  const showWeekly = (index, data) => {
    return Array.from({ length: 12 }, (_, i) =>
      renderWeatherData(index + i, data)
    );
  };

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

  const renderLoading = () => {
    return (
      <div>
        <h2>Loading weather...</h2>
      </div>
    );
  };

  return (
    <div>
      {/* {loading ? renderLoading() : renderWeatherData(currentIndex, data)} */}
      {loading ? renderLoading() : showWeekly(currentIndex, data)}
    </div>
  );
}

export default ShowWeather;
