import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./SectionNav.css";

// Section ids on the homepage, in page order
const SECTIONS = ["about", "technologies", "experience", "projects"];

const SectionNav = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(SECTIONS[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);

      // Active section is the last one whose top has passed 40% of the viewport
      const marker = window.innerHeight * 0.4;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) current = id;
      }

      if (scrollable > 0 && window.scrollY >= scrollable - 4) {
        current = SECTIONS[SECTIONS.length - 1];
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) => {
    if (id === SECTIONS[0]) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="section-nav" aria-label={t("sectionNav.label")}>
      {/* Track with a fill showing overall scroll progress */}
      <div className="section-nav-track">
        <div
          className="section-nav-progress"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>

      <ul className="section-nav-list">
        {SECTIONS.map((id) => (
          <li key={id}>
            <button
              type="button"
              className={`section-nav-item${active === id ? " active" : ""}`}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "true" : undefined}
              aria-label={t(`sectionNav.${id}`)}
            >
              <span className="section-nav-label" aria-hidden="true">
                {t(`sectionNav.${id}`)}
              </span>
              <span className="section-nav-dot" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNav;
