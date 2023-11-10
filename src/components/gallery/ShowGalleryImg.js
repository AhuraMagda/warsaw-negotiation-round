import React from "react";
import Slider from "../Slider";
import { handleEnter } from "../helpers/handleEnter";

export default function ShowGalleryImg({
  activeImgIndex,
  allPhotosData,
  hideImg,
}) {

  // TODO portrait image is cut when height is very low
  return (
    <div
      onClick={() => {
        hideImg();
      }}
      className="gallery__wrapper__big-img"
      tabIndex="0"
      onKeyDown={(event)=> handleEnter(event, hideImg)}
    >
      <div className="gallery__wrapper__big-img__slider-container">
        <Slider
          slideData={allPhotosData}
          imgProp={"image"}
          activeImgIndex={activeImgIndex}
        />
      </div>
    </div>
  );
}
