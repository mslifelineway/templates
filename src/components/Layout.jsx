import React from "react";
import { Footer } from ".";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ height: 97 }}></div>
      {children}
      <Footer />

      <div className="app__footer"></div>
    </>
  );
};

export default Layout;
