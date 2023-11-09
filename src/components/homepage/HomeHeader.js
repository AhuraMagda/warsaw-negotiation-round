import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HomeHeader({ backgroundImage }) {
  return (
    <header className="home__header">
      <div className="home__header__text">
        <h1>
          WARSAW <br />
          NEGOTIATION <br />
          ROUND
        </h1>
        <h2>April, 19th - 21st 2024</h2>
      </div>
      <div className="home__header__photo">
        <GatsbyImage image={backgroundImage} alt="Warsaw skyline" />
      </div>
    </header>
  );
}
