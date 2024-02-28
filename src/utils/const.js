import sunnyDay from "../images/day/sunny.svg";
import cloudyDay from "../images/day/cloudy.svg";
import foggyDay from "../images/day/fog.svg";
import rainyDay from "../images/day/rain.svg";
import snowyDay from "../images/day/snow.svg";
import stormyDay from "../images/day/storm.svg";
import sunnyNight from "../images/night/sunny.svg";
import cloudyNight from "../images/night/cloudy.svg";
import foggyNight from "../images/night/fog.svg";
import rainyNight from "../images/night/rain.svg";
import snowyNight from "../images/night/snow.svg";
import stormyNight from "../images/night/storm.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: sunnyDay,
    day: true,
    type: "sunny",
  },
  {
    url: cloudyDay,
    day: true,
    type: "cloudy",
  },
  { url: foggyDay, day: true, type: "fog" },
  {
    url: rainyDay,
    day: true,
    type: "rain",
  },
  {
    url: snowyDay,
    day: true,
    type: "snow",
  },
  {
    url: stormyDay,
    day: true,
    type: "storm",
  },
  {
    url: sunnyNight,
    day: false,
    type: "sunny",
  },
  {
    url: cloudyNight,
    day: false,
    type: "cloudy",
  },
  {
    url: foggyNight,
    day: false,
    type: "fog",
  },
  {
    url: rainyNight,
    day: false,
    type: "rain",
  },
  {
    url: snowyNight,
    day: false,
    type: "snow",
  },
  {
    url: stormyNight,
    day: false,
    type: "storm",
  },
];
