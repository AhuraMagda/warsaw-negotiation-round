import React from "react"
import Layout from "./components/Layout";

function Participation(props) {



    const changeDot = (event) => {
        const clickedButton = event.target
        clickedButton.classList.add("active-step")
    };

    const [buttons, setButtons] = React.useState([<button onClick={changeDot} className="participation__steps__button">1</button>,
    <button onClick={changeDot} className="participation__steps__button active-step">2</button>,
    <button onClick={changeDot} className="participation__steps__button">3</button>,
    <button onClick={changeDot} className="participation__steps__button">4</button>,
    <button onClick={changeDot} className="participation__steps__button">5</button>])


    return (
    <Layout>
        <header>
            <h1>PARTICIPATION</h1>
        </header>
        <main>
            <section className="participation">
                <div className="participation__steps">
                    {buttons}
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
