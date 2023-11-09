import * as React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Counter from "../components/counter/Counter";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { prevEditionsData } from "../../data/data";
import HomeHeader from "../components/homepage/HomeHeader";
import HomeIntro from "../components/homepage/HomeIntro";

export default function Home({ data }) {   
  const homepageStudentsPhoto =
    data.homepageStudents.childImageSharp.gatsbyImageData;
  const logoLetters = data.logoLetters.childImageSharp.gatsbyImageData;
  const warsawSkylinePhoto = data.warsawSkyline.childImageSharp.gatsbyImageData;

  return (
    //TODO divide components
    <Layout page="home">
      <HomeHeader backgroundImage={warsawSkylinePhoto}/>

      <main>
        <HomeIntro introImage={homepageStudentsPhoto}/>

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
