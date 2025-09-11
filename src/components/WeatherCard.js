import "../styles/cardStyle.css";

function WeatherCard({ title, data, unit, toggleClass }) {
  // Add background
  return (
    <div className={`card-container`}>
      <div>
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
