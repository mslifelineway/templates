import React from "react";
import styled from "styled-components";
import { PriceDetailsCard } from "./PriceDetailsCard";
import Secondarybutton from "./SecondaryButton";
import chartImg from "../assets/images/chart.svg";

const Root = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .spacer {
    flex: 1;
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 2rem;
`;

const LeftTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Right = styled.div`
  margin-left: 20rem;
  h1 {
    color: var(--purple-primary);
    font-weight: bold;
    font-size: 1.5rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1rem;
  }
`;

const ChartImage = styled.div`
  width: 100%;
  margin-top: 1.2rem;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ChartSection = () => {
  return (
    <Root>
      <Left>
        <LeftTop>
          <PriceDetailsCard title="Balance" price="5600" />
          <PriceDetailsCard title="Last Transaction" price="230" />
        </LeftTop>
        <ChartImage>
          <img src={chartImg} alt="chart" />
        </ChartImage>
      </Left>
      <Right>
        <h1>Manage your finance like a pro in no time</h1>
        <p>
          with Draft book keeping banking and invoices are all in one place. You
          will always know where you stand.
        </p>
        <Secondarybutton name="Learn more" />
      </Right>
    </Root>
  );
};

export default ChartSection;
