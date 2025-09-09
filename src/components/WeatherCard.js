import "../styles/cardStyle.css";

function WeatherCard({ data }) {
  return (
    <div className="card-container">
      <h2>{data}</h2>
    </div>
  );
}

export default WeatherCard;
