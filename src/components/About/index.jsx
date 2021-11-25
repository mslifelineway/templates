import React from "react";
import "./about.css";

const About = () => {
  const RenderCard = () => {
    return (
      <div className="about__card about__card--gradient1">
        <h2>Backend Developer</h2>
        <p>
          Working as an associate bussiness analyst at Infosys and having the
          zeal to up-skill, being efficient & productive for the company.
        </p>
      </div>
    );
  };
  return (
    <div className="about section__padding" id="about">
      <RenderCard />
      <RenderCard />
      <RenderCard />
    </div>
  );
};

export default About;
