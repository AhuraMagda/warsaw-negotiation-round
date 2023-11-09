import * as React from "react";
import Layout from "../components/Layout";
import HomeCounter from "../components/counter/HomeCounter";
import { graphql } from "gatsby";
import HomeHeader from "../components/homepage/HomeHeader";
import HomeIntro from "../components/homepage/HomeIntro";
import HomePrevEditions from "../components/homepage/HomePrevEditions";

export default function Home({ data }) {
  const homeHeaderImage = data.warsawSkyline.childImageSharp.gatsbyImageData;
  const homeIntroImage = data.homepageStudents.childImageSharp.gatsbyImageData;
  const homePrevEditionImage = data.logoLetters.childImageSharp.gatsbyImageData;

  return (
    //TODO divide components
    <Layout page="home">
      <HomeHeader backgroundImage={homeHeaderImage} />
      <main>
        <HomeIntro introImage={homeIntroImage} />
        <HomeCounter />
        <HomePrevEditions logo={homePrevEditionImage} />
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
