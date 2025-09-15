function Info() {
  return (
    <div className="infoContainer">
      <p>
        This application is built with React and leverages the browser’s
        geolocation API to detect the user’s current location.
      </p>
      <br />
      <p>
        It retrieves real-time weather data from the Open-Meteo API, displaying
        forecasts for the next 12 hours.
      </p>
      <br />
      <p>
        The app features a user-friendly interface, demonstrating practical
        implementation of React components, state management, and API
        integration.
      </p>
      <br />
      <span>
        <span>Github:</span>{" "}
        <a
          href="https://github.com/SebWester/Weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weather App
        </a>
      </span>
    </div>
  );
}

export default Info;
