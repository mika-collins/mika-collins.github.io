import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          {t("site.name")}
        </div>

        <button className="navbar-translate" onClick={toggleLanguage}>
          [ {i18n.language.toUpperCase()} ] {t("common.translate")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

