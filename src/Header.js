import SearchLocation from "./components/SearchLocation";
import "./styles/headerStyle.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerDiv">{/* Left */}</div>

      <div className="headerDiv title">Weather App Test</div>

      <div className="headerDiv">
        <SearchLocation />
      </div>
    </div>
  );
}

export default Header;
