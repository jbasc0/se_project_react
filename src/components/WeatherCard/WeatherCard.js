import "./WeatherCard.css";
import { weatherOptions } from "../../utils/const";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import React from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  const tempContext = React.useContext(CurrentTemperatureUnitContext);
  if (tempContext.currentTemperatureUnit === "F")
    return (
      <section className="weather" id="weather">
        <div className="weather__info">{weatherTemp.temperature.F}°F</div>
        <img src={imageSrcUrl} alt="weather-image" className="weather__image" />
      </section>
    );
  if (tempContext.currentTemperatureUnit === "C")
    return (
      <section className="weather" id="weather">
        <div className="weather__info">{weatherTemp.temperature.C}°C</div>
        <img src={imageSrcUrl} alt="weather-image" className="weather__image" />
      </section>
    );
};
export default WeatherCard;
