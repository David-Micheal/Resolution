import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import img from "./Assets/Logo2.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={img} />

        <Nav>
          <Span>
            <span>school</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
          <Span>
            <span>enterprice</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
          <Span>
            <span>company</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
        </Nav>
        <Button_wrapper>
          <Button2>Get Started</Button2>
          <Button>login</Button>
        </Button_wrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  /* background-color: rgb(250, 250, 241); */
  /* background-color: aqua; */
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 95px;
  background-color: #f9f9f8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Logo = styled.img`
  object-fit: contain;
  cursor: pointer;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 25px;
`;
const Span = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  span {
    color: rgb(86, 86, 86);
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Nav = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button_wrapper = styled.div`
  display: flex;
  width: 23%;
  justify-content: space-between;
  /* background-color: cadetblue; */
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: blanchedalmond;
  border: 2px solid #050794;
  outline: none;
  font-size: 25px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  /* text-transform: capitalize; */
  background-color: transparent;
  color: rgb(86, 86, 86);
`;
const Button2 = styled.button`
  width: 200px;
  height: 60px;
  background-color: #fbaf1b;
  border: none;
  font-size: 25px;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
