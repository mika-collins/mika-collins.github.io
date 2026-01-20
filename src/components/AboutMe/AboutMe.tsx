import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";
import { useTranslation } from "react-i18next";

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
          <h2>{t("about.title")}</h2>

          <p>{t("about.description")}</p>

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

