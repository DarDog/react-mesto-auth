import React from "react";

function Card(props) {
  const card = props.card

  const handleClick = () => {
    props.onCardClick(props.card)
  }

  return (
      <li key={card._id} className="card">
        <img onClick={handleClick} src={card.link} alt={card.name} className="card__image"/>
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"/>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </li>
  )
}

export default Card