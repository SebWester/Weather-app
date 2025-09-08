export const fetchWeatherData = async (location) => {
  if (!location) {
    console.log("COULD NOT GET CURRENT LOCATION");
  }

  const { lat, lon } = location;
  const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,snowfall,cloud_cover,visibility,wind_speed_10m,is_day`;

  const response = await fetch(BASE_URL);

  if (!response.ok) {
    console.log("Couldn't fetch weather data");
    return;
  }

  const data = await response.json();

  console.log(data);
  return data;
};
