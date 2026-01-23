import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type Project = {
  title: string;
  timeframe: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  sourceLabel: string;
  disabled: boolean;
};

const INITIAL_VISIBLE = 3; // Default 3 visible projects

const Projects = () => {
  const { t } = useTranslation();

  // Get projects from i18n
  const projects = t("projects.list", {
    returnObjects: true,
  }) as Project[];

  // Control how many projects are visible
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const isExpanded = visibleCount >= projects.length;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {projects.slice(0, visibleCount).map((project, index) => (
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

            {/* GitHub / Source button */}
            {project.disabled ? (
              <button className="github-button disabled" disabled>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>{t(project.sourceLabel)}</span>
              </button>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>{t(project.sourceLabel)}</span>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* View More / View Less */}
      {projects.length > INITIAL_VISIBLE && (
        <div className="projects-view-more">
          <button
            className="view-more-button"
            onClick={() =>
              setVisibleCount(
                isExpanded ? INITIAL_VISIBLE : projects.length
              )
            }
          >
            {isExpanded
              ? "View Less"
              : `View More (${projects.length - visibleCount})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;






