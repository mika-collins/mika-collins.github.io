import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faSatellite, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Carousel from "../Visuals/Carousel/Carousel";

const Experience = () => {
    const { t } = useTranslation();

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">{t("experience.title")}</h2>
      <div className="experience-container">
        {/* Education */}
        <div className="bento-card education">
          <div className="section-header">
            <FontAwesomeIcon icon={faUserAstronaut} className="section-icon" />
            <h3>{t("experience.education.label")}</h3>
          </div>

          <h4 className="card-title">{t("experience.education.degree")}</h4>
          <p className="mono-meta">{t("experience.education.university")}</p>
          <p className="card-description">{t("experience.education.minor")}</p>
          <p className="card-description">{t("experience.education.courseworkTitle")}</p>


          {/* Relevant Coursework */}
          <Carousel
            direction="left"
            items={[
              t("experience.education.coursework.0"),
              t("experience.education.coursework.1"),
              t("experience.education.coursework.2"),
            ]}
          />

          <Carousel
            direction="right"
            items={[
              t("experience.education.coursework.3"),
              t("experience.education.coursework.4"),
              t("experience.education.coursework.5"),
            ]}
          />
        </div>

        {/* Experience */}
        <div className="bento-card experience">
          <div className="section-header">
            <FontAwesomeIcon icon={faMeteor} className="section-icon" />
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
            <FontAwesomeIcon icon={faSatellite} className="section-icon" />
            <h3>{t("experience.societies.label")}</h3>
          </div>

          <div className="card-description">
            <div className="society-item">
              <span className="society-org">{t("experience.societies.list.0.org")}</span>
              <span className="society-role">{t("experience.societies.list.0.role")}</span>
            </div>
            <div className="society-item">
              <span className="society-org">{t("experience.societies.list.1.org")}</span>
              <span className="society-role">{t("experience.societies.list.1.role")}</span>
            </div>
            <div className="society-item">
              <span className="society-org">{t("experience.societies.list.2.org")}</span>
              <span className="society-role">{t("experience.societies.list.2.role")}</span>
            </div>
            <div className="society-item">
              <span className="society-org">{t("experience.societies.list.3.org")}</span>
              <span className="society-role">{t("experience.societies.list.3.role")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

