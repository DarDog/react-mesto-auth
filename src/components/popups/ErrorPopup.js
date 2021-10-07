import React from 'react'
import PopupWithForm from "./PopupWithForm";

function ErrorPopup(props) {


  return (
      <PopupWithForm
          isOpen={isDeleterPopupOpen}
          title={'Ой, что то пошло не так'}
          name={'error'}
          buttonText={'ОК'}
          onClose={closeAllPopups}
      >
        <label htmlFor="card-link-input" className="form__field">
          <input type="url"
                 className="form__input"
                 placeholder="Ссылка на картинку"
                 name="avatar"
                 id="profile-avatar-link-input"
                 required/>
          <span className="form__input-error profile-avatar-link-input-error"/>
        </label>
      </PopupWithForm>
  )
}

export default ErrorPopup