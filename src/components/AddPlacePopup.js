import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState(''),
      [link, setLink] = React.useState('');

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeUrl = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAddCard({
      name,
      link
    })
  }

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          title={'Новое место'}
          name={'add'}
          buttonText={'Создать'}
          onClose={props.onClose}
          onSubmit={handleSubmit}
      >
        <label htmlFor="card-name-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Название"
                 name="name"
                 id="card-name-input"
                 required
                 minLength="2"
                 maxLength="30"
                 onChange={handleChangeName}
                 value={name}
          />
          <span className="form__input-error card-name-input-error"/>
        </label>
        <label htmlFor="card-link-input" className="form__field">
          <input type="url"
                 className="form__input"
                 placeholder="Ссылка на картинку"
                 name="link"
                 id="card-link-input"
                 required
                 onChange={handleChangeUrl}
                 value={link}
          />
          <span className="form__input-error card-link-input-error"/>
        </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup