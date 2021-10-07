import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(''),
      [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser])

  return (
      <>
        <label htmlFor="name-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Введите ваше имя"
                 name="name"
                 id="name-input"
                 required
                 minLength="2"
                 maxLength="40"
                 onChange={setName}
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
                 onChange={setDescription}
                 value={description}/>
          <span className="form__input-error description-input-error"/>
        </label>
      </>
  )
}

export default EditProfilePopup