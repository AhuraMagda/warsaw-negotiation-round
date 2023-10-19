import * as React from "react"
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <header className="home-header">
        <div className="home-header__text">
          <p>
            Warsaw Negotiation Round 2024 is the 15th edition of one of the most
            prestigious international negotiation tournaments. The WNR year after
            year unites students of top law, economics and business schools from
            around the world.
          </p>
          <button>I WANT TO PARTICIPATE</button>
        </div>
        <div className="home-header__photo">
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="warsaw skyline"/>
        </div>
      </header>

      <main>
        <section className="counter">
          <Counter />
        </section>
  
        <section className="prev-editions">
          <Slider />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Layout {
    file(relativePath: { eq: "warszawa2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`