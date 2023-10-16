import React from "react"
import Layout from "./components/Layout";

function Participation(props) {
  return (
    <Layout>
        <header>
            <h1>PARTICIPATION</h1>
        </header>
        <main>
            <section class="participation">
                <div class="participation__steps">
                    <button class="participation__steps__button">1</button>
                    <button class="participation__steps__button active-step">2</button>
                    <button class="participation__steps__button">3</button>
                    <button class="participation__steps__button">4</button>
                    <button class="participation__steps__button">5</button>
                </div>
                <div class="participation__scenarios">
                    <p>coś tutaj</p>
                </div>
                <div class="participation__image">
                    -----IMG-------
                </div>
            </section>
        </main>
    </Layout>
  )
};

export default Participation;
