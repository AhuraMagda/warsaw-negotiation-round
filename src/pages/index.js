import * as React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import landscape from "./images/warszawa.png"
import "./scss/main.css";

export default function App() {
  return (
    <>
    <NavBar />
    <header class="home-header">
          <div class="home-header__text">
            <p>
              Warsaw Negotiation Round 2024 is the 15th edition of one of the most
              prestigious international negotiation tournaments. The WNR year after
              year unites students of top law, economics and business schools from
              around the world.
            </p>
            <button>I WANT TO PARTICIPATE</button>
          </div>
          <div class="home-header__photo">
              <img src={landscape} alt=""/>
          </div>
        </header>

      <main>
        <section class="counter">
          <div class="counter__container">
            TOURNAMENT IN... 111 days 11 hours 11 minutes
          </div>
        </section>
  
        <section class="findmore">
          <div class="findmore__photo">
            -------PHOTOS-------
          </div>
          <div class="findmore__buttons">
            <button>ABOUT US </button>
            <button>PARTICIPATION </button>
            <button>GALLERY </button>
            <button>CONTACT</button>
          </div>
  
        </section>
      </main>
    <Footer />
    </>
  )
}
