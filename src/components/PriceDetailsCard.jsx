import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 180px;

  h4 {
    color: var(--lavender-secondary);
    white-space: nowrap;
    font-size: 1rem;
  }
  p {
    margin-top: 0.5rem;
    white-space: nowrap;
    color: var(--purple-primary);
    font-weight: bold;
  }
`;

export const PriceDetailsCard = ({ title, price }) => {
  return (
    <Root>
      <h4>{title}</h4>
      <p>$ {price}</p>
    </Root>
  );
};
