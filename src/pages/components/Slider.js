import React from "react";
import rightArrow from "../../images/icons/icon-slider-arrow-right.png";
import leftArrow from "../../images/icons/icon-slider-arrow-left.png";


function Slider({ slideData, h3Prop, pProp }) {


const [activeSlide, setActiveSlide] = React.useState(0)

const changeSlide = (direction, array) => {
    if (direction === "left") {
        if (activeSlide > 0) {
            setActiveSlide(prevSide => prevSide - 1)
        } else {
            setActiveSlide(array.length-1)
        }
    } else if (direction === "right") {
        if (activeSlide < array.length-1) {
            setActiveSlide(prevSide => prevSide + 1)
        } else {
            setActiveSlide(0)
        }
    }
}

    return (
        <div className="slider">

                    <div className="slider__slide">
                        <h3 className="slider__slide__h3">{slideData[activeSlide][h3Prop]}</h3>
                        <p>{slideData[activeSlide][pProp]}</p>
                    </div>

            <img onClick={()=>{changeSlide("left", slideData)}} className="slider__arrow-left" src={leftArrow} />
            <img onClick={()=>{changeSlide("right", slideData)}} className="slider__arrow-right" src={rightArrow} />
          </div>
    )
}

export default Slider;