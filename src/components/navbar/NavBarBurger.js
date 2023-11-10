import React from "react";
import { handleEnter } from "../helpers/handleEnter";

export default function NavBarBurger({ setMobileNavActive }) {
  const [clicked, setClicked] = React.useState("");

  const toggleBurger = () => {
    setClicked((prevClicked) => (prevClicked === "" ? "__clicked" : ""));
    setMobileNavActive((prevActive) =>
      prevActive === "" ? "nav__menu__active" : ""
    );
  };

  return (
    <div
      onClick={toggleBurger}
      onKeyDown={(event)=> handleEnter(event, toggleBurger)}
      className="hamburger"
      tabIndex="0"
    >
      <div className={`hamburger__top-bun${clicked}`}></div>
      <div className={`hamburger__meat${clicked}`}></div>
      <div className={`hamburger__bottom-bun${clicked}`}></div>
    </div>
  );
}
