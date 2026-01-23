import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Profile image orbit on left */}
        <div className="about-orbit">
          <ProfileOrbit />
        </div>

        {/* Text content on right */}
        <div className="about-content">
          <span className="about-label">
            {t("about.label")}
          </span>

          <h2>{t("about.title")}</h2>

          <p>{t("about.description")}</p>
          <p className="about-location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            {t("about.location")}
          </p>

          <div className="about-actions">
            <button>{t("about.actions.primary")}</button>
            <button>{t("about.actions.secondary")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

