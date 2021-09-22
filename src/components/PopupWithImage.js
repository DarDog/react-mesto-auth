import React from "react";

function PopupWithImage() {
  return (
      <article className="pop-up pop-up_content_image">
        <div className="pop-up__image-container">
          <img src="#" alt="тут будет 'alt' открываемой картинки" className="pop-up__image"/>
          <h2 className="pop-up__image-title"></h2>
          <button type="button" className="pop-up__exit-button pop-up__exit-button_place_image-pop-up"></button>
        </div>
      </article>
  );
}

export default PopupWithImage