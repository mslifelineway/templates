import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "..";
import { Navbar } from "../../components";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <AboutUs /> */}
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Landing;
