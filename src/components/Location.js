import { useContext } from "react";
import { LocationContext } from "../contexts/locationContext";
import "../styles/locationStyles.css";

// Translate lat and lon to a "real place"

const renderLocation = (loc) => {
  return (
    <div className="locationContainer">
      <h2>Latitude: {loc.lat}</h2>
      <h2>Longitude: {loc.lon}</h2>
    </div>
  );
};

const renderError = (err) => {
  return <h2 className="errorContainer">{err}</h2>;
};

function DisplayLocation() {
  const { location, error } = useContext(LocationContext);

  return <div>{location ? renderLocation(location) : renderError(error)}</div>;
}

export default DisplayLocation;
