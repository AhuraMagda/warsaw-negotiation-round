import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "./components/Slider";

export default function Gallery({ data }) {
  const [isBigImg, setIsBigImg] = React.useState(false);
  const [activeImgIndex, setActiveImgIndex] = React.useState(0);

  const showImg = (index) => {
    setActiveImgIndex(index);
    setIsBigImg(true);
    console.log(index)
  };

  const hideImg = () => {
    setIsBigImg(false);
  };

  const allPhotos = data.gallery.edges.map((image, index) => (
    <div
      onClick={() => {
        showImg(index);
      }}
      className="gallery__card"
      key={image.node.id}
    >
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt="students"
      />
    </div>
  ));

  const allPhotosArrOfObj = data.gallery.edges.map(((image, index) => (
    {id: index, image: image.node.childImageSharp.gatsbyImageData}
  )))

  console.log(allPhotosArrOfObj)

  return (
    <Layout>
      <ComponentHeader>GALLERY</ComponentHeader>
      <main>
        <section className="gallery">

          


          {allPhotos.slice(0, 4)}

          {isBigImg && (
            <div
              onClick={() => {
                hideImg();
              }}
              className="gallery__big-img"
            >
              <Slider slideData={allPhotosArrOfObj} imgProp={"image"} activeImgIndex={activeImgIndex}/>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}

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
