import { ThemeProvider } from "./contexts/themeContext";
import { LocationProvider } from "./contexts/locationContext";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LocationProvider>
        <div className="container">
          <Header />
          <Main />
        </div>
      </LocationProvider>
    </ThemeProvider>
  );
}

export default App;
