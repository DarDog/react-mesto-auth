import React from "react";

function PopupWithForm(props) {

  const closeByClickAtOverlay = (e) => {
    if (e.target.classList.contains('pop-up')) {
      props.onClose()
    }
  }


  return (
      <article onClick={closeByClickAtOverlay} className={`pop-up pop-up_content_${props.name} ${props.isOpen && 'pop-up_opened'}`}>
        <div className="pop-up__background">
          <h2 className="pop-up__title">{props.title}</h2>
          <form noValidate className="form" name="editForm">
            {props.children}
          </form>
          <button onClick={props.onClose} type="button" className="pop-up__exit-button"> </button>
        </div>
      </article>
  )
}

export default PopupWithForm