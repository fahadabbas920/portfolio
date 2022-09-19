import ProjectCard from "../components/project card/projectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="intro-container">
        <h1>Projects</h1>
        <p className="showing">
          Thank you for checking out the projects section, stay tuned I'll update project list soon.<br/>
          Here is an interesting video that might be fun for you.
        </p>
      </div>
      <ProjectCard
        img={
          "https://i.ytimg.com/vi/S00_zpe6Ft4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6mX_xHnIJjdQfRNs-4bPfSj1Ing"
        }
        title={"ASKING COLLEGE GIRLS QUESTIONS YOU’RE TOO AFRAID TO ASK"}
        description={"These are the most popular (and fiercest) head-to-head animal battles, featuring lions vs. hippos, mongoose vs. cobra, and many more."}
        web={"https://youtu.be/WrCrJY-2gOc"}
      ></ProjectCard>
      <ProjectCard
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
      ></ProjectCard>
      
    </div>
  );
};
export default Projects;
