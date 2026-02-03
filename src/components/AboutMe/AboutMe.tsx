import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { trackEvent } from "../../analytics";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleResumeClick = () => {
    trackEvent("Resume", "Download", "About Resume Button");

    // Determine file based on current language
    const isSpanish = i18n.language === "es";
    const fileName = isSpanish
      ? "Collins, Mika Resume.pdf" // Update with spanish version when added
      : "Collins, Mika Resume.pdf";

    const link = document.createElement("a");
    link.href = `/${fileName}`; 
    link.download = fileName; 
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

          {/* About section eyebrow */}
          <span className="about-label">
            {t("about.label")}
          </span>

          {/* Name title */}
          <h2>{t("about.title")}</h2>

          {/* Description */}
          <p>{t("about.description")}</p>

          {/* Location icon and text */}
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
