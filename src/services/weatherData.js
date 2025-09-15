export const fetchWeatherData = async (location) => {
  const { lat, lon } = location;
  const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,snowfall,cloud_cover,visibility,wind_speed_10m,is_day,wind_gusts_10m&wind_speed_unit=ms`;

  const response = await fetch(BASE_URL);

  if (!response.ok) {
    console.log("Couldn't fetch weather data");
    return;
  }

  if (!location) {
    console.log("COULD NOT GET CURRENT LOCATION");
    return { hourly: {}, hourly_units: {} };
  }

  const data = await response.json();

  console.log(data);
  return data;
};
