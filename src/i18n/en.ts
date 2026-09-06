// About Me section english translations
const en = {

    // Navbar content
  common: {
    translate: "",
  },
  site: {
    name: "Mika",
  },

  // About Me section 
  about: {
    label: "Mission Control",
    title: "Mika Collins",
    description: "I'm a Software Engineer with a love for tackling challenging problems, learning new technologies, and continuously pushing myself to grow as an engineer. I'm always open to connecting with others so feel free to reach out!",
    location: "North Carolina, USA",
    actions: {
      primary: "Contact Me",
      secondary: "Download Resume",
    },
    resumeToast: {
      message: "Oops! Looks like my resume is out of date. Please try again once I've updated it.",
    },
  },

  // Technologies section
  technologies: {
    title: "My Tech Stack",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      tools: "Tools & Concepts",
    },
  },

    // Experience section
    experience: {
      title: "Experience Log",

      // Education subsection
      education: {
        label: "Education",
        degree: "B.S. Software Engineering",
        university: "University of North Carolina Wilmington · 2026",
        minor: "Minors: Computer Science & Spanish",
        courseworkTitle: "Relevant Courses:",
        coursework: [
          "Data Structures & Algorithms",
          "Object Oriented Programming",
          "Database Design & Implementation",

          "Software Construction",
          "Client & Server Web Development",
          "Applied Software Security",
        ]
      },
      
      // Work Experience subsection
      work: {
        label: "Relevant Experience",
        positions: [
          {
            title: "Junior Software Engineer",
            company: "MetLife · Jun 2026-Present",
            description: "Building a more confident future!"
          },
          {
            title: "Software Engineering Fellowship",
            company: "Kittelson & Associates, Inc. · Feb 2026-May 2026",
            description: "Developed new modules and interface enhancements for Kittelson's wzKIT\u2122 platform, improving data-driven analysis of work zone safety and roadway planning."
          },
          {
            title: "Teaching Assistant",
            company: "UNCW Computer Science Department · Jan 2025-May 2026",
            description: "Assisted in Introduction to Computer Science and Data Structures & Algorithms courses by reviewing Python assignments, debugging student code, and designing tests to verify program accuracy."
          },
          {
            title: "Research Assistant",
            company: "UNCW Computer Science Department · Summer 2025",
            description: "Evaluated LLMs' ability to generate secure backend code, building benchmark datasets focused on SQL injection, XSS, and data exposure vulnerabilities."
          }
        ]
      },
      
      // Campus Involvement subsection
      societies: {
        label: "Honors and Societies",
        list: [
          { 
            org: "Outstanding Graduate of Software Engineering", 
            role: "Spring 2026" 
          },
          { 
            org: "Upsilon Pi Epsilon, International Honor Society for Computing and Information Disciplines", 
            role: "Member · Spring 2026" 
          },
          { 
            org: "Sigma Delta Pi, National Collegiate Hispanic Honor Society", 
            role: "Member· Spring 2025" 
          },
          { 
            org: "UNCW Software Engineering Advisory Board", 
            role: "Student Representative  · Jan 2025-May 2026" 
          },
        ]
      }
    },

    // Projects section
    projects: {
      title: "My Projects",
      viewLess: "View Less",
      viewMore: "View More ({{count}})",
      list: [
        {
          title: "Apache Grails Open Source Contributor",
          timeframe: "March 2026 - Present",
          description: "Contributed to the Apache Grails framework by resolving documentation publishing inconsistencies and improving build reliability for the official Grails user guide. Also contributed improvements to Grails' build tooling and CI workflow to improve code style reporting in GitHub Actions.",
          image: "/ApacheGrails/MergedPR.png",
          tech: ["Groovy", "Java", "Gradle", "Git", "GitHub Actions"],
          github: "https://github.com/apache/grails-core/pulls?q=is%3Apr+author%3Amika-collins",
          sourceLabel: "View Contributions",
          disabled: false
        },
        {
          title: "SFTB Enterprises Website",
          timeframe: "December 2025 - Present",
          description: "A modern website created for a local dumptrucking business based in Albemarle, NC. The site showcases the company's services, contact information, and featured projects through a responsive React-based interface.",
          image: "/SFTB/SFTBWebsite.png",
          tech: ["Javascript", "React", "Vite", "HTML/CSS", "Node.js", "GitHub Actions"],
          github: "https://github.com/mika-collins",
          sourceLabel: "Under Development",
          disabled: true
        },
        {
          title: "Portfolio Site",
          timeframe: "December 2025 - January 2026",
          description: "My responsive portfolio website to feature my skills, experience, and projects. Integrated with multi-language support and GA4 to track user engagement.",
          image: "/PersonalPortfolio/PersonalPortfolio.png",
          tech: ["TypeScript", "React", "HTML/CSS", "Node.js", "EmailJS", "GA4", "i18next"],
          github: "https://github.com/mika-collins/mika-collins.github.io",
          sourceLabel: "View Source Code",
          disabled: false
        },
        {
          title: "The Floor is Lava",
          timeframe: "August 2025 - December 2025",
          description: "A web application that visualizes real-time room occupancy by scanning WiFi signals via Raspberry Pis and displays the data as a dynamic heatmap.",
          image: "/Heatmap/HeatmapTutorial.png",
          tech: ["Python", "Javascript", "Vue.js", "HTML/CSS", "Node.js", "Raspberry Pi", "PostgreSQL", "Fly.io", "PlayWright"],
          github: "https://github.com/mika-collins/seng401-project-mawc",
          sourceLabel: "View Source Code",
          disabled: false
        },
        {
          title: "Internship Application Tracker",
          timeframe: "Summer 2025",
          description: "A Java-based application designed to help students track, organize, and manage their internship applications throughout college.",
          image: "/InternshipTracker/InternshipTracker.png",
          tech: ["Java", "Scenebuilder", "CSS", "JavaFX", "IntelliJ IDEA"],
          github: "https://github.com/mika-collins/Internship-Application-Tracker",
          sourceLabel: "View Source Code",
          disabled: false
        },
        {
          title: "Halloween Store Website",
          timeframe: "August 2025 - October 2025",
          description: "A mock website for a Halloween store built through a series of labs for a client-side web development course.",
          image: "/HalloweenStore/HalloweenStore.png",
          tech: ["HTML/CSS"],
          github: "https://github.com/mika-collins/SENG-365-Halloween-Website",
          sourceLabel: "View Source Code",
          disabled: false
        },
      ],
    },

    contact: {
      title: "Contact Me",
      header: "COMMUNICATION MODULE V.2.0 - STATUS: ONLINE",
      fields: {
        name: {
          label: "IDENTIFY_USER",
          placeholder: "enter_name...",
        },
        email: {
          label: "COMMUNICATION_CHANNEL",
          placeholder: "enter_email...",
        },
        message: {
          label: "TRANSMIT_MESSAGE",
          placeholder: "enter_message...",
        },
      }, 
      submit: "SEND_MESSAGE",

      confirmation: {
        sent: "TRANSMISSION STATUS: SENT",
        thanks: "THANK YOU FOR REACHING OUT! I WILL GET BACK TO YOU SOON.",
      }
    },

    // Footer content
    footer: {
        copyright: "© {{year}} Mika Collins. All rights reserved."
  },
};

export default en;


