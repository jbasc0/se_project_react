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
import { setToken, getToken } from "../../utils/token";
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

  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    _id: "",
    token: "",
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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    signUp({ name, avatar, email, password })
      .then((res) => {
        setUserState(
          { name: res.name, avatar: res.avatar, _id: res._id },
          true
        );
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        getUser(data.token).then((user) => {
          setUserState(user, data.token, true);
          navigate("/profile");
        });
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleUpdateUser = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    updateUser({ name, avatar }, token)
      .then(({ res }) => {
        setUserData({ name: res.name, avatar: res.avatar });
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(handleCloseModal);
  };

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("jwt");
    if (!isLiked) {
      addLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === updatedCard._id ? updatedCard : item
            )
          );
        })
        .catch((err) => console.log(err));
    } else {
      removeLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === updatedCard._id ? updatedCard : item
            )
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleAddItemSubmit = (values) => {
    const token = localStorage.getItem("jwt");
    addClothes(values, token)
      .then((item) => setClothingItems([item, ...clothingItems]))
      .catch((err) => {
        console.error(err);
      })
      .finally(handleCloseModal);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("jwt");
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
    localStorage.removeItem("jwt");
    setUserData({ name: "", avatar: "", _id: "", token: "" });
    setIsLoggedIn(false);
    navigate("/");
  };

  const setUserState = (user, token) => {
    setUserData({
      name: user.name,
      avatar: user.avatar,
      _id: user._id,
      token: token,
    });
    setIsLoggedIn(true);
  };

  const handleCheckToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      return getUser(token)
        .then((user) => {
          setUserState(user, token, true);
          return user;
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return token;
  };

  useEffect(() => {
    handleCheckToken();
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
    <CurrentUserContext.Provider value={userData}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
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
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
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
                    isLoggedIn={isLoggedIn}
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
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
