import { Link } from "gatsby";
import React from "react";

function NavBar() {
    return (
        <nav>
            <img className="nav__logo" src="./logo-white.png"/>
            <ul>      
                <li><Link to="/">HOME</Link></li>
                <li><a href="./aboutus.html">ABOUT US</a></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/participation">PARTICIPATION</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;