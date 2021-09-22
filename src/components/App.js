import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <article className="pop-up pop-up_content_edit">
          <div className="pop-up__background">
            <h2 className="pop-up__title">Редактировать профиль</h2>
            <form noValidate className="form" name="editForm">
              <label htmlFor="name-input" className="form__field">
                <input type="text"
                       className="form__input"
                       placeholder="Введите ваше имя"
                       name="name"
                       id="name-input"
                       required
                       minLength="2"
                       maxLength="40" />
                  <span className="form__input-error name-input-error"></span>
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
                  <span className="form__input-error description-input-error"></span>
              </label>
              <button type="submit" className="form__submit-button" name="submitButton">Сохранить</button>
            </form>
            <button type="button" className="pop-up__exit-button"></button>
          </div>
        </article>
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
