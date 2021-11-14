import React from "react";
import styled from "styled-components";
import phone from "../../assets/images/phone.svg";
import ringOrange from "../../assets/images/ring_orange.svg";
import messagePink from "../../assets/images/message_pink.svg";
import messageBlue from "../../assets/images/message_blue.svg";
import Secondarybutton from "../SecondaryButton";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
const Content = styled.section`
  color: #fff;
  flex: 2;
  h1 {
    font-size: 2rem;
  }
  p {
    color: #fff;
    font-size: 1rem;
    margin: 1.5rem 0;
    width: 60%;
  }
`;

const Image = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const PhoneImg = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 4rem;
  padding-right: 2rem;
`;

const MessageImg = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
`;

const RingImg = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 3rem;
`;

const MessageBlue = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 4rem;
  margin-left: -5rem;
`;

const HeaderContent = () => {
  return (
    <Root>
      <Content>
        <h1>Smart banking for freelancers</h1>
        <p>
          Laborum ut incididunt ut duis nisi cillum consectetur ex culpa
          occaecat non dolor. Esse occaecat exercitation Lorem elit occaecat
          sint. Id deserunt incididunt ut esse deserunt consequat ullamco culpa
          consectetur.
        </p>
        <Secondarybutton name="Register now" />
      </Content>
      <Image>
        <PhoneImg src={phone} alt="phone" />
        <RingImg src={ringOrange} alt="ring" />
        <MessageImg src={messagePink} alt="message" />
        <MessageBlue src={messageBlue} alt="message" />
      </Image>
    </Root>
  );
};

export default HeaderContent;
