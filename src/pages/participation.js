import React from "react"
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import {participationData} from "../../data/prev-editions-data";

function Participation() {

    const [activeStep, setActiveStep] = React.useState(2);

    const changeStep = (step) => {
        setActiveStep(step)
    }

    const steps = [1, 2, 3, 4, 5];
    const stepsDesc = [
        "Gather a team of three, consisting of at least 2 people from the same university.", 
        'Prepare a CVs from each team member and cover letter.', 
        'Fill out the participation survey. Available in January, stay tuned.', 
        'Wait for the results. If the team is qualified book your flights and apply for a visa (if needed).', 
        'See you in Warsaw on April 19-21, 2024 during the final of the Warsaw Negotiation Round.'
    ];

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
        <header>
            <h1>PARTICIPATION steps</h1>
        </header>
        <main>
            <section className="participation">

                <div className="participation__steps">
                    {buttons}
                </div>
                <div className="participation__scenarios">
                    <p>
                        {stepsDesc[activeStep-1]}
                    </p>
                </div>

                <Slider slideData={participationData} h3Prop="step" pProp="description" />
            </section>

            
        </main>
    </Layout>
    )
};

export default Participation;
