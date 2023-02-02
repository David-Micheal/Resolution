import React from "react";
import HeroComp from "./HeroComp";
import Courses from "./Courses";
import Skills from "./Skills";
import Views from "./Views";

const Body: React.FC = () => {
  return (
    <div>
      <Courses />
      <Views />
      <HeroComp />
      <Skills />
    </div>
  );
};

export default Body;
