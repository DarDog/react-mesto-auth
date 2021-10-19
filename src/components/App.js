import React from "react";
import {api} from "../utils/Api";
import {auth} from "../utils/Auth";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Header from "./Header";
import Main from "./main/Main";
import Footer from "./Footer";
import ImagePopup from "./popups/ImagePopup";
import EditProfilePopup from "./popups/EditProfilePopup";
import EditAvatarPopup from "./popups/EditAvatarPopup";
import AddPlacePopup from "./popups/AddPlacePopup";
import ErrorPopup from "./popups/ErrorPopup";
import ConfirmDeletePopup from "./popups/ConfirmeDeletePopup";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Success from "./popups/Success";
import Fail from "./popups/Fail";

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false),
      [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false),
      [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false),
      [isDeleterPopupOpen, setIsDeleterPopupOpen] = React.useState(false),
      [isErrorPopupOpen, setIsErrorPopupOpen] = React.useState(false),
      [isPageLoaded, setIsPageLoaded] = React.useState(false),
      [errorMassage, setErrorMassage] = React.useState(''),
      [selectedCard, setSelectedCard] = React.useState({name: '', link: ''}),
      [deletingCard, setDeletingCard] = React.useState({}),
      [currentUser, setCurrentUser] = React.useState({}),
      [cards, setCards] = React.useState([]),
      [loggedIn, setLoggedIn] = React.useState(false),
      [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false),
      [isFailPopupOpen, setIsFailPopupOpen] = React.useState(false),
      [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
        .then(([userInfo, cards]) => {
          setCurrentUser(userInfo);
          setCards(cards);
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
        .finally(() => {
          setTimeout(showContent, 2000)
        })
  }, [])

  const showContent = () => {
    setIsPageLoaded(true)
  }

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


  const handleUpdateUser = (userInfo, buttonLoadStatus) => {
    buttonLoadStatus('Сохраняется...')
    api.setUserInfo(userInfo)
        .then((userInfo) => {
          setCurrentUser(userInfo);
          closeAllPopups();
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
        .finally(() => {
          buttonLoadStatus('Сохранить');
        })
  }

  const handleUpdateAvatar = (avatarUrl, buttonLoadStatus) => {
    buttonLoadStatus('Сохраняется...')
    api.setAvatar(avatarUrl)
        .then(userInfo => {
          setCurrentUser(userInfo);
          closeAllPopups();
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
        .finally(() => {
          buttonLoadStatus('Сохранить');
        })
  }

  const handleErrorAccess = () => {
    closeAllPopups()
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeleterPopupOpen(false);
    setIsErrorPopupOpen(false);
    setIsSuccessPopupOpen(false);
    setIsFailPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [])

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
        .then(newCard => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
  }

  const handleCardDeleteClick = (card) => {
    setIsDeleterPopupOpen(true);
    setDeletingCard(card);
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
        .then(() => {
          setCards((state) => state.filter((c) => c._id === card._id ? c.remove : c))
          closeAllPopups();
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
  }

  const handleAddPlaceSubmit = (card, buttonLoadStatus) => {
    buttonLoadStatus('Создается..')
    api.setCard(card)
        .then(newCard => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch(err => {
          setErrorMassage(err);
          setIsErrorPopupOpen(true);
        })
        .finally(() => {
          buttonLoadStatus('Создать');
        })
  }

  const handleRegistration = (newUserInfo) => {
    auth.setNewUser(newUserInfo.password, newUserInfo.email)
        .then(() => {
          setIsSuccessPopupOpen(true)
          props.history.push('/sign-in')
        })
        .catch(err => {
          console.error(err)
          setIsFailPopupOpen(true)
        })
  }

  const handleAuthorization = (authUserInfo) => {
    auth.authorization(authUserInfo.password, authUserInfo.email)
        .then(data => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            setLoggedIn(true);
            props.history.push('/')
          }
        })
        .catch(err => {
          console.error(err)
        })
  }

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.getUserInfo(jwt)
          .then(data => {
            setLoggedIn(true);
            setUserData(data.data)
            props.history.push('/')
          })
          .catch(err => {
            console.error(err)
          })
    }
  }, [])

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Header
            loggedIn={loggedIn}
            userData={userData}
        />
        <Switch>
          <ProtectedRoute
              exact path='/'
              loggedIn={loggedIn}
              component={Main}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDeleteClick}
              isLoaded={isPageLoaded}
          />
          <Route path='/sign-in'>
            <SignIn
                onSubmit={handleAuthorization}
            />
          </Route>
          <Route path='/sign-up'>
            <SignUp
                onSubmit={handleRegistration}
            />
          </Route>
        </Switch>
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
        <ErrorPopup
            isOpen={isErrorPopupOpen}
            onClose={closeAllPopups}
            errorMassage={errorMassage}
            onAccessError={handleErrorAccess}
        />
        <ConfirmDeletePopup
            isOpen={isDeleterPopupOpen}
            onClose={closeAllPopups}
            onConfirmDelete={handleCardDelete}
            card={deletingCard}
        />
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
        <Success
            onClose={closeAllPopups}
            isOpen={isSuccessPopupOpen}
        />
        <Fail
            onClose={closeAllPopups}
            isOpen={isFailPopupOpen}
        />
      </CurrentUserContext.Provider>
  );
}

export default withRouter(App);