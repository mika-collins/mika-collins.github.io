import "./ProfileOrbit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ProfileOrbit = () => {
  return (
    <div className="orbit-container">
      <div className="orbit-system">

        {/* Profile image */}
        <div className="orbit-center">
          <img src="/portrait.jpg" alt="Profile" />
        </div>

        {/* Rotating orbit radius */}
        <div className="icon-orbit">

          <a
            href="https://github.com/mika-collins"
            target="_blank"
            rel="noopener noreferrer"
            className="orbit-icon icon-top"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://linkedin.com/in/mika-collins"
            target="_blank"
            rel="noopener noreferrer"
            className="orbit-icon icon-right has-moon"
          >
            <FontAwesomeIcon icon={faLinkedin} />

            {/* Moon orbit */}
            <div className="moon-orbit">
              <span className="moon-dot" />
            </div>
          </a>

          <a
            href="mailto:mikapcollins@gmail.com"
            className="orbit-icon icon-left"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProfileOrbit;

