import React from "react";
import ProjectCard from "../components/project card/projectCard";
import tenzigame from "../assets/projectTenzieGame.jpg"

const Projects = () => {
  return (
    <div className="projects">
      <div className="intro-container">
      <h1>Projects</h1>
        <p className="showing">
          Actively updating my project list. Stay Tuned.
        </p>
      </div>
      {/* <ProjectCard
        img={
          "https://i.ytimg.com/vi/VRH3HA7N_8U/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc4osM51egvWIDSpWTy2Vzb4r_0A"
        }
        title={"The Easiest Javascript Game Ever"}
        description={"In this video I show you how I created the most basic, simple javascript game that you can make yourself. It's similar to the google dinosaur game that you play when there's no internet."}
        web={`https://youtu.be/bG2BmmYr9NQ`}
      ></ProjectCard> */}
      <ProjectCard
        img={tenzigame}
        title={"Tenzie Game"}
        description={
          <p>Everyone gets ten dice. Someone says, “Go.” Then everyone rolls and rolls as fast as they can until someone gets all their dice on the same number and shouts “TENZI.” Lots of different ways to play. A fun fast frenzy for the whole family!, <br/>
          More features on the way</p>
      }
        web={"https://mytenziegame.netlify.app"}
        web2={""}
      />
    </div>
  );
};
export default Projects;
