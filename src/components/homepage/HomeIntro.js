import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HomeIntro({introImage}) {
    return (
        <section className="home__intro">
        <div className="home__intro__photo">
          <GatsbyImage image={introImage} alt="Students by the desk" />
        </div>

        <div className="home__intro__text">
          <p>
            Warsaw Negotiation Round 2024 is the&nbsp;15th edition of one of the
            most prestigious international negotiation tournaments. The WNR
            year after year unites students of top law, economics and business
            schools from around the&nbsp;world.
          </p>
          <Link to="/participation" className="home__intro__text__btn">
              I WANT TO PARTICIPATE
          </Link>
        </div>
      </section>
    )
}