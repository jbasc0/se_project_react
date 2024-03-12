import { defaultClothingItems } from "../../utils/const";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, React } from "react";
import "./Main.css";

function Main({ context, weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (context === "F" && weatherTemp.temperature.F >= 86) {
      return "hot";
    } else if (
      context === "F" &&
      weatherTemp.temperature.F >= 66 &&
      weatherTemp.temperature.F <= 85
    ) {
      return "warm";
    } else if (context === "F" && weatherTemp.temperature.F <= 65) {
      return "cold";
    } else if (context === "C" && weatherTemp.temperature.C >= 30) {
      return "hot";
    } else if (
      context === "C" &&
      weatherTemp.temperature.C >= 18 &&
      weatherTemp.temperature.C <= 29
    ) {
      return "warm";
    } else if (context === "C" && weatherTemp.temperature.C <= 17) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  if (context === "F")
    return (
      <main className="main">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <div className="main__title">
          Today is {weatherTemp.temperature.F}°F. You may want to wear:
        </div>
        <section className="main__card-section" id="card-section">
          <div className="main__card-items">
            {filteredCards.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </div>
        </section>
      </main>
    );
  if (context === "C")
    return (
      <main className="main">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <div className="main__title">
          Today is {weatherTemp.temperature.C}°C. You may want to wear:
        </div>
        <section className="main__card-section" id="card-section">
          <div className="main__card-items">
            {filteredCards.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </div>
        </section>
      </main>
    );
}

export default Main;
