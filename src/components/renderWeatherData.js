import WeatherCard from "./WeatherCard";

export const renderWeatherData = (currentIndex, data) => {
  // FIX className depending on theme
  console.log("DATA:", data);
  const time = currentIndex % 24;
  let month = new Date().getMonth() + 1;
  let day = new Date().getUTCDate();
  if (currentIndex > 24) {
    day = day + 1;
  }

  return (
    <div className="weather-container">
      <div style={{ alignSelf: "center" }}>
        <h2>{time.toString().padStart(2, "0")}:00</h2>

        <h2>
          {month}/{day}
        </h2>
      </div>

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
