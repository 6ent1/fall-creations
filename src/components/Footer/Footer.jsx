import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__columns">
          <img src="" alt="" className="logo" />
        </div>
        <div className="footer__column footer__column_authors">
          <h3 className="footer__header">Co-Creators</h3>
          <ul className="footer__list">
            <li className="footer__list-items">
              <a href="" className="authors">
                <img src="" alt="" className="footer__icons" />
                Genti T.
              </a>
            </li>
            <li className="footer__list-items">
              <a href="" className="authors">
                <img src="" alt="" className="footer__icons" />
                Brandi M.
              </a>
            </li>
            <li className="footer__list-items">
              <a href="" className="authors">
                <img src="" alt="" className="footer__icons" />
                Josiah P.
              </a>
            </li>
            <li className="footer__list-items">
              <a href="" className="authors">
                <img src="" alt="" className="footer__icons" />
                Harshi
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">&copy;2024 Fall Creations</p>
      </footer>
    </>
  );
}

export default Footer;
