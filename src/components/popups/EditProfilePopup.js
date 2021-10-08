import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import FormErrors from "./FormErrors";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(''),
      [description, setDescription] = React.useState(''),
      [isNameValid, setIsNameValid] = React.useState(false),
      [nameErrorMassage, setNameErrorMassage] = React.useState(''),
      [isDescriptionValid, setIsDescriptionValid] = React.useState(false),
      [descriptionErrorMassage, setDescriptionErrorMassage] = React.useState(''),
      [isFormValid, setIsFormValid] = React.useState(false),
      [submitButtonText, setSubbmitBittonText] = React.useState('Сохранить')

  const nameInputRef = React.useRef(''),
      descriptionInputRef = React.useRef('');

  const currentUser = React.useContext(CurrentUserContext);

  const handleChangeName = (e) => {
    setName(e.target.value);
    handleNameInputValid(nameInputRef);
    handleFormValid();
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    handleDescriptionInputValid(descriptionInputRef);
    handleFormValid();
  }

  const handleNameInputValid = (input) => {
    if (!input.current.validity.valid) {
      setIsNameValid(false);
      setNameErrorMassage(input.current.validationMessage);
    } else {
      setIsNameValid(true);
      setNameErrorMassage('');
    }
  }

  const handleDescriptionInputValid = (input) => {
    if (!input.current.validity.valid) {
      setIsDescriptionValid(false);
      setDescriptionErrorMassage(input.current.validationMessage);
    } else {
      setIsDescriptionValid(true);
      setNameErrorMassage('');
    }
  }

  const handleFormValid = () => {
    if (!nameInputRef.current.validity.valid || !descriptionInputRef.current.validity.valid) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description
    }, setSubbmitBittonText);

    setIsFormValid(false)
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          isValid={isFormValid}
          title={'Редактировать профиль'}
          name={'edit'}
          buttonText={submitButtonText}>
        <label htmlFor="name-input" className="form__field">
          <input type="text"
                 className="form__input"
                 placeholder="Введите ваше имя"
                 name="name"
                 id="name-input"
                 required
                 minLength="2"
                 maxLength="40"
                 value={name}
                 onChange={handleChangeName}
                 ref={nameInputRef}
          />
          <FormErrors isValid={isNameValid} errorMassage={nameErrorMassage} />
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
                 value={description}
                 onChange={handleChangeDescription}
                 ref={descriptionInputRef}
          />
          <FormErrors isValid={isDescriptionValid} errorMassage={descriptionErrorMassage} />
        </label>
      </PopupWithForm>
  )
}

export default EditProfilePopup