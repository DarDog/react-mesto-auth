import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(''),
      [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }



  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser])

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          title={'Редактировать профиль'}
          name={'edit'}
          buttonText={'Сохранить'}>
        <label htmlFor="name-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Введите ваше имя"
                 name="name"
                 id="name-input"
                 required
                 minLength="2"
                 maxLength="40"
                 onChange={handleChangeName}
                 value={name}/>
          <span className="form__input-error name-input-error"/>
        </label>
        <label htmlFor="description-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Расскажите о себе"
                 name="about"
                 id="description-input"
                 required
                 minLength="2"
                 maxLength="200"
                 onChange={handleChangeDescription}
                 value={description}/>
          <span className="form__input-error description-input-error"/>
        </label>
      </PopupWithForm>
  )
}

export default EditProfilePopup