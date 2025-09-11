import { useState } from "react";
import WeatherCard from "./WeatherCard";
import "../styles/cardStyle.css";

export const RenderWeatherData = ({ currentIndex, data }) => {
  // FIX className depending on theme
  console.log("DATA:", data);
  const time = currentIndex % 24;
  let month = new Date().getMonth() + 1;
  let day = new Date().getUTCDate();
  if (currentIndex > 24) {
    day = day + 1;
  }

  const [displayCard, setDisplayCard] = useState(true);
  const cardClass = displayCard ? "showCard" : "hideCard";
  const eyecon = displayCard ? (
    <i className="fa-solid fa-eye"></i>
  ) : (
    <i className="fa-solid fa-eye-slash"></i>
  );

  const toggleShowCard = () => {
    setDisplayCard((prev) => !prev);
  };

  return (
    <div className={`weather-container ${cardClass}`}>
      <div style={{ alignSelf: "center" }}>
        <h2>{time.toString().padStart(2, "0")}:00</h2>

        <h2>
          {month}/{day}
        </h2>

        <button onClick={toggleShowCard}>{eyecon}</button>
      </div>

      {displayCard && (
        <>
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
        </>
      )}
    </div>
  );
};
