import "./WeatherCard.css";
import { weatherOptions } from "../../utils/const";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

const WeatherCard = ({ day, type, weatherTemp, weatherUnit }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}
        {weatherUnit}
      </div>
      <img src={imageSrcUrl} alt="weather-image" className="weather__image" />
    </section>
  );
};
export default WeatherCard;
