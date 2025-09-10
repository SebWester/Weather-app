import { useState } from "react";
import "../styles/SearchLocationStyle.css";

// Fix: EVERYTHING!

function SearchLocation() {
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const searchResults = showResults ? "showResults" : "hideResults";

  const handleSearch = async (e) => {
    if (city.trim() !== "") {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${city}&countrycodes=se&format=json`
      );

      const data = await response.json();

      console.log(data);

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        setCoords({ lat, lon, display_name });
        setShowResults(true);
      } else {
        setCoords(null);
        setShowResults(false);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        value={city}
        placeholder="Search..."
        onChange={(e) => {
          setCity(e.target.value);
          if (e.target.value.trim() === "") {
            setShowResults(false);
            setCoords(null);
          }
        }}
        onKeyDown={handleSearch}
      />

      {/* <div className={searchResults}>Show results here</div> */}
      {showResults && coords && (
        <div className="showResults">
          <h3>{coords.display_name}</h3>
        </div>
      )}
    </div>
  );
}

export default SearchLocation;
