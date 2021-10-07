import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext)

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
      <main className="main page__main">
        <section className="profile main__profile">
          <div onClick={props.onEditAvatar} className="profile__overlay">
            <img src={currentUser.avatar} alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"/>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"/>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
            {cards.map(card => {
              return (
                  <Card key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}/>
              )
            })}
          </ul>
        </section>
      </main>
  )
}

export default Main