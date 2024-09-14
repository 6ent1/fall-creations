import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__columns">
          <img
            src="..\src\assets\footer_logo.svg"
            alt="Footer logo"
            className="logo"
          />
          <h3 className="logo__content">Fall Voyage</h3>
          <div className="footer__column">
            <h3 className="footer__header">Co-Creators</h3>
            <ul className="footer__list">
              <li className="footer__list-items">
                <a href="https://github.com/6ent1" className="authors">
                  <img src="" alt="" className="footer__icons" />
                  Genti T.
                </a>
              </li>
              <li className="footer__list-items">
                <a href="https://github.com/brandimcdill" className="authors">
                  <img src="" alt="" className="footer__icons" />
                  Brandi M.
                </a>
              </li>
              <li className="footer__list-items">
                <a href="https://github.com/JosiahPed" className="authors">
                  <img src="" alt="" className="footer__icons" />
                  Josiah P.
                </a>
              </li>
              <li className="footer__list-items">
                <a href="https://github.com/HarshiiSingh" className="authors">
                  <img src="" alt="" className="footer__icons" />
                  Harshi S.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copyright">&copy;2024 Fall Creations</p>
      </footer>
    </>
  );
}

export default Footer;
