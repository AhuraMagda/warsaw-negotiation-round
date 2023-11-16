import React from "react";
import iconFacebook from "../images/icons/icon-facebook.png";
import iconInstagram from "../images/icons/icon-instagram.png";
import iconLinkedin from "../images/icons/icon-linkedin.png";
import iconYoutube from "../images/icons/icon-youtube.png";

const copyrightDate = `© ${new Date().getFullYear()} Warsaw Negotiation Round`;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.facebook.com/theWNR">
          <img
            className="footer__icons__icon"
            src={iconFacebook}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/warsawnegotiationround">
          <img
            className="footer__icons__icon"
            src={iconInstagram}
            alt="instagram"
          />
        </a>
        <a href="https://www.linkedin.com/company/thewnr/">
          <img
            className="footer__icons__icon"
            src={iconLinkedin}
            alt="linkedin"
          />
        </a>
        <a href="https://www.youtube.com/@WarsawNegotiationRound">
          <img
            className="footer__icons__icon"
            src={iconYoutube}
            alt="youtube"
          />
        </a>
      </div>
      <div className="footer__details">
        <p>{copyrightDate}</p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/AhuraMagda"
            target="_blank"
            rel="noopener noreferrer"
          >
            M.Lubaszka
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
