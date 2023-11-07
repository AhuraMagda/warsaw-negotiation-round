import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import { graphql } from "gatsby";
import Slider from "./components/Slider";
import { makePhotosArray } from "./helpers/gallery-helpers/makePhotosArr";
import { makeArrOfObj } from "./helpers/gallery-helpers/makeArrOfObj";

export default function Gallery({ data }) {
  const [isBigImg, setIsBigImg] = React.useState(false);
  const [activeImgIndex, setActiveImgIndex] = React.useState(0);

  const showImg = (index) => {
    setActiveImgIndex(index);
    setIsBigImg(true);
  };

  const hideImg = () => {
    setIsBigImg(false);
  };

  const allPhotosData = makeArrOfObj(data);

  const allPhotosToDisplay = makePhotosArray(allPhotosData, showImg);

  return (
    <Layout>
      <ComponentHeader>GALLERY</ComponentHeader>
      <main>
        <section className="gallery">
          {allPhotosToDisplay}

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
