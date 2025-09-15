import { useState } from "react";
import WeatherCard from "./WeatherCard";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import "../styles/cardStyle.css";

export const RenderWeatherData = ({ currentIndex, data }) => {
  // FIX className depending on theme
  // console.log("DATA:", data);
  const time = currentIndex % 24;
  let month = new Date().getMonth() + 1;
  let day = new Date().getUTCDate();
  if (currentIndex > 24) {
    day = day + 1;
  }

  const { theme } = useContext(ThemeContext);
  const [displayCard, setDisplayCard] = useState(true);
  const cardClass = displayCard ? "showCard" : "hideCard";
  const showTime = displayCard ? "showTime" : "hideTime";
  const faIconColor = theme === "light" ? "darkIcon" : "lightIcon";
  const eyecon = displayCard ? (
    <i className={`fa-solid fa-eye ${faIconColor}`}></i>
  ) : (
    <i className={`fa-solid fa-eye-slash ${faIconColor}`}></i>
  );

  const toggleShowCard = () => {
    setDisplayCard((prev) => !prev);
  };

  return (
    <div className={`weather-container ${cardClass}`}>
      <div style={{ alignSelf: "center" }}>
        <div className={showTime}>
          <h2>{time.toString().padStart(2, "0")}:00</h2>

          <h2>
            {month}/{day}
          </h2>
        </div>

        <button className="toggleButton" onClick={toggleShowCard}>
          {eyecon}
        </button>
      </div>

      {displayCard && (
        <>
          {/* Temperature */}
          <WeatherCard
            title="Temperature"
            icon={<i className="fa-solid fa-temperature-low"></i>}
            data={data.hourly.temperature_2m[currentIndex]}
            unit={data.hourly_units.temperature_2m}
          />
          {/* Cloud coverage */}
          <WeatherCard
            title="Cloud coverage"
            icon={<i className="fa-solid fa-cloud"></i>}
            data={data.hourly.cloud_cover[currentIndex]}
            unit={data.hourly_units.cloud_cover}
          />
          {/* Rain */}
          <WeatherCard
            title="Rain"
            icon={<i className="fa-solid fa-cloud-rain"></i>}
            data={data.hourly.rain[currentIndex]}
            unit={data.hourly_units.rain}
          />
          {/* Snow */}
          <WeatherCard
            title="Snow"
            icon={<i className="fa-solid fa-snowflake"></i>}
            data={data.hourly.snowfall[currentIndex]}
            unit={data.hourly_units.snowfall}
          />
          {/* Wind speed */}
          <WeatherCard
            title="Wind speed"
            icon={<i className="fa-solid fa-wind"></i>}
            data={
              data.hourly.wind_speed_10m[currentIndex] +
              ` (${data.hourly.wind_gusts_10m[currentIndex]}) `
            }
            unit={data.hourly_units.wind_speed_10m}
          />
          {/* Wind gusts */}
          {/* <WeatherCard
            title="Wind gusts"
            data={data.hourly.wind_gusts_10m[currentIndex] + `(helo)`}
            unit={data.hourly_units.wind_gusts_10m}
          /> */}
        </>
      )}
    </div>
  );
};
