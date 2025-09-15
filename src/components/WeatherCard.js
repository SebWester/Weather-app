import "../styles/cardStyle.css";

function WeatherCard({ title, icon, data, unit }) {
  // Add background
  return (
    <div className={`card-container`}>
      <div style={{ textAlign: "center" }}>
        {/* <h2>{title}</h2> */}
        {icon}
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
