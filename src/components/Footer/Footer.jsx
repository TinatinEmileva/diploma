import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Footer.css";

function Footer() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`} onClick={scrollToTop}>
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <ul className="footer-list">{output}</ul>
        </div>
        <div className="footer-categories">
          <ul className="footer-list">
            <li>
              <NavLink to="/" onClick={scrollToTop}>Home</NavLink >
            </li>
            <li>
              <NavLink to="/about" onClick={scrollToTop}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" onClick={scrollToTop}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/delivery" onClick={scrollToTop}>Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/orders" onClick={scrollToTop}>Orders</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="directions-to-administrator">
            <Link
              className="phone"
              target="_blank"
              rel="noreferrer"
              to="tel:+996 709 312 709
              +996 704 575 733"
            >
              +996 709 312 709 <br />
              +996 704 575 733
            </Link>
            <Link
              className="phone"
              target="_blank"
              rel="noreferrer"
              to="https://www.tteana00gmail.com/"
            >
              <br />  
              <br />E-mail: tteana00@gmail.com
            </Link>
           
            <Link
              className="phone"
              target="_blank"
              rel="noreferrer"
              to="https://www.instagram.com/"
            >
              <br /> 
              <img className="footer-insta" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" /> 
              
            </Link>
            <Link
              className="phone"
              target="_blank"
              rel="noreferrer"
              to="https://https://web.telegram.org/a/"
            >
              <br /> 
              <img className="footer-telek" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png" alt="" /> 
              
            </Link>
            <Link
              className="phone"
              target="_blank"
              rel="noreferrer"
              to="https://web.whatsapp.com/"
            >
              <br /> 
              <img className="footer-whats" src="https://www.heise.de/download/media/whatsapp-web-95956/whatsapp-web_1-1-24.jpg" alt="" /> 
              
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;