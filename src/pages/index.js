import * as React from "react"
import Layout from "./components/Layout";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <header class="home-header">
        <div class="home-header__text">
          <p>
            Warsaw Negotiation Round 2024 is the 15th edition of one of the most
            prestigious international negotiation tournaments. The WNR year after
            year unites students of top law, economics and business schools from
            around the world.
          </p>
          <button>I WANT TO PARTICIPATE</button>
        </div>
        <div class="home-header__photo">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
          {/* <img src="/images/warszawa.png" alt=""/> */}
        </div>
      </header>

      <main>
        <section class="counter">
          <div class="counter__container">
            TOURNAMENT IN... 111 days 11 hours 11 minutes
          </div>
        </section>
  
        <section class="findmore">
          <div class="findmore__photo">
            -------PHOTOS-------
          </div>
          <div class="findmore__buttons">
            <button>ABOUT US </button>
            <button>PARTICIPATION </button>
            <button>GALLERY </button>
            <button>CONTACT</button>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Layout {
    file(relativePath: { eq: "warszawa2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`