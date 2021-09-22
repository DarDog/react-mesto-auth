import Header from "./Header";
import React from "react";

function App() {
  return (
      <div className="page">
        <Header />
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
        <footer className="footer page__footer">
          <p className="footer__copyright">&copy;&nbsp;2021 Mesto Russia</p>
        </footer>
        <article className="pop-up pop-up_content_add">
          <div className="pop-up__background">
            <h2 className="pop-up__title">Новое место</h2>
            <form noValidate className="form" name="addForm">
              <label htmlFor="card-name-input" className="form__field">
                <input type="text"
                       className="form__input"
                       placeholder="Название"
                       name="name"
                       id="card-name-input"
                       required
                       minLength="2"
                       maxLength="30"/>
                <span className="form__input-error card-name-input-error"></span>
              </label>
              <label htmlFor="card-link-input" className="form__field">
                <input type="url"
                       className="form__input"
                       placeholder="Ссылка на картинку"
                       name="link"
                       id="card-link-input"
                       required/>
                <span className="form__input-error card-link-input-error"></span>
              </label>
              <button type="submit" className="form__submit-button" name="submitButton">Создать</button>
            </form>
            <button type="button" className="pop-up__exit-button"></button>
          </div>
        </article>
        <article className="pop-up pop-up_content_avatar">
          <div className="pop-up__background">
            <h2 className="pop-up__title">Обновить аватар</h2>
            <form noValidate className="form" name="avatarForm">
              <label htmlFor="card-link-input" className="form__field">
                <input type="url"
                       className="form__input"
                       placeholder="Ссылка на картинку"
                       name="avatar"
                       id="profile-avatar-link-input"
                       required/>
                <span className="form__input-error profile-avatar-link-input-error"></span>
              </label>
              <button type="submit" className="form__submit-button" name="submitButton">Сохранить</button>
            </form>
            <button type="button" className="pop-up__exit-button"></button>
          </div>
        </article>
        <article className="pop-up pop-up_content_image">
          <div className="pop-up__image-container">
            <img src="#" alt="тут будет 'alt' открываемой картинки" className="pop-up__image"/>
            <h2 className="pop-up__image-title"></h2>
            <button type="button" className="pop-up__exit-button pop-up__exit-button_place_image-pop-up"></button>
          </div>
        </article>
        <article className="pop-up pop-up_content_delete">
          <div className="pop-up__background">
            <h2 className="pop-up__title">Вы уверены?</h2>
            <form noValidate className="form" name="deleteForm">
              <button type="submit" className="form__submit-button" name="submitButton">ДА</button>
            </form>
            <button type="button" className="pop-up__exit-button"></button>
          </div>
        </article>
        <article className="pop-up pop-up_content_error-massage">
          <div className="pop-up__background">
            <h2 className="pop-up__title">Ой, что-то пошло не так!</h2>
            <form noValidate className="form" name="errorMassageForm">
              <p className="error_massage">Ошибка 404</p>
              <button type="submit" className="form__submit-button" name="submitButton">Ок</button>
            </form>
            <button type="button" className="pop-up__exit-button"></button>
          </div>
        </article>
        <template className="card-template">
          <li className="card">
            <img src="/" alt="тут будет 'alt' добавляемой картинки" className="card__image"/>
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button className="card__like-button" type="button"></button>
              <p className="card__like-count"></p>
            </div>
          </li>
        </template>
      </div>
  );
}

export default App;
