import { defaultClothingItems } from "../../utils/const";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, React, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const weatherType = useMemo(() => {
    if (
      (currentTemperatureUnit === "F" && temp >= 86) ||
      (currentTemperatureUnit === "C" && temp >= 30)
    ) {
      return "hot";
    } else if (
      (currentTemperatureUnit === "F" && temp >= 65 && temp <= 85) ||
      (currentTemperatureUnit === "C" && temp >= 18 && temp <= 29)
    ) {
      return "warm";
    } else if (
      (currentTemperatureUnit === "F" && temp <= 64) ||
      (currentTemperatureUnit === "C" && temp <= 17)
    ) {
      return "cold";
    }
  }, [temp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  const weatherUnit = `°${currentTemperatureUnit}`;

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="sunny"
        weatherTemp={temp}
        weatherUnit={weatherUnit}
      />
      <div className="main__title">
        Today is {temp}
        {weatherUnit} / You may want to wear:
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
