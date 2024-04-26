import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getCity,
  getForecastWeather,
  parseWeatherData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {
  getClothes,
  addClothes,
  deleteClothes,
  addLike,
  removeLike,
} from "../../utils/api";
import RegisterModal from "../ModalWithForm/RegisterModal";
import SignInModal from "../ModalWithForm/SignInModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getUser, signIn, signUp, updateUser } from "../Auth/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../ModalWithForm/EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({ temperature: {} });
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const navigate = useNavigate();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleSignInModal = () => {
    setActiveModal("signIn");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    signUp({ name, avatar, email, password })
      .then(() => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, password });
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    signIn(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          setUserData(res.user);
          setIsLoggedIn(true);
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleUpdateUser = ({ name, avatar }) => {
    const token = getToken();
    updateUser({ name, avatar }, token)
      .then((res) => {
        setUserData(res.user);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleCardLike = (id) => {
    console.log(id);
    const token = getToken();
    !isLiked
      ? addLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
            setIsLiked(true);
          })
          .catch((err) => console.log(err))
      : removeLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
            setIsLiked(false);
          })
          .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = (values) => {
    const token = getToken();
    addClothes(values, token)
      .then((item) => setClothingItems([item, ...clothingItems]))
      .catch((err) => {
        console.error(err);
      })
      .finally(handleCloseModal);
  };

  const handleDelete = (id) => {
    const token = getToken();
    deleteClothes(id, token)
      .then(() => {
        const updatedClothes = clothingItems.filter((item) => item._id !== id);
        setClothingItems(updatedClothes);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(handleCloseModal);
  };

  const handleLogOff = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
  });

  useEffect(() => {
    const token = getToken();
    getUser(token)
      .then((data) => {
        setIsLoggedIn(true);
        setUserData(data);
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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

  useEffect(() => {
    getClothes()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={userData}>
          <Header
            onCreateModal={handleCreateModal}
            onSignUpModal={handleSignUpModal}
            onSignInModal={handleSignInModal}
            name={userData.name}
            avatar={userData.avatar}
            isLoggedIn={isLoggedIn}
            city={city}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
              <Route
                path="/profile"
                element={
                  <Profile
                    onSelectCard={handleSelectedCard}
                    onCreateModal={handleCreateModal}
                    clothingItems={clothingItems}
                    name={userData.name}
                    avatar={userData.avatar}
                    onEditProfileModal={handleEditProfileModal}
                    onCardLike={handleCardLike}
                    logOffProfile={handleLogOff}
                  />
                }
              />
            </Route>
          </Routes>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
              clothingItems={clothingItems}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              handleUpdateUser={handleUpdateUser}
              isOpen={activeModal === "editProfile"}
            />
          )}
          {activeModal === "signUp" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              handleSignUp={handleSignUp}
              isOpen={activeModal === "signUp"}
            />
          )}
          {activeModal === "signIn" && (
            <SignInModal
              handleCloseModal={handleCloseModal}
              handleSignIn={handleSignIn}
              isOpen={activeModal === "signIn"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDelete}
              isLiked={handleCardLike}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
