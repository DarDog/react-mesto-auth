import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState(''),
      [userDescription, setUserDescription] = React.useState(''),
      [userAvatar, setUserAvatar] = React.useState(''),
      [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
        .then(([userInfo, cards]) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);

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
            <img src={userAvatar} alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"/>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"/>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
            {cards.map(card => {
              return (
                  <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
              )
            })}
          </ul>
        </section>
      </main>
  )
}

export default Main