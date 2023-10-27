import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../scss/main.css";


function Layout({ children, page }) {
  return (
    <div className="site-wrapper">
        <NavBar />
          <div className={`content-wrapper ${page}`}>
            {children}
          </div>
        <Footer />
    </div>
  )
};

export default Layout;