import heroVideo from "../../assets/HeroVideo.mp4";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <video autoPlay loop muted playsInline className="header__video">
          <source src={heroVideo} type="video/mp4"></source>
        </video>

        <h1 className="header__title">
          Everything Fall - The best place to post and find the perfect fall
          festival
        </h1>
        <label htmlFor="search-input" className="header__input">
          <input
            type="search"
            name="search"
            id="search-input"
            className="header__input"
            placeholder="Search for an event"
          />
        </label>
      </header>
    </>
  );
}

export default Header;
