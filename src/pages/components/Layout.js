import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../scss/main.scss";


function Layout({ children }) {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
};

export default Layout;