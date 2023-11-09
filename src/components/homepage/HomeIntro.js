import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HomeIntro({introImage}) {
    return (
        <section className="home__intro">
        <div className="home__intro__photo">
          <GatsbyImage image={introImage} alt="Working students" />
        </div>

        <div className="home__intro__text">
          <p>
            Warsaw Negotiation Round 2024 is the 15th edition of one of the
            most prestigious international negotiation tournaments. The WNR
            year after year unites students of top law, economics and business
            schools from around the world.
          </p>
          <Link to="/participation">
            <button className="home__intro__text__btn">
              I WANT TO PARTICIPATE
            </button>
          </Link>
        </div>
      </section>
    )
}