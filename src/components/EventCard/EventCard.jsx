import React, { useState } from "react";
import modalLocationPic from "../../assets/modal-location.svg";
import modalStarPic from "../../assets/modal-star.svg";
import "./EventCard.css";

function EventCard({
  title,
  description,
  location,
  initialRating,
  picture,
  initialNumRatings,
  onRatingChange,
}) {
  const [isModalOpen, setModalState] = useState(false);
  const [currentRating, setCurrentRating] = useState(initialRating);
  const [numRatings, setNumRatings] = useState(initialNumRatings || 1); // Default to 1 if not provided
  const [newRating, setNewRating] = useState(""); // To hold user input before submission
  const [ratingSubmitted, setRatingSubmitted] = useState(false); // Tracks if rating was submitted

  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  const handleRatingInputChange = (e) => {
    setNewRating(e.target.value); // Set the new rating input value
  };

  const handleSubmitRating = () => {
    const newRatingValue = Number(newRating);

    if (newRatingValue >= 1 && newRatingValue <= 5) {
      // Recalculate the average rating
      const newNumRatings = numRatings + 1;
      const updatedRating =
        (currentRating * numRatings + newRatingValue) / newNumRatings;

      setCurrentRating(updatedRating);
      setNumRatings(newNumRatings);
      setNewRating(""); // Clear the input after submission
      setRatingSubmitted(true); // Disable further submissions

      // Notify parent of the new rating and updated number of ratings
      onRatingChange(updatedRating, newNumRatings);
    } else {
      alert("Please enter a rating between 1 and 5");
    }
  };

  return (
    <>
      <div className="card">
        <img
          className="card__img"
          src={picture}
          alt={title}
          onClick={openModal}
        />
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>

          <div className="card__footer">
            <div className="card__location">
              <img
                src={modalLocationPic}
                alt="location-img"
                className="card__location-img"
              />
              <p className="card__location-name">{location}</p>
            </div>
            <div className="card__rating">
              <p className="card__rating-number">{currentRating.toFixed(1)}</p>
              <img
                src={modalStarPic}
                alt="star-img"
                className="card__star-img"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__container">
            <button
              className="modal__container_close_button"
              onClick={closeModal}
            >
              X
            </button>
            <img src={picture} alt={title} className="modal__img" />
            <div className="modal__content">
              <h2 className="modal__title">{title}</h2>
              <p className="modal__description">{description}</p>
            </div>
            <div className="modal__footer">
              <div className="modal__location">
                <img
                  src={modalLocationPic}
                  alt="location-img"
                  className="card__location-img"
                />
                <p className="modal__location-name">{location}</p>
              </div>
              <div className="modal__rating">
                <p className="modal__rating-number">
                  {currentRating.toFixed(1)}
                </p>
                <img
                  src={modalStarPic}
                  alt="star-img"
                  className="modal__star-img"
                />
              </div>
              <label className="modal__rating-input">
                Set Rating:
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={newRating}
                  onChange={handleRatingInputChange}
                  disabled={ratingSubmitted} // Disable input after submission
                />
              </label>
              <button
                className="modal__submit_button"
                onClick={handleSubmitRating}
                disabled={ratingSubmitted} // Disable button after submission
              >
                {ratingSubmitted ? "Rating Submitted" : "Submit Rating"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;
