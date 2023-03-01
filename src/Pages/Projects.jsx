import React from "react";
import ProjectCard from "../components/project card/projectCard";
import tenziGame from "../assets/projectTenzieGame.jpg";
import notezApp from "../assets/projectNotezApp.jpg";
import aliBuild from "../assets/aliBuilders.jpg";
import menuClose from "../components/menuAutoClose";
import projImg from "../assets/7040859.jpg"
import weathApp from "../assets/weatherApp.JPG"
const Projects = () => {


  return (
    <div className="projects" id="projects" onClick={()=>menuClose()}>
      <div className="intro-container">
        <h1>Projects</h1>
        <img src={projImg} alt="proj-img" id="proj-img" />
        <p className="showing">
          Actively updating my project list. Stay Tuned. <i className="fa-solid fa-bullhorn"></i>
        </p>
      </div>
      <h4>Weather App</h4>
      <a href="https://fahadabbas920.github.io/weather-app/" target="_blank" rel="noreferrer">Live Demo</a>
      <ProjectCard
        img={weathApp}
        title={"Weather App"}
        description={
          <p>
            Weather app created using react and openWeather Api. You can search for a particular location or use your live location to get weather details. 
            Forecat and air pollution data is yet to be added in next update.
            <br/>
            Don't forget to turn on your device's Live Location. :{`p`}
          </p>
        }
        web={"https://alibuilders.netlify.app/"}
        // web2={""}
      />
      <h4>Ali Builders & Construction</h4>
      <a href="https://fahadabbas920.github.io/NotezApp/" target="_blank" rel="noreferrer">Live Demo</a>
      <ProjectCard
        img={aliBuild}
        title={"Ali Builders & Construction Co."}
        description={
          <p>
            Mockup Web Portfolio for Ali Builders & Contruction Company in Pakistan. 
          </p>
        }
        web={"https://alibuilders.netlify.app/"}
        // web2={""}
      />
      <h4>Notez: Notepad App</h4>
      <a href="https://fahadabbas920.github.io/Notez/" target="_blank" rel="noreferrer">Live Demo</a>
      <ProjectCard
        img={notezApp}
        title={"Notez : Notepad"}
        description={
          <p>This is a simple yet powerful notes app, created using react-mde, and showdown which converts basic text into html format for preview. It uses your browser local storage to save your notes.</p>
        }
        web={`https://fahadabbas920.github.io/Notez/`}
      ></ProjectCard>
      <h4>Tenzie Game</h4>
      <a href="https://mytenziegame.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
      <ProjectCard
        img={tenziGame}
        title={"Tenzie Game"}
        description={
          <p>
            Everyone gets ten dice. Someone says, “Go.” Then everyone rolls and
            rolls as fast as they can until someone gets all their dice on the
            same number and shouts “TENZI.” 
            {/* Lots of different ways to play. A
            fun fast frenzy for the whole family!. */}
          </p>
        }
        web={"https://mytenziegame.netlify.app"}
        // web2={""}
      />

    </div>
  );
};
export default Projects;
