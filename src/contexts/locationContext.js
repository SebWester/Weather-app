import { createContext, useEffect, useState } from "react";
import { getLocation } from "../utils/findLocation";

export const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation(setLocation, setError);
  }, []);

  return (
    <LocationContext.Provider value={{ location, error }}>
      {children}
    </LocationContext.Provider>
  );
}
