import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../scss/main.css";


function Layout({ children }) {
  return (
    <div className="site-wrapper">
        <NavBar />
          <div className="content-wrapper">
            {children}
          </div>
        <Footer />
    </div>
  )
};

export default Layout;