import React from "react";
import { SectionPadding } from "../../styles/Layout";
import Navbar from "../Navbar";
import HeaderContent from "./HeaderContent";
import { HeaderStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <SectionPadding>
        <Navbar />
        <HeaderContent />
      </SectionPadding>
    </HeaderStyled>
  );
};

export default Header;
