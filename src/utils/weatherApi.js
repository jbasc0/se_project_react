import { checkServerResponse } from "./api";

const latitude = 36.17;
const longitude = -115.13;
const APIkey = "6cb0addff609de3411e1d7b411b434af";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(data.main.temp)}`,
      C: `${Math.round(((data.main.temp - 32) * 5) / 9)}`,
    },
  };
  return weather;
};

export const getCity = (data) => {
  const city = data.name;
  return city;
};
