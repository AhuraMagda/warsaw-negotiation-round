import React from "react";
import Slider from "../Slider";

export default function ShowGalleryImg({
  activeImgIndex,
  allPhotosData,
  hideImg,
}) {
  return (
    <div
      onClick={() => {
        hideImg();
      }}
      className="gallery__big-img"
    >
      <div className="gallery__big-img__slider-container">
        <Slider
          slideData={allPhotosData}
          imgProp={"image"}
          activeImgIndex={activeImgIndex}
        />
      </div>
    </div>
  );
}
