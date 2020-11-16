import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import SEO from "../components/seo";

require('typeface-open-sans');
require('typeface-raleway');




export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <Header />
      {children}
      <Footer />

    </div>
  )
}