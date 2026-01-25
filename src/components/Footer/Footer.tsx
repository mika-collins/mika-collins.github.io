import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../../analytics";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          {t("footer.copyright", { year })}
        </p>

        <div className="footer-icons">
          {/* GitHub */}
          <a
            href="https://github.com/mika-collins"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("Social", "Click", "Footer GitHub")
            }
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mika-collins"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("Social", "Click", "Footer LinkedIn")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* Email */}
          <a
            href="mailto:mikapcollins@gmail.com"
            aria-label="Email"
            onClick={() =>
              trackEvent("Contact", "Click", "Footer Email")
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
