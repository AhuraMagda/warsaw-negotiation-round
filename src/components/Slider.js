import React from "react";
import rightArrow from "../images/icons/icon-slider-arrow-right.png";
import leftArrow from "../images/icons/icon-slider-arrow-left.png";
import { GatsbyImage } from "gatsby-plugin-image";
import "../scss/slider-scss/slider.css"

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
    slideData && (<div className="slider">

        <div className="slider__slide">
          {imgProp && (
            <GatsbyImage
              image={slideData[activeSlide][imgProp]}
              alt="students"
            />
          )}

          {h3Prop && (
            <h3 className="slider__slide__h3">
              {slideData[activeSlide][h3Prop]}
            </h3>
          )}

          {pProp && <p>{slideData[activeSlide][pProp]}</p>}

      <img
        onClick={(event) => {
          changeSlide("left", slideData);
          event.stopPropagation();
        }}
        className="slider__slide__arrow-left"
        src={leftArrow}
      />
      <img
        onClick={(event) => {
          changeSlide("right", slideData);
          event.stopPropagation();
        }}
        className="slider__slide__arrow-right"
        src={rightArrow}
      />
          </div>
    </div>)
  );
}

export default Slider;
