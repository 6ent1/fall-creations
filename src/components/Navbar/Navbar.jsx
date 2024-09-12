import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <a href="#">Home</a>
          </li>
          <li className="navbar__item">
            <a href="#main">Listings</a>
          </li>

          <li className="navbar__item">
            <button>SignIn</button>
          </li>
          <li className="navbar__item">
            <a href="#">Register</a>
          </li>
          <li className="navbar__item">
            <a href="#">+ Post Add</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
