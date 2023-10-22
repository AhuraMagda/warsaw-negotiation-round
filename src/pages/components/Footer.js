
import React from "react";
import iconFacebook from "../../images/icons/icon-facebook.png"
import iconInstagram from "../../images/icons/icon-instagram.png"
import iconLinkedin from "../../images/icons/icon-linkedin.png"
import iconPhone from "../../images/icons/icon-phone.png"

const date = `© ${new Date().getFullYear()} Warsaw Negotiation Round`;

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <a href=""><img className="footer__socials__icon" src={iconFacebook} alt="facebook"/></a>
                <a href=""><img className="footer__socials__icon" src={iconInstagram} alt="instagram"/></a>
                <a href=""><img className="footer__socials__icon" src={iconLinkedin} alt="linkedin"/></a>
                <a href=""><img className="footer__socials__icon" src={iconPhone} alt="phone"/></a>
            </div>
            <div className="footer__details">
                <p>{date}</p>
                <p>Website by <a href="https://github.com/AhuraMagda" target="_blank">M.Lubaszka</a></p>
            </div>
        </footer>
    )
}

export default Footer;