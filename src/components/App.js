import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false),
        [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false),
        [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false),
        [isDeleterPopupOpen, setDeleterPopupOpen] = React.useState(false),
        [selectedCard, setSelectedCard] = React.useState('');

  let isOpen,
      title,
      name,
      children;

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleCardClick = () => {
    setSelectedCard('')
  }

  const handleDeleterClick = () => {
    setDeleterPopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setDeleterPopupOpen(false);
    setSelectedCard('')
  }

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    })
  })

  isOpen = isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen;

  title = (isEditProfilePopupOpen && 'Редактировать профиль')
      || (isAddPlacePopupOpen && 'Новое место')
      || (isEditAvatarPopupOpen && 'Обновить аватар')
      || (isDeleterPopupOpen && 'Вы уверены?');

  name = (isEditProfilePopupOpen && 'edit')
      || (isAddPlacePopupOpen && 'add')
      || (isEditAvatarPopupOpen && 'avatar')
      || (isDeleterPopupOpen && 'delete');

  children = (isEditProfilePopupOpen && (
      <>
        <label htmlFor="name-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Введите ваше имя"
                 name="name"
                 id="name-input"
                 required
                 minLength="2"
                 maxLength="40" />
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
                 maxLength="200" />
          <span className="form__input-error description-input-error"/>
        </label>
        <button type="submit" className="form__submit-button" name="submitButton">Сохранить</button>
      </>
  )) || (isAddPlacePopupOpen && (
      <>
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
        <button type="submit" className="form__submit-button" name="submitButton">Создать</button>
      </>
  )) || (isEditAvatarPopupOpen && (
      <>
        <label htmlFor="card-link-input" className="form__field">
          <input type="url"
                 className="form__input"
                 placeholder="Ссылка на картинку"
                 name="avatar"
                 id="profile-avatar-link-input"
                 required/>
          <span className="form__input-error profile-avatar-link-input-error"/>
        </label>
        <button type="submit" className="form__submit-button" name="submitButton">Сохранить</button>
      </>
  )) || (isDeleterPopupOpen && (
      <>
        <button type="submit" className="form__submit-button" name="submitButton">ДА</button>
      </>
  ));


  return (
      <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardDeleter={handleDeleterClick}
            onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
            isOpen={isOpen}
            onClose={closeAllPopups}
            title={title}
            name={name}
            children={children}
        />
        <PopupWithImage
          card={selectedCard}
          onclose={closeAllPopups}
        />
      </div>
  );
}

export default App;