import { card } from "../../utils/constants/constants";
import "./EventCard.css";
import locationPic from "../../assets/location-pointer.svg"
import starPic from "../../assets/star.svg"
import modalStarPic from "../../assets/modal-star.svg"
import modalLocationPic from "../../assets/modal-location.svg"
import React, { useState } from 'react';

function EventCard(card) {
  const [isModalOpen, setmodalState] = useState(false);

  function openModal() {
    setmodalState(true);
  };

  function closeModal() {
    setmodalState(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img className="card__img" src={card.image} alt={card.alt}></img>
        <div className="card__content">
          <h2 className="card__title">{card.title}</h2>
          <p className="card__description">{card.description}</p>
        
          <div className="card__footer">
            <div className="card__location">
              <img src={locationPic} alt="location-img" className="card__location-img" />
              <p className="card__location-name">{card.location}</p>
            </div>
            <div className="card__rating">
              <p className="card__rating-number">{card.rating}</p>
              <img src={starPic} alt="star-img" className="card__star-img" />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__container">
            <img src={card.image} alt={card.alt} className="modal__img" />
            <div className="modal__content">
              <h2 className="modal__title">{card.title}</h2>
              <p className="modal__description">{card.description}</p>
            </div>
            <div className="modal__footer">
              <div className="modal__location">
                <img src={modalLocationPic} alt="location-img" className="card__location-img" />
                <p className="modal__location-name">{card.location}</p>
              </div>
              <div className="modal__rating">
                <p className="modal__rating-number">{card.rating}</p>
                <img src={modalStarPic} alt="star-img" className="modal__star-img" />
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default EventCard;
