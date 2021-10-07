import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [url, setUrl] = React.useState(''),
      imageSrcRef = React.useRef('');

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: imageSrcRef.current.value
    })
  }

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          title={'Обновить аватар'}
          name={'avatar'}
          buttonText={'Сохранить'}
          onClose={props.onClose}
          onSubmit={handleSubmit}
      >
        <label htmlFor="card-link-input" className="form__field">
          <input type="url"
                 className="form__input"
                 placeholder="Ссылка на картинку"
                 name="avatar"
                 id="profile-avatar-link-input"
                 required
                 ref={imageSrcRef}
                 onChange={handleChange}
                 value={url}
          />
          <span className="form__input-error profile-avatar-link-input-error"/>
        </label>
      </PopupWithForm>
  )
}

export default EditAvatarPopup