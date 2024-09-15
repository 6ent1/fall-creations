import React, { useState } from "react";
import heroVideo from "../../assets/HeroVideo.mp4";
import "./Header.css";

import { events } from "../../utils/constants/constants";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState(events); // State for filtered events

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
    setCurrentIndex(0); // Reset to the first matched event
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredEvents.length) % filteredEvents.length
    );
  };

  return (
    <>
      <header className="header">
        <video autoPlay loop muted playsInline className="header__video">
          <source src={heroVideo} type="video/mp4"></source>
        </video>
        <div className="header__left">
          <h1 className="header__title">
            Fall Voyage <br /> The best place to post and find the perfect fall
            events
          </h1>
        </div>

        <div className="header__right">
          <div className="header__search-container">
            <label htmlFor="search-input" className="header__label">
              <input
                type="search"
                name="search"
                id="search-input"
                className="header__input"
                placeholder="Search for an event"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </label>
            <button className="header__search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Carousel for Events */}
          <div className="header__carousel">
            <button
              onClick={prevSlide}
              className="carousel__button carousel__button--left"
            >
              {"<"}
            </button>

            <div className="carousel__content">
              {filteredEvents.length > 0 && (
                <div className="carousel__slide">
                  <h2>{filteredEvents[currentIndex].title}</h2>
                  <img
                    className="carousel__slide_image"
                    src={filteredEvents[currentIndex].picture}
                  />
                  <p className="carousel__slide_description">
                    {filteredEvents[currentIndex].description}
                  </p>
                </div>
              )}
              {filteredEvents.length === 0 && <p>No matching events found.</p>}
            </div>

            <button
              onClick={nextSlide}
              className="carousel__button carousel__button--right"
            >
              {">"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
