import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
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
          />
          <Footer/>
          <PopupWithForm
              isOpen={isEditProfilePopupOpen}
              title={'Редактировать профиль'}
              name={'edit'}
              buttonText={'Сохранить'}
              onClose={closeAllPopups}
          >
            <label htmlFor="name-input" className="form__field">
              <input type="text"
                     className="form__input"
                     placeholder="Введите ваше имя"
                     name="name"
                     id="name-input"
                     required
                     minLength="2"
                     maxLength="40"/>
              <span className="form__input-error name-input-error"/>
            </label>
            <label htmlFor="description-input" className="form__field">
              <input type="text"
                     className="form__input"
                     placeholder="Расскажите о себе"
                     name="about"
                     id="description-input"
                     required
                     minLength="2"
                     maxLength="200"/>
              <span className="form__input-error description-input-error"/>
            </label>
          </PopupWithForm>
          <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              title={'Новое место'}
              name={'add'}
              buttonText={'Создать'}
              onClose={closeAllPopups}
          >
            <label htmlFor="card-name-input" className="form__field">
              <input type="text"
                     className="form__input"
                     placeholder="Название"
                     name="name"
                     id="card-name-input"
                     required
                     minLength="2"
                     maxLength="30"/>
              <span className="form__input-error card-name-input-error"/>
            </label>
            <label htmlFor="card-link-input" className="form__field">
              <input type="url"
                     className="form__input"
                     placeholder="Ссылка на картинку"
                     name="link"
                     id="card-link-input"
                     required/>
              <span className="form__input-error card-link-input-error"/>
            </label>
          </PopupWithForm>
          <PopupWithForm
              isOpen={isEditAvatarPopupOpen}
              title={'Обновить аватар'}
              name={'avatar'}
              buttonText={'Сохранить'}
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