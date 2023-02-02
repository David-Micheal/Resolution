import React from "react";
import styled from "styled-components";
import imag from "./Assets/laptop.png";
import imag2 from "./Assets/people.png";
import imag3 from "./Assets/box.png";
import imag4 from "./Assets/circle.png";

const HeroComp: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>How you will learn</Div1>
        <Div2>
          <One>
            <Num1 src={imag} />
            <Num2>Virtual Classes</Num2>
            <Num3>
              Join and colaborate with other
              <br />
              students in Instructor-led virtual
              <br />
              classes.
            </Num3>
          </One>
          <Two>
            <Life src={imag2} />
            <Case>Business Case-focused</Case>
            <Work>
              Work on real-life projects by applying what you learn to solve
              related business problems.
            </Work>
          </Two>
          <Tre>
            <Box src={imag3} />
            <Peer>Peer-To-Peer Sessions</Peer>
            <Share>
              Share knowledge with other fellows and gain multimensional
              perspectives of problem-solving.
            </Share>
          </Tre>
          <Four>
            <Circle src={imag4} />
            <Virtual>Virtual Project</Virtual>
            <Engage>
              Work on multiple projects to improve your knowledge and capacity
              by engaging and interacting with others.
            </Engage>
          </Four>
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default HeroComp;

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #f9f9f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  /* background-color: brown; */
`;
const Div1 = styled.div`
  height: 60px;
  width: 370px;
  /* background-color: beige; */
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Div2 = styled.div`
  height: 300px;
  width: 100%;
  /* background-color: darkblue; */
  display: flex;
  justify-content: space-between;
`;
const One = styled.div`
  height: 100%;
  width: 380px;
  /* background-color: chocolate; */
  display: flex;
  flex-direction: column;
`;
const Num1 = styled.img`
  width: 80px;
  height: 80px;
  /* background-color: gold; */
  margin-bottom: 20px;
  object-fit: cover;
`;
const Num2 = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: cyan; */
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Num3 = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: darkgreen; */
  font-size: 20px;
  color: grey;
  align-items: center;
`;

const Two = styled.div`
  height: 100%;
  width: 380px;
  /* background-color: chocolate; */
`;
const Life = styled.img`
  width: 85px;
  height: 80px;
  /* background-color: gold; */
  margin-bottom: 20px;
  object-fit: cover;
`;
const Case = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: cyan; */
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Work = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: darkgreen; */
  display: flex;
  align-items: center;
  font-size: 20px;
  color: grey;
`;

const Tre = styled.div`
  height: 100%;
  width: 380px;
  /* background-color: chocolate; */
`;
const Box = styled.img`
  width: 80px;
  height: 80px;
  /* background-color: gold; */
  margin-bottom: 20px;
  object-fit: cover;
`;
const Peer = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: cyan; */
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Share = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: darkgreen; */
  display: flex;
  align-items: center;
  font-size: 20px;
  color: grey;
`;
const Four = styled.div`
  height: 100%;
  width: 380px;
  /* background-color: chocolate; */
`;
const Circle = styled.img`
  width: 80px;
  height: 80px;
  /* background-color: gold; */
  margin-bottom: 20px;
  object-fit: cover;
`;
const Virtual = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: cyan; */
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Engage = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: darkgreen; */
  display: flex;
  align-items: center;
  font-size: 20px;
  color: grey;
`;
