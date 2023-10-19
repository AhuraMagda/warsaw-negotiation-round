
import React from "react";

const date = `© ${new Date().getFullYear()} Warsaw Negotiation Round`;

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <img className="footer__socials__icon" src="./icons/icon-facebook.png" alt="facebook"/>
                <img className="footer__socials__icon" src="./icons/icon-instagram.png" alt="facebook"/>
                <img className="footer__socials__icon" src="./icons/icon-linkedin.png" alt="facebook"/>
                <img className="footer__socials__icon" src="./icons/icon-phone.png" alt="facebook"/>
            </div>
            <div className="footer__details">
                <p>{date}</p>
                <p>Website by <a href="https://github.com/AhuraMagda" target="_blank">M.Lubaszka</a></p>
            </div>
        </footer>
    )
}

export default Footer;