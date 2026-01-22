// About Me section english translations
const en = {

    // Navbar content
  common: {
    translate: "Translate",
  },
  site: {
    name: "< MC />",
  },

  // About Me section 
  about: {
    label: "Mission Control",
    title: "Mika Collins",
    description: "I'm a software engineering student with a love for turning ideas into functional applications. I have an interest in front-end development and I'm always eager to explore new opportunities where I can contribute and continue learning.",
    note: "Feel free to reach out through my socials or contact form!",
    actions: {
      primary: "Contact Me",
      secondary: "Download Resume",
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
      
      work: {
        label: "Relevant Experience",
        positions: [
          {
            title: "Research Assistant",
            company: "UNCW Computer Science Department · Jan 2026-Present",
            description: "Investigated agentic software engineering by building an automated framework using SWE-bench to analyze how autonomous AI agents solve real GitHub issues, focusing on robustness, security, and integrity of the agent's behavior."
          },
          {
            title: "Teaching Assistant",
            company: "UNCW Computer Science Department · Jan 2025-Present",
            description: "Assisted in introductory (CSC 131) and data structures & algorithms (CSC 231) courses by reviewing Python assignments, debugging student programs, providing detailed feedback, and designing test files to assess program accuracy and functionality."
          },
          {
            title: "Research Assistant",
            company: "UNCW Computer Science Department · Summer 2025",
            description: "Conducted applied research to evaluate the capability of LLMs to generate secure backend web application code, creating benchmark datasets and focusing on vulnerabilities such as SQL injection, XSS, and data exposure."
          }
        ]
      },
      
      societies: {
        label: "Campus Involvement",
        list: [
          { 
            org: "UNCW Software Engineering Advisory Board · ", 
            role: "Student Representative" 
          },
          { 
            org: "Association for Computing Machinery (ACM) · ", 
            role: "Member" 
          },
          { 
            org: "Sigma Delta Pi, National Collegiate Hispanic Honor Society · ", 
            role: "Member" 
          },
          {
            org: "Society of Women Engineers (SWE) · ",
            role: "Member"
          },
        ]
      }
    },

    // Footer content
    footer: {
        copyright: "© {{year}} Mika Collins. All rights reserved."
  },
};

export default en;


