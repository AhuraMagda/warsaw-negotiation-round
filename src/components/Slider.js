import React from "react";
import { useState, useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import leftArrow from "../images/icons/icon-slider-arrow-left.png";
import rightArrow from "../images/icons/icon-slider-arrow-right.png";
import "../scss/slider-scss/slider.css";
import { handleEnter } from "./helpers/handleEnter";

export default function Slider({
  slideData,
  h3Prop,
  pProp,
  imgProp,
  activeImgIndex,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

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

  const [isInterval, setIsInterval] = useState(true);

  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isInterval) {
      intervalIdRef.current = setInterval(() => {
        changeSlide("right", slideData);
      }, 2500);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [isInterval, activeSlide]);

  const deleteInterval = () => {
    clearInterval(intervalIdRef.current);
    setIsInterval(false);
  };

  useEffect(() => {
    setActiveSlide(activeImgIndex ? activeImgIndex : 0);
  }, [activeImgIndex]);

  return (
    slideData && (
      <div className="slider">
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

          {pProp && (
            <p className="slider__slide__p">{slideData[activeSlide][pProp]}</p>
          )}

          <img
            onClick={(event) => {
              deleteInterval();
              changeSlide("left", slideData);
              event.stopPropagation();
            }}
            className="slider__slide__arrow-left"
            src={leftArrow}
            alt="arrow icon"
            tabIndex="0"
            onKeyDown={(event) =>
              handleEnter(event, changeSlide("left", slideData))
            }
          />
          <img
            onClick={(event) => {
              deleteInterval();
              changeSlide("right", slideData);
              event.stopPropagation();
            }}
            className="slider__slide__arrow-right"
            src={rightArrow}
            alt="arrow icon"
            tabIndex="0"
            onKeyDown={(event) =>
              handleEnter(event, changeSlide("right", slideData))
            }
          />
        </div>
      </div>
    )
  );
}
