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
    console.log(index);
  };

  const hideImg = () => {
    setIsBigImg(false);
  };

  const allPhotosData = data.gallery.edges.map((image, index) => ({
    id: index,
    image: image.node.childImageSharp.gatsbyImageData,
    key: image.node.id,
  }));

  const allPhotosToDisplay = allPhotosData.map(({ id, image, key }) => (
    <div
      onClick={() => {
        showImg(id);
      }}
      className="gallery__card"
      key={key}
    >
      <GatsbyImage image={image} alt="students" />
    </div>
  ));

  return (
    <Layout>
      <ComponentHeader>GALLERY</ComponentHeader>
      <main>
        <section className="gallery">
          {allPhotosToDisplay.slice(0, 4)}

          {isBigImg && (
            <div
              onClick={() => {
                hideImg();
              }}
              className="gallery__big-img"
            >
              <Slider
                slideData={allPhotosData}
                imgProp={"image"}
                activeImgIndex={activeImgIndex}
              />
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
