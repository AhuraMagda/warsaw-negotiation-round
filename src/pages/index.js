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
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="warsaw skyline"/>
        </div>
      </header>

      <main>
        <section class="counter">
          <div class="counter__container">
            TOURNAMENT IN... 111 days 11 hours 11 minutes
          </div>
        </section>
  
        <section class="prev-editions">
          <div class="prev-editions__slider">
            <div className="prev-editions__slider__slide">
                <h3>Edition 2021</h3>
                <p>Nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma faaaaal nie ma</p>
            </div>
            <img className="prev-editions__slider__arrow-left" src="./icons/icon-slider-arrow-left.png" />
            <img className="prev-editions__slider__arrow-right" src="./icons/icon-slider-arrow-right.png" />
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`