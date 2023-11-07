import * as React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Counter from "../components/Counter";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { prevEditionsData } from "../../data/data";

export default function Home({ data }) {
  const warsawSkylinePhoto = data.warsawSkyline.childImageSharp.gatsbyImageData;
  const homepageStudentsPhoto =
    data.homepageStudents.childImageSharp.gatsbyImageData;
  const logoLetters = data.logoLetters.childImageSharp.gatsbyImageData;

  return (
    //TODO divide components
    <Layout page="home">
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
          <GatsbyImage image={warsawSkylinePhoto} alt="Warsaw skyline" />
        </div>
      </header>

      <main>
        <section className="home__intro">
          <div className="home__intro__photo">
            <GatsbyImage image={homepageStudentsPhoto} alt="Working students" />
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

        <section className="home__counter">
          <Counter />
        </section>

        <section className="home__prev-editions">
          <div className="home__prev-editions__text">
            <h2>Previous Editions</h2>
            <p>
              The first edition of the project took place in 2010 and has
              continued uninterruptedly to the present day. This year marks the
              15th anniversary edition of the tournament. Go&nbsp;through the
              history of the project, and see all the universities that have won
              the WNR.
            </p>
          </div>
          <div className="home__prev-editions__winners">
            <div className="home__prev-editions__winners__img">
              <GatsbyImage image={logoLetters} />
            </div>

            <Slider
              slideData={prevEditionsData}
              h3Prop="year"
              pProp="description"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query Layout {
    warsawSkyline: file(relativePath: { eq: "homepage/warszawa2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    homepageStudents: file(
      relativePath: { eq: "homepage/homepage-students.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    logoLetters: file(relativePath: { eq: "homepage/logo-letters.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
