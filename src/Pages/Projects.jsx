import React from "react";
import ProjectCard from "../components/project card/projectCard";
import tenziGame from "../assets/projectTenzieGame.jpg";
import notezApp from "../assets/projectNotezApp.jpg";
import aliBuild from "../assets/aliBuilders.jpg";
import menuClose from "../components/menuAutoClose";

const Projects = () => {


  return (
    <div className="projects" onClick={()=>menuClose()}>
      <div className="intro-container">
        <h1>Projects</h1>
        <p className="showing">
          Actively updating my project list. Stay Tuned. <i className="fa-solid fa-bullhorn"></i>
        </p>
      </div>
      <ProjectCard
        img={aliBuild}
        title={"Ali Builders & Construction Co."}
        description={
          <p>
            Web Portfolio for Ali Builders & Contruction Company.
          </p>
        }
        web={"https://alibuilders.netlify.app/"}
        // web2={""}
      />
      <ProjectCard
        img={notezApp}
        title={"Notez : Notepad"}
        description={
          <p>This is a simple yet powerful notes app, created using react-mde, and showdown which converts basic text into html format for preview. It uses your browser local storage to save your notes.</p>
        }
        web={`https://fahadabbas920.github.io/NotezApp/`}
      ></ProjectCard>

      <ProjectCard
        img={tenziGame}
        title={"Tenzie Game"}
        description={
          <p>
            Everyone gets ten dice. Someone says, “Go.” Then everyone rolls and
            rolls as fast as they can until someone gets all their dice on the
            same number and shouts “TENZI.” Lots of different ways to play. A
            fun fast frenzy for the whole family!.
          </p>
        }
        web={"https://mytenziegame.netlify.app"}
        // web2={""}
      />

    </div>
  );
};
export default Projects;
