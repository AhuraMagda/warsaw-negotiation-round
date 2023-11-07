import React from "react";

export const makeStepsButtons = (changeStep, activeStep) => {
    const steps = [1, 2, 3, 4, 5];
    return steps.map((step) => {
        return (
          <button
            key={step}
            onClick={() => changeStep(step)}
            className={` ${
              activeStep === step ? "active-step__button" : ""
            }`}
          >
            {step}
          </button>
        );
      });
}
