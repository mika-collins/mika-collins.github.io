import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const TYPING_SPEED = 50; 
const LINE_DELAY = 500; 

const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

   // If honeypot is filled, assume it's a bot
  if (formData.company) {
    console.warn("Bot detected - submission ignored");
    return;
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSent(true);
    setDisplayedLines([]);
    setCurrentLine(0);
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Failed to send message. Please try again.");
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
      <h2 className="section-title">{t("contact.title")}</h2>
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
                    name="name"
                    className="terminal-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.fields.name.placeholder")}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>{t("contact.fields.email.label")}</label>
                  <input
                    type="email"
                    name="email"
                    className="terminal-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.fields.email.placeholder")}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>{t("contact.fields.message.label")}</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="terminal-input"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.fields.message.placeholder")}
                    required
                  />
                </div>

                {/* Honeypot field for bots */}
                <input
                  type="text"
                  name="company"
                  value={formData.company || ""}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

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


