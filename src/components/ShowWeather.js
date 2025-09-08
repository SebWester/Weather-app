import { useState, useEffect, useContext } from "react";
import { fetchWeatherData } from "../services/weatherData";
import { LocationContext } from "../contexts/locationContext";

function ShowWeather() {
  const [data, setData] = useState(null);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    const getWeatherData = async () => {
      const currentData = await fetchWeatherData(location);

      setData(currentData);
    };

    getWeatherData();
  }, [location]);

  console.log(data);

  return (
    <div>
      <h3>Display weather here</h3>
    </div>
  );
}

export default ShowWeather;
