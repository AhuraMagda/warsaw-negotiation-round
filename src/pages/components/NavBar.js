import { Link } from "gatsby";
import React from "react";

function NavBar({ data }) { 
    const [clicked, setClicked] = React.useState("");
    const [active, setActive] = React.useState("")

    const toggleBurger = () => {
        setClicked(prevClicked => prevClicked === "" ? "__clicked" : "");
        setActive(prevActive => prevActive === "" ? "nav__menu__active" : "");
    }

    return (
        <nav className={`nav`}>
            <img className="nav__logo" src="./logo-white.png"/>
            
            <div onClick={toggleBurger} className="hamburger">
                <div className={`hamburger__top-bun${clicked}`}></div>
                <div className={`hamburger__meat${clicked}`}></div>
                <div className={`hamburger__bottom-bun${clicked}`}></div>
            </div>

            <ul className={`nav__menu ${active}`}>      
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/aboutus">ABOUT US</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/participation">PARTICIPATION</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
            </ul>

        </nav>
    )
}

export default NavBar;