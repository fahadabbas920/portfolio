import ProjectCard from "../components/project card/projectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="intro-container">
        <h1>Projects</h1>
        <p className="showing">
          Thank you for checking out the projects section, Stay tuned I'll update project list soon.<br/>
          Below card is of a youtube video
        </p>
      </div>
      <ProjectCard
        img={
          "https://i.ytimg.com/an_webp/bG2BmmYr9NQ/mqdefault_6s.webp?du=3000&sqp=CJCVqJkG&rs=AOn4CLCaSMOZ6u-ysYWw7-jA07caM1vTkQ"
        }
        title={"The Easiest Javascript Game Ever"}
        description={"In this video I show you how I created the most basic, simple javascript game that you can make yourself. It's similar to the google dinosaur game that you play when there's no internet."}
        web={"https://youtu.be/bG2BmmYr9NQ"}
      ></ProjectCard>
      {/* <ProjectCard
        img={
          "https://i.ytimg.com/vi/tMhTUTss7v8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD99cc_Kvr9xEcqrIheyaRyPTdaQ"
        }
        title={"Random Yt video"}
        description=
        {"This is a random yt video thumbnail"}
        web={"https://www.google.com"}
      ></ProjectCard>
      <ProjectCard
        img={
          "https://i.ytimg.com/vi/tMhTUTss7v8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD99cc_Kvr9xEcqrIheyaRyPTdaQ"
        }
        title={"Random Yt video"}
        description=
        {<ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>}
        web={"https://www.google.com"}
      ></ProjectCard> */}
      
    </div>
  );
};
export default Projects;
