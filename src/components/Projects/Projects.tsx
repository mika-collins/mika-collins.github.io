import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  timeframe: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  sourceLabel: string;
};

const Projects = () => {
  const { t } = useTranslation();

  // Get the number of projects dynamically from i18next
  const projectsCount = t("projects.list", { returnObjects: true }) as Project[];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {projectsCount.map((project, index) => (
          <div className="bento-card project-card" key={index}>
            
            {/* Image */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            {/* Content */}
            <h4 className="card-title">{project.title}</h4>
            <p className="mono-meta">{project.timeframe}</p>
            <p className="card-description">{project.description}</p>

            {/* Tech stack */}
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>{t(project.sourceLabel)}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;





