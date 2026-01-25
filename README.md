# Personal Portfolio Website

This website serves as my own personal portfolio to showcase my experience, skills, and projects all in one place. 

Check it out here: [https://mika-collins.github.io](https://mika-collins.github.io)

## Technologies Used:
- **React** - For building reusable components
- **TypeScript** - For type-safe JavaScript
- **CSS** - For styling, animations, and responsive design
- **i18next** - For multi-language support (en/es)
- **Font Awesome & Simple Icons** - For icons
- **Google Analytics 4 (GA4)** - For tracking user interactions 
- **EmailJS** - For handling contact form submissions directly to email
- **GitHub Pages** - For free hosting of the site

## Project Structure
```bash
src/
├── components/          # Page Sections
│   ├── AboutMe/
│   ├── Contact/
│   ├── Experience/
│   ├── Footer/
│   ├── Navbar/
│   ├── Projects/
│   ├── TechSkills/
│   └── Visuals/        # Animations and Visual Components
│       ├── Carousel/
│       ├── ProfileOrbit/
│       └── Rocket/
│
├── i18n/
│   ├── en.ts            # English Translations
│   ├── es.ts            # Spanish Translations
│   └── index.ts         
│
├── App.tsx              # Layout + Stacking Sections
├── index.css            # Global Styles
└── main.tsx             # Globals
```
## Analytics
- **GA4 Event Tracking**: Resume downloads and social media links are tracked with custom events to understand user behavior. 

## Credits
- **Visual Components** - Two visual components (ProfileOrbit and Rocket) are derived from code originally craeted by JkHuger. The original code has been modified and integrated into this project. 
- **Icons** - TypeScript icon provided by [Simple Icons](https://simpleicons.org) and remaining icons provided by [Font Awesome](https://fontawesome.com/)
- **Libraries** - Open-source libraries include `React`, `i18next`, and others, as detailed in the Technologies section.
- **AI Assistance** - Portions of the site design and development were assisted by AI to streamline coding and layout descisions. 