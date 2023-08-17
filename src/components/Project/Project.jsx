import PropTypes from "prop-types";
import extLink from "../../assets/images/external-link.png";
import github_dark from "../../assets/images/github_dark.png";

import "./Project.scss";

const Project = ({ project }) => {
  return (
    <div className="project-wrapper">
      <div className="project-image">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="project-data">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((el, index) => {
            return (
              <div className="image" key={index}>
                <img src={el} alt={el} />
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <a
            href={project.urlGithub}
            className="btn transparent"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github_dark} alt="external-link-image" />
            Code
          </a>
          <a
            href={project.urlDemo}
            className="btn color"
            target="_blank"
            rel="noreferrer"
          >
            <img src={extLink} alt="external-link-image" />
            &nbsp;{project.demoType == "web" ? "Live demo" : "Demo video"}
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    urlDemo: PropTypes.string,
    urlGithub: PropTypes.string,
    img: PropTypes.string,
    demoType: PropTypes.string,
  }),
};

export default Project;
