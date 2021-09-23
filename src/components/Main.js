import React from "react";

function Main(props) {

  return (
      <main className="main page__main">
        <section className="profile main__profile">
          <div onClick={props.onEditAvatar} className="profile__overlay">
            <img src="#" alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-ив Кусто</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"> </button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"> </button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
          </ul>
        </section>
      </main>
  )
}

export default Main