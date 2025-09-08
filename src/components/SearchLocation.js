import { useState } from "react";

function SearchLocation() {
  const [city, setCity] = useState("");
  return (
    <input
      type="text"
      id="search"
      value={city}
      placeholder="Search..."
      onChange={(e) => setCity(e.target.value)}
    />
  );
}

export default SearchLocation;
