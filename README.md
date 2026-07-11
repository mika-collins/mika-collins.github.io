# 🚀 Personal Portfolio Website

This website serves as my own personal portfolio to showcase my experience, skills, and projects all in one place. It consists of interactive elements, multi-language support, and analytics tracking.

Check it out here: [https://mika-collins.github.io](https://mika-collins.github.io)

## 🛠️ Technologies Used:
- **React** - Component-based UI for building reusable elements
- **TypeScript** - Type-safe JavaScript
- **CSS** - Styling, animations, and responsive design
- **i18next** - Internationalization support (en/es)
- **Font Awesome & Simple Icons** - Icons for social links and features
- **Google Analytics 4 (GA4)** - Web analytics
- **EmailJS** - Handles contact form submissions directly via email
- **GitHub Pages** - Free hosting and deployment of site
- **GitHub Actions** - CI/CD pipeline that auto-deploys the site on every merge to `main`

## 💫 Features:
- Responsive design
- Social media links
- Terminal-style contact form
- Resume download
- Project gallery with source code links
- Analytics tracking
- Multi-language support (English/Spanish)

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

## Instructions for Development:
To make and view changes within the development environment:
```
npm run dev
````

### Workflow: feature branches and pull requests
New work happens on its own branch, not directly on `main`:
```
git checkout -b feat/feature-branch
# make changes
git add .
git commit -m "Message here"
git push -u origin feat/feature-branch
```
Then open a pull request into `main` on GitHub, review, and merge.

### Deployment
Deployment is automatic through a GitHub Actions workflow
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds the site
and publishes it to the `gh-pages` branch every time a commit lands on `main`
(every time a PR is merged).

If ever need to deploy manually must use the following commands from `main`:
```
npm run build
npm run deploy
```

### Disclosure

This site collects limited data to help improve content and allow users to contact me. It uses Google Analytics 4 (GA4), a web analytics service provided by Google, to collect aggregated, non-identifying usage data such as page views, interaction events (scrolls and button clicks), approximate location (city level), and time spent on pages. This data is used to understand site engagement and improve content design. The site also uses EmailJS to deliver messages submitted through the contact form. When a form is submitted, the user's name, email address, and message are transmitted to EmailJS servers solely to deliver the message. The site owner, myself, does not collect or store personally identifiable information from analytics data or contact form submissions.

#### Credits:

<sub>
    <b>Visual Components</b> - Two visual components (ProfileOrbit and Rocket) are derived from code originally created by JkHuger. The original code has been modified and integrated into this project.<br>
    <b>Icons</b> - TypeScript icon provided by  <a href="https://simpleicons.org">Simple Icons</a> and remaining icons provided by <a href="https://fontawesome.com/">Font Awesome</a>.<br>
    <b>Libraries</b> - Open-source libraries include 'React;, 'i18next', and others, as detailed in the Technologies section.<br>
    <b>AI Assistance</b> - Portions of the site design and development were assisted by AI to streamline coding and layout decisions.<br>
</sub>

