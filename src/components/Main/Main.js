import { defaultClothingItems } from "../../utils/const";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weather = weatherTemp + "°" + currentTemperatureUnit;
  console.log(weather);
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F" && weatherTemp >= 86) {
      return "hot";
    } else if (
      currentTemperatureUnit === "F" &&
      weatherTemp >= 66 &&
      weatherTemp <= 85
    ) {
      return "warm";
    } else if (currentTemperatureUnit === "F" && weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <div className="main__title">
        Today is {weather} / You may want to wear:
      </div>
      <section className="main__card-section" id="card-section">
        <div className="main__card-items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
