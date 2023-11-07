import React from "react";
import Layout from "../components/Layout";
import ComponentHeader from "../components/ComponentHeader";
import DisplayedPhotos from "../components/gallery/DisplayedPhotos";
import ShowGalleryImg from "../components/gallery/ShowGalleryImg";
import "../scss/gallery.css"
import { graphql } from "gatsby";
import { makeArrOfObj } from "../components/gallery/helpers/makeArrOfObj";


export default function Gallery({data}) {
  const [isBigImg, setIsBigImg] = React.useState(false);
  const allPhotosData = makeArrOfObj(data);

  const [activeImgIndex, setActiveImgIndex] = React.useState(0);

  const showImg = (index) => {
    setActiveImgIndex(index);
    setIsBigImg(true);
  };

  const hideImg = () => {
    setIsBigImg(false);
  };


  return (
    <Layout>
      <ComponentHeader>GALLERY</ComponentHeader>
      <main>
        <section className="gallery">
          <DisplayedPhotos showImg={showImg} allPhotosData={allPhotosData} />
{/* TODO nice images slider */}
          {isBigImg && (
            <ShowGalleryImg
              activeImgIndex={activeImgIndex}
              allPhotosData={allPhotosData}
              hideImg={hideImg}
            />
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