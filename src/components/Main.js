import React from "react";
import {api} from "../utils/Api";

function Main(props) {

  const [userName, setUserName] = React.useState(''),
        [userDescription, setUserDescription] = React.useState(''),
        [userAvatar, setUserAvatar] = React.useState(''),
        [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([
        api.getUserInfo(),
        api.getInitialCards()
    ])
        .then(([userInfo, cards]) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);

          console.log(userInfo)
          setCards(cards)
          console.log(cards)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

  console.log(cards)

  return (
      <main className="main page__main">
        <section className="profile main__profile">
          <div onClick={props.onEditAvatar} className="profile__overlay">
            <img src={userAvatar} alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"> </button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"> </button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
            {cards.map(card => {
              return (
                  <li className="card">
                    <img src={card.link} alt={card.name} className="card__image"/>
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like">
                      <button className="card__like-button" type="button"></button>
                      <p className="card__like-count">{card.likes.length}</p>
                    </div>
                  </li>
              )
            })}
          </ul>
        </section>
      </main>
  )
}

export default Main