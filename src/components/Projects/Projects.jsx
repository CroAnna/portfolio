import { projectList } from "../../Data/ProjectList";
import Project from "../Project/Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h3>Projects</h3>
      <h4>Every project represents a singular canvas of creation 🎨</h4>
      <div className="projects-inner">
        {projectList.map((el, index) => {
          return <Project key={index} project={el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
