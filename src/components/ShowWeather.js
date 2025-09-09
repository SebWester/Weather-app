import { useState, useEffect, useContext } from "react";
import { fetchWeatherData } from "../services/weatherData";
import { LocationContext } from "../contexts/locationContext";
import WeatherCard from "./WeatherCard";
import "../styles/weatherStyle.css";

function ShowWeather() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [loading, setLoading] = useState(true);
  const { location } = useContext(LocationContext);

  // Fetch weather data
  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      const currentData = await fetchWeatherData(location);

      setData(currentData);
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
    } else {
      console.log("Couldn't set index");
    }
  }, [data]);

  console.log(data);

  const renderLoading = () => {
    return (
      <div>
        <h2>Loading weather...</h2>
      </div>
    );
  };

  const renderWeatherData = () => {
    return (
      <div className="weather-container">
        <WeatherCard data={data.hourly.time[currentIndex]} />
        <WeatherCard data={data.hourly.cloud_cover[currentIndex]} />
      </div>
    );
  };
  return (
    <div>
      <h3>Display weather here</h3>
      {loading ? renderLoading() : renderWeatherData()}
    </div>
  );
}

export default ShowWeather;
