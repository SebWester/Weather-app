import { useState, useEffect, useContext } from "react";
import { fetchWeatherData } from "../services/weatherData";
import { ThemeContext } from "../contexts/themeContext";
import { LocationContext } from "../contexts/locationContext";
import { RenderWeatherData } from "./renderWeatherData.js";
import "../styles/weatherStyle.css";

function ShowWeather() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { location, error } = useContext(LocationContext);
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!location) return;

    const getWeatherData = async () => {
      setLoading(true);
      const currentData = await fetchWeatherData(location);
      if (currentData) setData(currentData);
      setLoading(false);
    };

    getWeatherData();
  }, [location]);

  useEffect(() => {
    if (!data) return;

    const currentTime = new Date().toISOString().slice(0, 13) + ":00";
    const index = data.hourly.time.indexOf(currentTime);

    if (index !== -1) {
      setCurrentIndex(index + 2); // +2 due to GMT timezone
      const isDay = data.hourly.is_day[index] === 1 ? "light" : "dark";
      setTheme(isDay);
    }
  }, [data, setTheme]);

  const renderLoading = () => (
    <div>
      <h2>Loading weather...</h2>
    </div>
  );

  if (error) return <p>{error}</p>;
  if (!location) return <p>Waiting for location...</p>;
  if (loading) return renderLoading();
  if (!data) return <p>No data available.</p>;

  // Render weatherCard
  const showWeekly = () =>
    Array.from({ length: 12 }, (_, i) => (
      <RenderWeatherData key={i} currentIndex={currentIndex + i} data={data} />
    ));

  return <div>{showWeekly()}</div>;
}

export default ShowWeather;
