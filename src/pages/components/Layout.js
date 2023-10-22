import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../scss/main.css";


function Layout({ children }) {
  return (
    <>
        <NavBar />
          <div className="container">
            {children}
          </div>
        <Footer />
    </>
  )
};

export default Layout;