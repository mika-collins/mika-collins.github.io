import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const { t } = useTranslation();

  const handleResumeClick = () => {
    // Trigger resume download
    const link = document.createElement("a");
    link.href = "/Collins, Mika Resume.pdf";
    link.download = "Collins, Mika Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Profile orbit animation on left */}
        <div className="about-orbit">
          <ProfileOrbit />
        </div>

        { /* Text content on right */}
        <div className="about-content">
          <span className="about-label">
            {t("about.label")}
          </span>

          <h2>{t("about.title")}</h2>

          <p>{t("about.description")}</p>

          <p className="about-location">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="location-icon"
            />
            {t("about.location")}
          </p>

          {/* Primary (Contact) button */}
          <div className="about-actions">
            <button>{t("about.actions.primary")}</button>

            {/* Secondary (Resume) button */}
            <button onClick={handleResumeClick}>
              {t("about.actions.secondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
