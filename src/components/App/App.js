import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getCity,
  getForecastWeather,
  parseWeatherData,
} from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const city = getCity(data);
        setCity(city);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="app">
      <Header onCreateModal={handleCreateModal} city={city} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label htmlFor="name" className="app__name">
            Name
          </label>

          <input
            className="app__name-input"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            minLength="1"
            maxLength="30"
          />

          <label htmlFor="link" className="app__url">
            Image
          </label>

          <input
            className="app__image-input"
            placeholder="Image URL"
            type="url"
            name="link"
            id="link"
            minLength="1"
            maxLength="30"
          />
          <p>Select the weather type:</p>
          <div className="app__buttons">
            <div>
              <input name="radio" type="radio" id="hot" value="hot" />
              <label htmlFor="hot">Hot</label>
            </div>
            <div>
              <input name="radio" type="radio" id="warm" value="warm" />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input name="radio" type="radio" id="cold" value="cold" />
              <label htmlFor="cold">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
