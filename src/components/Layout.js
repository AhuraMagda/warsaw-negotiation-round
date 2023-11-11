import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import "../scss/main-scss/main.css";

function Layout({ children }) {
  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Warsaw Negotiation Round</title>
      <meta name="description" content="WNR is one of the most prestigious international negotiation tournaments." />
      </Helmet>
      <div className="site-wrapper">
        <NavBar />
        <div className={`content-wrapper`}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
