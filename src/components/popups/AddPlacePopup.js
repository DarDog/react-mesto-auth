import React from "react";
import PopupWithForm from "./PopupWithForm";
import FormErrors from "./FormErrors";

function AddPlacePopup(props) {
  const [name, setName] = React.useState(''),
      [link, setLink] = React.useState(''),
      [isTitleValid, setIsTitleValid] = React.useState(false),
      [titleErrorMassage, setTitleErrorMassage] = React.useState(''),
      [isLinkValid, setIsLinkValid] = React.useState(false),
      [linkErrorMassage, setLinkErrorMassage] = React.useState(''),
      [isFormValid, setIsFormValid] = React.useState(false),
      [submitButtonText, setSubmitButtonText] = React.useState('Создать');

  const titleInputRef = React.useRef(''),
      linkInputRef = React.useRef('');

  const handleChangeName = (e) => {
    setName(e.target.value);
    handleTitleInputValid(titleInputRef);
    handleFormValid();
  }

  const handleChangeUrl = (e) => {
    setLink(e.target.value);
    handleLinkInputValid(linkInputRef);
    handleFormValid();
  }

  const handleTitleInputValid = (input) => {
    if (!input.current.validity.valid) {
      setIsTitleValid(false);
      setTitleErrorMassage(input.current.validationMessage);
    } else {
      setIsTitleValid(true);
      setTitleErrorMassage('');
    }
  }

  const handleLinkInputValid = (input) => {
    if (!input.current.validity.valid) {
      setIsLinkValid(false);
      setLinkErrorMassage(input.current.validationMessage);
    } else {
      setIsLinkValid(true);
      setLinkErrorMassage('');
    }
  }

  const handleFormValid = () => {
    if (!titleInputRef.current.validity.valid || !linkInputRef.current.validity.valid) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAddCard({
      name,
      link
    }, setSubmitButtonText)

    setLink('')
    setName('')
    setIsFormValid(false)
  }

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          title={'Новое место'}
          name={'add'}
          buttonText={submitButtonText}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          isValid={isFormValid}
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
                 ref={titleInputRef}
          />
          <FormErrors isValid={isTitleValid} errorMassage={titleErrorMassage}/>
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
                 ref={linkInputRef}
          />
          <FormErrors isValid={isLinkValid} errorMassage={linkErrorMassage}/>
        </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup