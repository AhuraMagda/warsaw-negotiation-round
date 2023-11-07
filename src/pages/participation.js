import React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import { participationData } from "../../data/data";
import { useMediaQuery } from "react-responsive";
import ComponentHeader from "./components/ComponentHeader";
import { makeStepsButtons } from "./helpers/participation-helpers/makeStepsButtons";
import { makeStepDescription } from "./helpers/participation-helpers/makeStepsDescription";

function Participation() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  const [activeStep, setActiveStep] = React.useState(1);

  const changeStep = (step) => {
    setActiveStep(step);
  };

  const buttonsToDisplay = makeStepsButtons(changeStep, activeStep)
  const stepsDesc = makeStepDescription(participationData);

  return (
    <Layout>
      <ComponentHeader>HOW TO PARTICIPATE</ComponentHeader>
      <main>
        <section className="participation">
          {isSmallScreen && (
            <Slider
              slideData={participationData}
              h3Prop="step"
              pProp="description"
            />
          )}

          {isMediumScreen && (
            <>
              <div className="participation__steps">{buttonsToDisplay}</div>
              <div className="participation__scenarios">
                <p>{stepsDesc[activeStep - 1]}</p>
              </div>
            </>
          )}
        </section>
      </main>
    </Layout>
  );
}

export default Participation;
