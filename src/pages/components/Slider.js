import React from "react";
import rightArrow from "../../images/icons/icon-slider-arrow-right.png";
import leftArrow from "../../images/icons/icon-slider-arrow-left.png";

const editions = [{
    name: "Edition 2020",
    description: "Nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma faaaaal nie ma"
},
{
    name: "Edition 2021",
    description: "Z małego miasta wielkie sny atakują twoje ulice... znowu jadę do ciebie saaaaam"
},
{
    name: "Edition 2022",
    description: "jestem wiiiiruuuuuuus więc wiruj ze mną ze świruj ze mną w i r u s"
}
];


function Slider() {


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
        <div className="home__prev-editions__slider">

                    <div className="home__prev-editions__slider__slide">
                        <h3>{editions[activeSlide].name}</h3>
                        <p>{editions[activeSlide].description}</p>
                    </div>

            <img onClick={()=>{changeSlide("left", editions)}} className="home__prev-editions__slider__arrow-left" src={leftArrow} />
            <img onClick={()=>{changeSlide("right", editions)}} className="home__prev-editions__slider__arrow-right" src={rightArrow} />
          </div>
    )
}

export default Slider;