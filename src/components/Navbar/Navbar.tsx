import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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

