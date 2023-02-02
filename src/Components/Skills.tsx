import React from "react";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          Get Trained. Get Skills.
          <br />
          Get Hired.
        </One>
        <Two>
          <span>
            Accelerate Your Growth. Start Now. becoming it with Utiva.
          </span>
        </Two>
        <Three>
          <Payment>
            <First>Outright Payment</First>
            <Second>#80,000</Second>
          </Payment>
          <Pay>
            <Button>Pay Now(#80,000)</Button>
          </Pay>
        </Three>
        <Four>
          <Got>Got question?</Got>
          <Book>Book a call</Book>
        </Four>
      </Wrapper>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #f9f9f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 45%;
  height: 85%;
  /* background-color: crimson; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const One = styled.div`
  width: 60%;
  height: 120px;
  /* background-color: grey; */
  font-size: 40px;
  font-weight: bold;
  color: #050794;
  margin-bottom: 20px;
`;
const Two = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: darkblue; */
  font-size: 22px;
  display: flex;
  align-items: center;
  color: darkgray;
  margin-bottom: 20px;
`;
const Three = styled.div`
  width: 100%;
  height: 200px;
  background-color: #faf7ee;
  border: 3px solid #fbaf1b;
  display: flex;
  border-radius: 20px;
  margin-bottom: 10px;
`;
const Payment = styled.div`
  height: 100%;
  width: 50%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const First = styled.div`
  height: 50px;
  /* background-color: darkblue; */
  font-size: 26px;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;
const Second = styled.div`
  font-size: 50px;
  font-weight: bold;
  /* background-color: brown; */
  padding-left: 50px;
`;
const Pay = styled.div`
  height: 100%;
  width: 50%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  width: 200px;
  height: 60px;
  background-color: #fbaf1b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: #fbaf1b 0px 12px 28px 0px, #fbaf1b 0px 2px 4px 0px,
    #fbaf1b 0px 0px 0px 1px inset;
  cursor: pointer;
`;
const Four = styled.div`
  width: 380px;
  height: 40px;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
`;
const Got = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const Book = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: green;
  padding-left: 5px;
  cursor: pointer;
`;
