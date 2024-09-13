import { card } from "../../utils/constants/constants";
import "./EventCard.css";
import locationPic from "../../assets/location-pointer.svg"

function EventCard(card) {
  return (
    <>
      <div className="card">
        <img className="card__img" src={card.image} alt={card.alt}></img>
        <div className="card__content">
          <h2 className="card__title">{card.title}</h2>
          <p className="card__description">{card.description}</p>
        
          <div className="card__footer">
            <div className="card__location">
              <img src={locationPic} alt="" className="card__location-img" />
              <p className="card__location-name">{card.location}</p>
            </div>
            <p className="card__rating">{card.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
