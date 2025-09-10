import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";
import SearchLocation from "./components/SearchLocation";
import "./styles/headerStyle.css";

function Header() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <div className={`headerContainer ${themeClass}`}>
      <div className="headerDiv">{/* Left */}</div>

      <div className="headerDiv title">Weather App </div>

      <div className="headerDiv">
        <SearchLocation />
      </div>
    </div>
  );
}

export default Header;
