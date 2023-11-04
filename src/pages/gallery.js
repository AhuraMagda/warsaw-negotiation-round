import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function Gallery({ data }) {
  
  const [isBigImg, setIsBigImg] = React.useState(false)
  const [activeImg, setActiveImg] = React.useState("")

  const showImg = (image) => {
    console.log("clicked")
    setActiveImg(image)
    setIsBigImg(true)
  }

  const hideImg = () => {
    setIsBigImg(false)
  }
  
  return (
    <Layout>
      <ComponentHeader>GALLERY</ComponentHeader>
      <main>
        <section className="gallery">
          {data.gallery.edges.map((image) => (
            <div
              onClick={()=>{showImg(image.node.childImageSharp.gatsbyImageData)}} 
              className="gallery__card" key={image.node.id}
            >
              <GatsbyImage     
                image={image.node.childImageSharp.gatsbyImageData}
                alt="students"
              />
            </div>
          ))}
          {isBigImg && 
          <div 
            onClick={()=>{hideImg()}}
            className="gallery__big-img">
            <GatsbyImage
              
              image={activeImg}
              alt="students"
            />
          </div>
 }
        </section>
      </main>
    </Layout>
  );
}

export default Gallery;

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "gallery" }
      }
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
  }
`;
