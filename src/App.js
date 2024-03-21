import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Heater from "./Components/Heater";

function App() {
  return (
    <div className="App">
      <Heater />
      <div className="box1">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
