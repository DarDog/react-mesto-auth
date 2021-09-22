import React from "react";

function Main() {
  return (
      <main className="main page__main">
        <section className="profile main__profile">
          <div className="profile__overlay">
            <img src="#" alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-ив Кусто</h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
          </ul>
        </section>
      </main>
  )
}

export default Main