import { card } from "../../utils/constants/constants";
import "./EventCard.css";

function EventCard(card) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={card.image} alt={card.alt}></img>
        <div className="card-content">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
        </div>

      </div>
    </>
  );
}

export default EventCard;
