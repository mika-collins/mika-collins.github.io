import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Education */}
        <div className="bento-card education">
          <div className="section-header">
            <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
            <h3>{t("experience.education.label")}</h3>
          </div>

          <h4 className="card-title">{t("experience.education.degree")}</h4>
          <p className="mono-meta">{t("experience.education.university")}</p>
          <p className="card-description muted">{t("experience.education.minor")}</p>

          {/* Relevant Coursework */}
          <ul className="card-description">
            <li>{t("experience.education.coursework.0")}</li>
            <li>{t("experience.education.coursework.1")}</li>
            <li>{t("experience.education.coursework.2")}</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bento-card experience">
          <div className="section-header">
            <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
            <h3>{t("experience.work.label")}</h3>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <h4 className="timeline-title">{t("experience.work.positions.0.title")}</h4>
                <p className="timeline-meta">{t("experience.work.positions.0.company")}</p>
                <p className="card-description">
                  {t("experience.work.positions.0.description")}
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <h4 className="timeline-title">{t("experience.work.positions.1.title")}</h4>
                <p className="timeline-meta">{t("experience.work.positions.1.company")}</p>
                <p className="card-description">
                  {t("experience.work.positions.1.description")}
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <h4 className="timeline-title">{t("experience.work.positions.2.title")}</h4>
                <p className="timeline-meta">{t("experience.work.positions.2.company")}</p>
                <p className="card-description">
                  {t("experience.work.positions.2.description")}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Societies */}
        <div className="bento-card societies">
          <div className="section-header">
            <FontAwesomeIcon icon={faUsers} className="section-icon" />
            <h3>{t("experience.societies.label")}</h3>
          </div>

          <ul className="card-description">
            <li>
              {t("experience.societies.list.0.org")}
              {t("experience.societies.list.0.role")}
            </li>
            <li>
              {t("experience.societies.list.1.org")}
              {t("experience.societies.list.1.role")}
            </li>
            <li>
              {t("experience.societies.list.2.org")}
              {t("experience.societies.list.2.role")}
            </li>
            <li>
              {t("experience.societies.list.3.org")}
              {t("experience.societies.list.3.role")}
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;

