import { Link } from "gatsby";
import React from "react";
import logo from "../../images/logo-white.png";
import NavBarBurger from "./NavBarBurger";

function NavBar() {
  const [mobileNavActive, setMobileNavActive] = React.useState("");

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={`nav`}>
      <Link to="/">
        <img className="nav__logo" src={logo} alt="WNR logo" />
      </Link>
      <NavBarBurger setMobileNavActive={setMobileNavActive} />

      <ul className={`nav__menu ${mobileNavActive}`}>
        <li>
          <Link to="/" activeStyle={activeStyle}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/aboutus" activeStyle={activeStyle}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={activeStyle}>
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/participation" activeStyle={activeStyle}>
            PARTICIPATION
          </Link>
        </li>
        <li>
          <Link to="/gallery" activeStyle={activeStyle}>
            GALLERY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
