# 🚀 Personal Portfolio Website

This website serves as my own personal portfolio to showcase my experience, skills, and projects all in one place. It consists of interactive elements, multi-language support, and analytics tracking.

Check it out here: [https://mika-collins.github.io](https://mika-collins.github.io)

## 🛠️ Technologies Used:
- **React** - Component-based UI for building reusable elements
- **TypeScript** - Type-safe JavaScript
- **CSS** - Styling, animations, and responsive design
- **i18next** - Internationalization support (en/es)
- **Font Awesome & Simple Icons** - Icons for social links and features
- **Google Analytics 4 (GA4)** - Tracks user interactions and engagement
- **EmailJS** - Handles contact form submissions directly via email
- **GitHub Pages** - Free hosting and deployment of site

## 💫 Features:
- Responsive design
- Social links
- Terminal style contact form
- Resume download
- Project gallery with source code links
- Analytics tracking
- Multi-language support (en/es)

## 📂 Project Structure:
This project is structured to keep components modular and organized:

```bash
src/
├── components/             # Page Sections and UI elements
│   ├── StarBackground.tsx  
│   ├── AboutMe/
│   ├── Contact/
│   ├── Experience/
│   ├── Footer/
│   ├── Navbar/
│   ├── Projects/
│   ├── TechSkills/
│   └── Visuals/            # Animations and Visual Components
│       ├── Carousel/
│       ├── ProfileOrbit/
│       └── Rocket/
│
├── i18n/
│   ├── en.ts               # English Translations
│   ├── es.ts               # Spanish Translations
│   └── index.ts         
│
├── analytics.ts            # Google analytics setup
├── App.tsx                 # Layout + Stacking Sections
├── index.css               # Global Styles
└── main.tsx                # Entry point
```

## Credits:
- **Visual Components** - Two visual components (ProfileOrbit and Rocket) are derived from code originally created by JkHuger. The original code has been modified and integrated into this project. 
- **Icons** - TypeScript icon provided by [Simple Icons](https://simpleicons.org) and remaining icons provided by [Font Awesome](https://fontawesome.com/)
- **Libraries** - Open-source libraries include `React`, `i18next`, and others, as detailed in the Technologies section.
- **AI Assistance** - Portions of the site design and development were assisted by AI to streamline coding and layout decisions. 