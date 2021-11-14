import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
      <PrimaryButton name="Sign in" />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    flex: 1;
    li {
      a {
        margin: 0 1.5rem;
        padding: 1rem 2rem;
        display: block;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        line-height: 1rem;
        :hover {
          color: var(--dark-primary);
        }
      }
    }
  }
`;

const Logo = styled.div`
  margin: 0 2rem 0 0;
  flex: 0.2;
`;

export default Navbar;
