import React from "react"
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import { participationData } from "../../data/data";
import { useMediaQuery } from 'react-responsive';
import ComponentHeader from "./components/ComponentHeader";

function Participation() {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })
    const isMediumScreen = useMediaQuery({ minWidth: 768})

    const steps = [1, 2, 3, 4, 5];

    const stepsDesc = participationData.map(step => step.description)

    const [activeStep, setActiveStep] = React.useState(1);
    const changeStep = (step) => {
        setActiveStep(step)
    }

    const buttons = steps.map(step => {
        return <button
            key={step}
            onClick={() => changeStep(step)}
            className={`participation__steps__button ${activeStep === step ? "active-step__button" : ""}`}
            >
            {step}
        </button>
    })

    return (
    <Layout>
        <ComponentHeader>HOW TO PARTICIPATE</ComponentHeader>
        <main>
            <section className="participation">
                { isSmallScreen && 
                    <Slider slideData={participationData} h3Prop="step" pProp="description" />
                }

                {isMediumScreen && 
                <>
                <div className="participation__steps">
                    {buttons}
                </div>
                <div className="participation__scenarios">
                    <p>
                        {stepsDesc[activeStep-1]}
                    </p>
                </div>
                </>}

                
            </section>

            
        </main>
    </Layout>
    )
};

export default Participation;
