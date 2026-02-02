import "./TechSkills.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faPython,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faVuejs,
  faGitAlt,
  faDocker,
  faPhp,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTasks, faVial, faCogs } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  {
    key: "backend",
    iconItems: [
      { icon: faNodeJs, label: "Node.js" },
      { icon: faPython, label: "Python" },
      { icon: faJava, label: "Java" },
      { icon: faPhp, label: "PHP" },
      { icon: faDatabase, label: "SQL" },
    ],
  },
  {
    key: "frontend",
    iconItems: [
      { icon: faHtml5, label: "HTML5" },
      { icon: faCss3Alt, label: "CSS3" },
      { icon: faJs, label: "JavaScript" },
      { icon: faReact, label: "React" },
      { icon: faVuejs, label: "Vue.js" },
    ],
  },
  {
    key: "tools",
    iconItems: [
      { icon: faGitAlt, label: "Git" },
      { icon: faDocker, label: "Docker" },
      { icon: faFigma, label: "Figma" },
      { icon: faTasks, label: "Agile/Scrum" },
      { icon: faVial, label: "Testing" },
      { icon: faCogs, label: "CI/CD" },
    ],
  },
];

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">
        <h2>{t("technologies.title")}</h2>

        <div className="tech-grid">
          {technologies.map((category) => (
            <div key={category.key} className="tech-cell">
              <h3>{t(`technologies.categories.${category.key}`)}</h3>
              <div className="tech-icons">
                {category.iconItems.map((item, index) => (
                  <div key={index} className="tech-item">
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                    <span>{item.label}</span>
                  </div>
                ))}

                {/* Custom addition for TypeScript (does not exist in fontawesome) */}
                {category.key === "frontend" && (
                  <div className="tech-item">
                    {/* Shadow wrapper */}
                    <div className="custom-icon-shadow">
                      {/* Masked icon */}
                      <div className="custom-icon-wrapper" />
                    </div>
                    <span>TypeScript</span>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
