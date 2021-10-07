import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false),
      [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false),
      [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false),
      [isDeleterPopupOpen, setIsDeleterPopupOpen] = React.useState(false),
      [selectedCard, setSelectedCard] = React.useState({name: '', link: ''}),
      [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
        .then(userInfo => {
          setCurrentUser(userInfo)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleDeleterClick = () => {
    setIsDeleterPopupOpen(true);
  }

  const  handleUpdateUser = (userInfo) => {
    api.setUserInfo(userInfo)
        .then((userInfo) => {
          setCurrentUser(userInfo)
          closeAllPopups()
        })
  }

  const handleUpdateAvatar = (avatarUrl) => {
    api.setAvatar(avatarUrl)
        .then(userInfo => {
          setCurrentUser(userInfo);
          closeAllPopups();
        })
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeleterPopupOpen(false);
    setSelectedCard({name: '', link: ''})
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [])

  const [cards, setCards] = React.useState([]);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
        .then(newCard => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => {
          console.log(err)
        })
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
        .then(() => {
          setCards((state) => state.filter((c) => c._id === card._id ? c.remove : c))
        })
        .catch(err => {
          console.log(err)
        })
  }

  const handleAddPlaceSubmit = (card) => {
    api.setCard(card)
        .then(newCard => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch(err => {
          console.log(err)
        })
  }

  React.useEffect(() => {
    api.getInitialCards()
        .then(cards => {
          setCards(cards)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])


  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header/>
          <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardDeleter={handleDeleterClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
          />
          <Footer/>
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddCard={handleAddPlaceSubmit}
          />
          <PopupWithForm
              isOpen={isDeleterPopupOpen}
              title={'Вы уверены?'}
              name={'delete'}
              buttonText={'ДА'}
              onClose={closeAllPopups}
          >
            <label htmlFor="card-link-input" className="form__field">
              <input type="url"
                     className="form__input"
                     placeholder="Ссылка на картинку"
                     name="avatar"
                     id="profile-avatar-link-input"
                     required/>
              <span className="form__input-error profile-avatar-link-input-error"/>
            </label>
          </PopupWithForm>
          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;