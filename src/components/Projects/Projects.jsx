import { projectList } from "../../Data/ProjectList";
import Project from "../Project/Project";
import "./Projects.scss";
import stars from "../../assets/images/stars.png";
import crown from "../../assets/images/crown.png";

const Projects = () => {
  return (
    <>
      <img className="crown" src={crown} alt="" />
      <div className="projects-wrapper">
        <img className="stars" src={stars} alt="" />
        <h3>Projects</h3>
        <h4>Every project represents a singular canvas of creation 🎨</h4>

        <div className="projects-inner">
          {projectList.map((el, index) => {
            return <Project key={index} project={el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
