export const getLocation = (setLocation, setError) => {
  if (!navigator.geolocation) {
    setError("Geo location not supported in your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setError(null);
    },
    (err) => {
      setError(`Could not get location: ${err}`);
    }
  );
};
