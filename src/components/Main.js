import React from "react";

function Main() {
  const handleEditProfileClick = () => {
    const editPopupElement = document.querySelector('.pop-up_content_edit');

      editPopupElement.classList.add('pop-up_opened');
  }

  const handleAddPlaceClick = () => {
    const addPopupElement = document.querySelector('.pop-up_content_add');

      addPopupElement.classList.add('pop-up_opened')
  }

  const handleEditAvatarClick = () => {
    const editAvatarPopupElement = document.querySelector('.pop-up_content_avatar');

    editAvatarPopupElement.classList.add('pop-up_opened')
  }


  return (
      <main className="main page__main">
        <section className="profile main__profile">
          <div onClick={handleEditAvatarClick} className="profile__overlay">
            <img src="#" alt="аватар пользователя" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-ив Кусто</h1>
            <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__cards">
          </ul>
        </section>
      </main>
  )
}

export default Main