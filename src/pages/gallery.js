import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";



function Gallery({ data }) {

  return (
    <Layout>
        <ComponentHeader>GALLERY</ComponentHeader>
        <main>
            <section className="gallery">
                {data.gallery.edges.map(image => (
                  <div className="gallery__card" key={image.node.id}>
                    <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="students"/>
                  </div>
                ))}
            </section>
        </main>
    </Layout >

  )
};

export default Gallery;


export const pageQuery = graphql `
query {
  gallery: allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "gallery"}}
  ) {
    edges {
      node {
        id
        base
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`
