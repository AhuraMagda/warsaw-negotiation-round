import React from "react"
import Layout from "./components/Layout";

function Gallery(props) {
  return (
    <Layout>
        <header>
            <h1>GALLERY</h1>
        </header>
        <main>
            <section className="gallery">
                <div className="gallery__card">
                    <h2>VENUES</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div className="gallery__card">
                    <h2>PARTICIPANTS</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div className="gallery__card">
                    <h2>PARTNERS</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
                <div className="gallery__card">
                    <h2>PREVIOUS EDITION</h2>
                    <img src="./random.jpg" alt=""/>
                </div>
            </section>
        </main>
    </Layout >

  )
};

export default Gallery;