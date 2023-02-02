import React from "react";
import styled from "styled-components";
import Imag from "./Assets/hduh.png";
import Imag2 from "./Assets/vuhgf.png";

const Views: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <First>You may also be interested in:</First>
        <Second>
          <Div1>
            <One src={Imag} />
            <Two>
              <Data>Data Incubator</Data>
              <The>
                The data Incubator program of the Data school is designed for
                very early professionals as an immersion program to help
                kick-start the journey of being a data analyst.
              </The>
              <View>View Course</View>
            </Two>
          </Div1>
          <Div2>
            <One1 src={Imag2} />
            <Two1>
              <Science>Data Science Fellowship</Science>
              <Fellow>
                This fellowship program is designed for Africans in the diaspora
                to master Data Science in 3 months and prepare them for jobs in
                Data Science Tools includes SQL. Excel. PowerBI & Python.
              </Fellow>
              <Course>View Course</Course>
            </Two1>
          </Div2>
        </Second>
      </Wrapper>
    </Container>
  );
};

export default Views;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f9f9f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 90%;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const First = styled.div`
  width: 550px;
  height: 45px;
  /* background-color: coral; */
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: darkgray;
  align-items: center;
`;
const Second = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: darkgray; */
  display: flex;
  justify-content: space-between;
`;
const Div1 = styled.div`
  width: 48%;
  height: 100%;
  background-color: #f9f9f8;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
const One = styled.img`
  width: 35%;
  height: 90%;
  /* background-color: black; */
  margin-left: 15px;
  border-radius: 20px;
  object-fit: fill;
  display: flex;
`;
const Two = styled.div`
  height: 80%;
  width: 57%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Data = styled.div`
  width: 250px;
  height: 45px;
  /* background-color: darkgoldenrod; */
  font-size: 25px;
  font-weight: bold;
  color: #050794;
  display: flex;
  align-items: center;
`;
const The = styled.div`
  width: 100%;
  height: 170px;
  /* background-color: darkgreen; */
  font-size: 22px;
  font-weight: 400;
  color: darkgray;
`;
const View = styled.button`
  width: 200px;
  height: 80px;
  background-color: #fbaf1b;
  border-radius: 20px;
  border: none;
  font-size: 22px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Div2 = styled.div`
  width: 48%;
  height: 100%;
  background-color: #f9f9f8;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
const One1 = styled.img`
  width: 35%;
  height: 90%;
  /* background-color: black; */
  margin-left: 15px;
  border-radius: 20px;
  object-fit: fill;
  display: flex;
`;
const Two1 = styled.div`
  height: 80%;
  width: 57%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Science = styled.div`
  width: 350px;
  height: 45px;
  /* background-color: darkgoldenrod; */
  font-size: 25px;
  font-weight: bold;
  color: #050794;
  display: flex;
  align-items: center;
`;
const Fellow = styled.div`
  width: 100%;
  height: 170px;
  /* background-color: darkgreen; */
  font-size: 22px;
  font-weight: 400;
  color: darkgray;
`;
const Course = styled.div`
  width: 200px;
  height: 80px;
  background-color: #fbaf1b;
  border-radius: 20px;
  border: none;
  font-size: 22px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
