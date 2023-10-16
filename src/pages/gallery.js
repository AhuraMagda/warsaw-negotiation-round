import React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function Gallery(props) {
  return (
    <>
        <NavBar />
        <header>
            <h1>GALLERY</h1>
        </header>
        <main>
            <section class="gallery">
                <div class="gallery__card">
                    <h2>VENUES</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div class="gallery__card">
                    <h2>PARTICIPANTS</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div class="gallery__card">
                    <h2>PARTNERS</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div class="gallery__card">
                    <h2>PREVIOUS EDITION</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
};

export default Gallery;