import React from "react";
import { useState } from "react";
import Slider from "../Slider";
import { useMediaQuery } from "react-responsive";
import { participationData } from "../../data/data";
import { makeStepsButtons } from "./helpers/makeStepsButtons";
import { makeStepDescription } from "./helpers/makeStepsDescription";

export default function ParticipationSteps() {
  const isSmallScreen = useMediaQuery({ maxWidth: 799 });
  const isBigScreen = useMediaQuery({ minWidth: 800 });

  const [activeStep, setActiveStep] = useState(1);

  const changeStep = (step) => {
    setActiveStep(step);
  };

  const buttonsToDisplay = makeStepsButtons(changeStep, activeStep);
  const stepsDesc = makeStepDescription(participationData);

  return (
    <div className="participation__steps__container">
      {isSmallScreen && (
        <Slider
          slideData={participationData}
          h3Prop="step"
          pProp="description"
        />
      )}

      {isBigScreen && (
        <>
          <div className="participation__steps__container__buttons">{buttonsToDisplay}</div>
          <div className="participation__steps__container__description">
            <p>{stepsDesc[activeStep - 1]}</p>
          </div>
        </>
      )}
    </div>
  );
}
