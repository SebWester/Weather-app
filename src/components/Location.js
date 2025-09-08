import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../contexts/locationContext";
import "../styles/locationStyles.css";

// Translate lat and lon to a "real place"
const renderLocation = (loc, city) => {
  return (
    <div className="locationContainer">
      <h3>Latitude: {loc.lat}</h3> {/* REMOVE */}
      <h3>Longitude: {loc.lon}</h3> {/* REMOVE */}
      <h2 className="city-text">{city.address.suburb}</h2>
    </div>
  );
};

const renderError = (err) => {
  return <h2 className="errorContainer">{err}</h2>;
};

function DisplayLocation() {
  const { location, error } = useContext(LocationContext);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (!location) return;
    const { lat, lon } = location;

    const getCity = async (lat, lon) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      const data = await response.json();
      setCity(data);
      console.log(data);
    };

    if (location) {
      getCity(lat, lon);
    }
  }, [location]);

  return (
    <div>{location ? renderLocation(location, city) : renderError(error)}</div>
  );
}

export default DisplayLocation;
