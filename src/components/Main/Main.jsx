import React, { useState } from "react";
import { events as initialEvents } from "../../utils/constants/constants";
import EventCard from "../EventCard/EventCard";
import "./Main.css";

function Main() {
  const [events, setEvents] = useState(initialEvents);
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  // Function to update event rating
  const updateRating = (index, updatedRating, newNumRatings) => {
    const updatedEvents = [...events];
    updatedEvents[index].initialRating = updatedRating;
    updatedEvents[index].numRatings = newNumRatings;
    setEvents(updatedEvents);
  };
  // Filtered events
  const filteredEvents = events.filter((event) => {
    const locationMatches = locationFilter
      ? event.location === locationFilter
      : true;
    const typeMatches = typeFilter ? event.type === typeFilter : true;
    const ratingMatches = ratingFilter
      ? event.initialRating >= ratingFilter
      : true;

    return locationMatches && typeMatches && ratingMatches;
  });

  // Unique filter options
  const uniqueLocations = [...new Set(events.map((event) => event.location))];
  const uniqueTypes = [...new Set(events.map((event) => event.type))];

  return (
    <>
      <main className="main">
        {/* Filter section */}
        <div className="main__filters">
          <label className="main__filters_label">
            Location:
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All</option>
              {uniqueLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label className="main__filters_label">
            Type of Event:
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All</option>
              {uniqueTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="main__filters_label">
            Minimum Rating:
            <input
              type="number"
              min="1"
              max="5"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            />
          </label>
        </div>

        {/* List of event cards */}
        <div className="cards__list">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              location={event.location}
              initialRating={event.initialRating}
              picture={event.picture}
              initialNumRatings={event.numRatings} // Pass the initial number of ratings
              onRatingChange={(updatedRating, newNumRatings) => {
                updateRating(index, updatedRating, newNumRatings); // Handle updating the event data
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Main;
