import React from "react"
import Layout from "./components/Layout";

function Participation(props) {

    const [activeStep, setActiveStep] = React.useState(2);

    const changeStep = (step) => {
        setActiveStep(step)
    }

    const steps = [1, 2, 3, 4, 5];
    const stepsDesc = ["aaa", 'bbb', 'ccc', 'ddd', 'eee'];


    return (
    <Layout>
        <header>
            <h1>PARTICIPATION steps</h1>
        </header>
        <main>
            <section className="participation">
                <div className="participation__steps">
                    {steps.map(step => {
                        return <button
                            key={step}
                            onClick={() => changeStep(step)}
                            className={`participation__steps__button ${activeStep === step ? "active-step__button" : ""}`}
                            >
                            {step}
                        </button>
                    })}

                </div>
                <div className="participation__scenarios">
                    <p>
                        {stepsDesc[activeStep-1]}
                    </p>
                </div>
                <div className="participation__image">
                    -----IMG-------
                </div>
            </section>
        </main>
    </Layout>
    )
};

export default Participation;
