import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="weather__container">
        <section className="weather" id="weather">
          <div className="weather__info">75F</div>
          <img
            src="/images/day/sunny.svg"
            alt="weather-image"
            className="weather__image"
          />
        </section>
        <section id="card-section"></section>
      </main>
    </div>
  );
}

export default App;
