import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState("dark"); // Theme state

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Store the theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
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
            <button>Register</button>
          </li>
          <li className="navbar__item">
            <button>+ Post Add</button>
          </li>
          <li className="navbar__item">
            <button onClick={toggleTheme}>
              {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
