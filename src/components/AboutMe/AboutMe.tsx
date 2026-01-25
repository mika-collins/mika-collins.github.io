import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { trackEvent } from "../../analytics";

const AboutMe = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleResumeClick = () => {
    trackEvent("Resume", "Download", "About Resume Button");

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
        <div className="about-orbit">
          <ProfileOrbit />
        </div>

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

          <div className="about-actions">
            {/* Contact */}
            <button
              onClick={() => {
                trackEvent("Contact", "Click", "About Contact Button");
                navigate("/contact");
              }}
            >
              {t("about.actions.primary")}
            </button>

            {/* Resume */}
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
