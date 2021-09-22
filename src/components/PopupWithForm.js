import React from "react";

function PopupWithForm(props) {

  return (
      <article className={`pop-up pop-up_content_${props.name}`}>
        <div className="pop-up__background">
          <h2 className="pop-up__title">{props.title}</h2>
          <form noValidate className="form" name="editForm">
            {props.children}
            <button type="submit" className="form__submit-button" name={`${props.name}`}>Сохранить</button>
          </form>
          <button type="button" className="pop-up__exit-button"></button>
        </div>
      </article>
  )
}

export default PopupWithForm