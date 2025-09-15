import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";
import Info from "./components/Info";
import "./styles/headerStyle.css";

function Header() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? "light" : "dark";
  const [showInfo, setShowInfo] = useState(false);

  const buttonClass = theme === "light" ? "darkButton" : "lightButton";

  const displayInfo = () => {
    return (
      <div>
        <Info />
      </div>
    );
  };

  return (
    <div className={`headerContainer ${themeClass}`}>
      <div className="headerDiv"></div>

      <div className="headerDiv title">Your weather today </div>

      <div className="headerDiv">
        <div className="infoDiv">
          <button
            className="infoButton"
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <i className={`fa-solid fa-question ${buttonClass}`}></i>
          </button>
          {showInfo ? displayInfo() : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
