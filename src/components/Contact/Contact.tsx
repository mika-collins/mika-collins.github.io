import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const TYPING_SPEED = 50; 
const LINE_DELAY = 500; 

const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setDisplayedLines([]);
    setCurrentLine(0);
  };

  const confirmationLines = [
    `> ${t("contact.confirmation.sent")}`,
    `> ${t("contact.confirmation.thanks")}`,
  ];

  // Animation is complete when the current line index equals the total number of lines.
  const isTypingComplete = currentLine >= confirmationLines.length;

  useEffect(() => {
    if (!sent) return;
    if (isTypingComplete) return;

    let charIndex = 0;
    const line = confirmationLines[currentLine];
    // Initialize current line in state to avoid empty flash
    if (!displayedLines[currentLine]) {
        setDisplayedLines(prev => [...prev, ""]);
    }
    
    let typedLine = "";

    const typeInterval = setInterval(() => {
      typedLine += line[charIndex];
      setDisplayedLines(prev => {
        const newLines = [...prev];
        newLines[currentLine] = typedLine;
        return newLines;
      });
      charIndex++;
      
      if (charIndex >= line.length) {
        clearInterval(typeInterval);
        setTimeout(() => setCurrentLine(prev => prev + 1), LINE_DELAY);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typeInterval);
  }, [sent, currentLine, isTypingComplete]); 

  return (
    <section className="contact-section">
      <div className="terminal-container">
        <div className="terminal-screen">
          {!sent ? (
            <>
              <div className="terminal-header">
                {t("contact.header")}
              </div>

              <form className="terminal-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>{t("contact.fields.name.label")}</label>
                  <input
                    type="text"
                    className="terminal-input"
                    placeholder={t("contact.fields.name.placeholder")}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>{t("contact.fields.email.label")}</label>
                  <input
                    type="email"
                    className="terminal-input"
                    placeholder={t("contact.fields.email.placeholder")}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>{t("contact.fields.message.label")}</label>
                  <textarea
                    rows={4}
                    className="terminal-input"
                    placeholder={t("contact.fields.message.placeholder")}
                    required
                  />
                </div>

                <button type="submit" className="terminal-btn">
                  {t("contact.submit")}
                </button>
              </form>
            </>
          ) : (
            <div className="terminal-confirmation">
              {displayedLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              
              {/* Render cursor when typing is complete */}
              {isTypingComplete && (
                <span className="blinking-cursor">_</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;


