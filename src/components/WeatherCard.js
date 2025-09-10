import { useState } from "react";
import "../styles/cardStyle.css";

function WeatherCard({ title, data, unit }) {
  const [showCard, setShowCard] = useState(true);

  // Toggle display/hide weather card
  const toggleDisplay = () => {
    setShowCard((prev) => !prev);
  };

  const cardClass = showCard ? "showCard" : "hideCard";
  const showText = showCard ? "showText" : "hideText";
  const eyecon = showCard ? (
    <i className="fa-solid fa-eye"></i>
  ) : (
    <i className="fa-solid fa-eye-slash"></i>
  );

  // Add background
  return (
    <div className={`card-container ${cardClass}`}>
      <button className="toggleButton" onClick={toggleDisplay}>
        {eyecon}
      </button>
      <div className={showText}>
        <h2>{title}</h2>
        <div className="weather-info">
          <h3>
            {data} {unit}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
