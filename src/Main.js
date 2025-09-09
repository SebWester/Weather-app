import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext.js";
import Location from "./components/Location.js";
import ShowWeather from "./components/ShowWeather.js";
import "./styles/mainStyle.css";

function Main() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? "container-day" : "container-night";
  return (
    <div className={themeClass}>
      <Location />
      <ShowWeather />
    </div>
  );
}

export default Main;
