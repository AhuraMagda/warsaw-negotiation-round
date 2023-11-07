import React from "react";
import rightArrow from "../images/icons/icon-slider-arrow-right.png";
import leftArrow from "../images/icons/icon-slider-arrow-left.png";
import { GatsbyImage } from "gatsby-plugin-image";

function Slider({ slideData, h3Prop, pProp, imgProp, activeImgIndex }) {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const changeSlide = (direction, array) => {
    if (direction === "left") {
      if (activeSlide > 0) {
        setActiveSlide((prevSide) => prevSide - 1);
      } else {
        setActiveSlide(array.length - 1);
      }
    } else if (direction === "right") {
      if (activeSlide < array.length - 1) {
        setActiveSlide((prevSide) => prevSide + 1);
      } else {
        setActiveSlide(0);
      }
    }
  };

  React.useEffect(() => {
    setActiveSlide(activeImgIndex ? activeImgIndex : 0);
  }, [activeImgIndex]);

  return (
    <div className="slider">
      {slideData && (
        <div className="slider__slide">
          {imgProp && (
            <div className="slider__slide__img">
              <GatsbyImage
                image={slideData[activeSlide][imgProp]}
                alt="students"
              />
            </div>
          )}

          {h3Prop && (
            <h3 className="slider__slide__h3">
              {slideData[activeSlide][h3Prop]}
            </h3>
          )}

          {pProp && <p>{slideData[activeSlide][pProp]}</p>}
        </div>
      )}
      <img
        onClick={(event) => {
          changeSlide("left", slideData);
          event.stopPropagation();
        }}
        className="slider__arrow-left"
        src={leftArrow}
      />
      <img
        onClick={(event) => {
          changeSlide("right", slideData);
          event.stopPropagation();
        }}
        className="slider__arrow-right"
        src={rightArrow}
      />
    </div>
  );
}

export default Slider;
