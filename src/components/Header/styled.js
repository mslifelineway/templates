import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

const HeaderStyled = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-position-x: 100%;

  @media screen and (max-width: 1050px) {
    background-position-x: 50%;
  }

  @media screen and (max-width: 650px) {
    background-position-x: 36%;
  }

  @media screen and (max-width: 499px) {
    background-position-x: 25%;
  }
`;

export { HeaderStyled };
