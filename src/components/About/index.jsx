import React from "react";
import "./about.css";

const details = [
  {
    id: 0,
    title: "Backend Developer",
    description: `Backend development with high scalability, performance and security, more usability and flexibility.
    Technologies: Node Js, Express Js, MongoDb etc. Json web token (JWT) is used for the user authorization.
    I am good in organisizing data and desigining database to store the data.
    `,
  },
  {
    id: 1,
    title: "Frontend Developer",
    description: `Frontend development using modern technology such as React. 
    I follow the best folder structure so that code will be more re-usable, scalable and flexibile.
    I mainly focus on code quality and performance. Redux or redux toolkit, localstorage and cookies are used for the state management.

    `,
  },
  {
    id: 2,
    title: "Freelancer",
    description: `I am avaialable for 3-4 hours daily for freelancing work on MERN stack technology.
    I would like to join a team or running project on MERN stack technology. If you have a project and looking for a freelancer then 
    I can say that you are at right place. If you are interested in me then let's discuss further.`,
  },
];
const About = () => {
  return (
    <div className="about section__padding" id="about">
      {details.map((detail) => {
        return (
          <div
            className={`about__card about__card--gradient_${detail.id}`}
            key={`${detail.title}"_"${detail.id}`}
          >
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
