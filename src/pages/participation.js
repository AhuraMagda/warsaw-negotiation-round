import React from "react"
import Layout from "./components/Layout";

function Participation(props) {

    const [activeStep, setActiveStep] = React.useState(2);

    const changeStep = (step) => {
        setActiveStep(step)
    }

    const steps = [1, 2, 3, 4, 5]

    // const buttons = [<button onClick={changeDot} className="participation__steps__button">1</button>,
    // <button onClick={changeDot} className="participation__steps__button active-step">2</button>,
    // <button onClick={changeDot} className="participation__steps__button">3</button>,
    // <button onClick={changeDot} className="participation__steps__button">4</button>,
    // <button onClick={changeDot} className="participation__steps__button">5</button>]
    
    // function changeDot(event) {
    //     buttons.forEach(button => button.classList.remove("active-step"))
    //     const clickedButton = event.target
    //     clickedButton.classList.add("active-step")
    // };

    return (
    <Layout>
        <header>
            <h1>PARTICIPATION</h1>
        </header>
        <main>
            <section className="participation">
                <div className="participation__steps">
                    {steps.map(step => {
                        return <button
                            key={step}
                            onClick={() => changeStep(step)}
                            className={`participation__steps__button ${activeStep === step ? "active-step" : ""}`}
                            >
                            {step}
                        </button>
                    })}
                </div>
                <div className="participation__scenarios">
                    <p>coś tutaj</p>
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
