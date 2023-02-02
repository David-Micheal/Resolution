import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import Mehn from "./Assets/Ui.webp";

const Courses: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <Utiva>
            Courses available in Utiva
            <br />
            Design School Africa
          </Utiva>
          <Course>
            Utiva offers a wide variety of programs and courses led by leading
            industry experts.
          </Course>
        </First>
        <Second>
          <Wrapper2>
            <Ui>
              <One>
                <Lu>For Starters</Lu>
              </One>
              <Two>Become a UI/UX Designer</Two>
              <Three>
                This design learning program is taught by tech leaders and
                created as project-based learning to help you develop the skills
                to create user experiences for products or digital properties.
              </Three>
              <Four>
                <Hr>
                  <AiOutlineClockCircle />
                </Hr>{" "}
                6 weeks
              </Four>
              <Five>
                <Em>Next class starts:</Em>
                <Bl>November 5, 2022</Bl>
              </Five>
              <Six>
                <Button>
                  Learn More{" "}
                  <Me>
                    <FiArrowRight />
                  </Me>
                </Button>
              </Six>
            </Ui>
            <Ux>
              <The src={Mehn} />
            </Ux>
          </Wrapper2>
        </Second>
      </Wrapper>
    </Container>
  );
};

export default Courses;

const Container = styled.div`
  width: 100%;
  height: 980px;
  background-color: #f9f9f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 93%;
  height: 90%;
  background-color: #f9f9f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const First = styled.div`
  width: 100%;
  /* background-color: chocolate; */
  display: flex;
  flex-direction: column;
`;
const Utiva = styled.h1`
  font-size: 65px;
  font-weight: bold;
  color: #050794;
`;
const Course = styled.div`
  font-size: 25px;
`;

const Second = styled.div`
  height: 550px;
  width: 100%;
  /* background-color: deeppink; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper2 = styled.div`
  width: 95%;
  height: 95%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;
const Ui = styled.div`
  width: 55%;
  height: 90%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  margin-left: 50px;
  margin-top: 30px;
`;

const One = styled.div`
  height: 40px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
`;
const Lu = styled.div`
  height: 30px;
  width: 100px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #050794;
`;
const Two = styled.div`
  height: 65px;
  /* background-color: lightgoldenrodyellow; */
  font-size: 34px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Three = styled.div`
  height: 150px;
  /* background-color: deepskyblue; */
  font-size: 23px;
`;
const Four = styled.div`
  height: 46px;
  width: 130px;
  /* background-color: red; */
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hr = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
const Five = styled.div`
  height: 40px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const Em = styled.div`
  font-size: 20px;
  color: #050794;
`;
const Bl = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #050794;
  margin-left: 3px;
`;
const Six = styled.div`
  height: 90px;
  /* background-color: green; */
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 13px;
  border: none;
  background-color: #fbaf1b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: white;
  box-shadow: #fbaf1b 0px 7px 29px 0px;
  cursor: pointer;
`;
const Me = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 30px;
  margin-left: 6px;
  color: white;
`;
const Ux = styled.div`
  width: 43%;
  height: 100%;
  /* background-color: beige; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const The = styled.img`
  width: 90%;
  height: 90%;
  background-color: black;
  border-radius: 25px;
  object-fit: cover;
`;
