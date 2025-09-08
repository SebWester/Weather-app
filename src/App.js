import { LocationProvider } from "./contexts/locationContext";
import Header from "./Header";
import Main from "./Main";
import DisplayLocation from "./components/Location";
import "./App.css";

function App() {
  return (
    <LocationProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </LocationProvider>
  );
}

export default App;
