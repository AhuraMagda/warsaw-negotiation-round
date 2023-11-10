import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { prevEditionsData } from "../../../data/data";
import Slider from "../Slider";

export default function HomePrevEditions({ logo }) {
  return (
    <section className="home__prev-editions">
      <div className="home__prev-editions__text">
        <h2>Previous Editions</h2>
        <p>
          The first edition of the project took place in 2010 and has continued
          uninterruptedly to the present day. This year marks the 15th
          anniversary edition of the tournament. Go&nbsp;through the history of
          the project, and see all the universities that have won the WNR.
        </p>
      </div>
      
      <div className="home__prev-editions__winners">
        <div className="home__prev-editions__winners__img">
          <GatsbyImage image={logo} alt="logo"/>
        </div>

        <Slider
          slideData={prevEditionsData}
          h3Prop="year"
          pProp="description"
        />
      </div>
    </section>
  );
}
