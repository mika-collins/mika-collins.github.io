// About Me section spanish translations
const es = {

    // Navbar content
  common: {
    translate: "Traducir",
  },
  site: {
    name: "< MC />",
  },

  // About Me section 
  about: {
    label: "Misión Control",
    title: "Mika Collins",
    description: "Soy una estudiante de ingeniería de software con pasión por convertir ideas en aplicaciones funcionales. Me interesa el desarrollo front-end y siempre estoy ansiosa por explorar nuevas oportunidades donde pueda contribuir y seguir aprendiendo.",
    note: "¡No dudes en contactarme a través de mis redes sociales o el formulario de contacto!",
    actions: {
      primary: "Contáctame",
      secondary: "Descargar Currículum",
    },
  },

    // Technologies section
  technologies: {
    title: "Mi Stack Tecnológico",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      tools: "Herramientas y Conceptos",
    },
  },

  // Experience section
    experience: {
      education: {
        label: "Educación",
        degree: "B.S. Ingeniería de Software",
        university: "Universidad de North Carolina Wilmington · 2026",
        minor: "Minors: Ciencias de la Computación y Español",
        courseworkTitle: "Cursos Relevantes:",
        coursework: [
          "Estructuras de Datos y Algoritmos",
          "Programación Orientada a Objetos",
          "Diseño e Implementación de Bases de Datos",

          "Construcción de Software",
          "Desarrollo Web Cliente y Servidor",
          "Seguridad Aplicada de Software",
        ]
      },
      
      work: {
        label: "Experiencia Relevante",
        positions: [
          {
            title: "Asistente de Investigación",
            company: "Departamento de Ciencias de la Computación de UNCW · Ene 2026-Presente",
            description: "Investigué la ingeniería de software agéntica construyendo un marco automatizado usando SWE-bench para analizar cómo los agentes de IA autónomos resuelven problemas reales de GitHub, enfocándome en la robustez, seguridad e integridad del comportamiento del agente."
          },
          {
            title: "Asistente de Enseñanza",
            company: "Departamento de Ciencias de la Computación de UNCW · Ene 2025-Presente",
            description: "Asistí en cursos introductorios (CSC 131) y de estructuras de datos y algoritmos (CSC 231) revisando tareas de Python, depurando programas de estudiantes, proporcionando retroalimentación detallada y diseñando archivos de prueba para evaluar la precisión y funcionalidad de los programas."
          },
          {
            title: "Asistente de Investigación",
            company: "Departamento de Ciencias de la Computación de UNCW · Verano 2025",
            description: "Realicé investigación aplicada para evaluar la capacidad de los LLM para generar código seguro de aplicaciones web backend, creando conjuntos de datos de referencia y enfocándome en vulnerabilidades como inyección SQL, XSS y exposición de datos."
          }
        ]
      },
      
      societies: {
        label: "Participación en el Campus",
        list: [
          { 
            org: "Sigma Delta Pi, Sociedad Nacional Universitaria Hispana de Honor", 
            role: "Miembro · Abril 2025-Presente" 
          },
          { 
            org: "Consejo Asesor de Ingeniería de Software de UNCW", 
            role: "Representante Estudiantil  · Ene 2025-Presente" 
          },
          {
            org: "Sociedad de Mujeres Ingenieras (SWE)",
            role: "Miembro · Sep 2024-Presente"
          },
          { 
            org: "Asociación para la Maquinaria de Computación (ACM)", 
            role: "Miembro · Feb 2024-Presente" 
          },
        ]
      }
    },

    // Projects section
    projects: {
    list: [
      {
        title: "SFTB Enterprises Sitio Web",
        timeframe: "Diciembre 2025 - Presente",
        description: "Un sitio web creado para un negocio local de camiones de volteo basado en Albemarle, NC. El sitio muestra los servicios de la empresa, información de contacto y varios proyectos destacados.",
        image: "/SFTB/SFTBWebsite.png",
        tech: ["Javascript", "React", "HTML/CSS", "Vite", "Node.js", "VSCode"],
        github: "https://github.com/mika-collins",
        sourceLabel: "En Desarrollo",
        disabled: true
      },
      {
        title: "The Floor is Lava",
        timeframe: "Agosto 2025 - Diciembre 2025",
        description: "Una aplicación web que visualiza la ocupación en tiempo real de una habitación escaneando señales WiFi a través de Raspberry Pis y muestra los datos como un mapa de calor dinámico.",
        image: "/Heatmap/HeatmapLogin.png",
        tech: ["Python", "Javascript", "Vue.js", "HTML/CSS", "Node.js", "Raspberry Pi", "PostgreSQL", "Fly.io", "VSCode"],
        github: "https://github.com/mika-collins",
        sourceLabel: "Ver Código Fuente",
        disabled: false
      },
      {
        title: "Rastreador de Solicitudes de Prácticas",
        timeframe: "Verano 2025",
        description: "Una aplicación basada en Java diseñada para ayudar a los estudiantes a rastrear, organizar y gestionar sus solicitudes de prácticas a lo largo de la universidad.",
        image: "/InternshipTracker/InternshipTracker.png",
        tech: ["Java", "Scenebuilder", "CSS", "JavaFX", "IntelliJ IDEA"],
        github: "https://github.com/mika-collins/Internship-Application-Tracker",
        sourceLabel: "Ver Código Fuente",
        disabled: false
      },
    ],
  },

    // Footer content
    footer: {
        copyright: "© {{year}} Mika Collins. Todos los derechos reservados."
  },
};

export default es;
