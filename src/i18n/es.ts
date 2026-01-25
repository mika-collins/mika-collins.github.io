// About Me section spanish translations
const es = {

    // Navbar content
  common: {
    translate: "",
  },
  site: {
    name: "Mika",
  },

  // About Me section 
  about: {
    label: "Misión Control",
    title: "Mika Collins",
    description: "Soy una estudiante de ingeniería de software con pasión por convertir ideas en aplicaciones funcionales. Me interesa el desarrollo front-end y siempre con ganas de explorar nuevas oportunidades donde pueda contribuir y seguir aprendiendo.",
    location: "Carolina del Norte, EE.UU.",
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
      title: "Registro de Experiencia",

      // Education subsection
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
      
      // Work Experience subsection
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
      
      // Campus Involvement subsection
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
      title: "Mis Proyectos",
      viewLess: "Ver Menos",
      viewMore: "Ver Más ({{count}})",
      list: [
        {
          title: "Sitio web de SFTB Enterprises",
          timeframe: "Diciembre 2025 - Presente",
          description: "Un sitio web creado para un negocio local de camiones de volteo con sede en Albemarle, NC. El sitio muestra los servicios de la empresa, la información de contacto y varios proyectos destacados.",
          image: "/SFTB/SFTBWebsite.png",
          tech: ["Javascript", "React", "HTML/CSS", "Node.js", "VSCode"],
          github: "https://github.com/mika-collins",
          sourceLabel: "En Desarrollo",
          disabled: true
        },
        {
          title: "Sitio de Portafolio",
          timeframe: "Diciembre 2025 - Enero 2026",
          description: "Un sitio personal con un tema inspirado en el espacio para mostrar mis habilidades, experiencia y proyectos.",
          image: "/PersonalPortfolio/PersonalPortfolio.png",
          tech: ["TypeScript", "React", "HTML/CSS", "Node.js", "VSCode"],
          github: "https://github.com/mika-collins/mika-collins.github.io",
          sourceLabel: "Ver Código Fuente",
          disabled: false
        },
        {
          title: "The Floor is Lava",
          timeframe: "Agosto 2025 - Diciembre 2025",
          description: "Una aplicación web que visualiza la ocupación de habitaciones en tiempo real escaneando señales WiFi a través de Raspberry Pis y muestra los datos como un mapa de calor dinámico.",
          image: "/Heatmap/HeatmapLogin.png",
          tech: ["Python", "Javascript", "Vue.js", "HTML/CSS", "Node.js", "Raspberry Pi", "PostgreSQL", "Fly.io", "VSCode"],
          github: "https://github.com/mika-collins",
          sourceLabel: "Ver Código Fuente",
          disabled: false
        },
        {
          title: "Rastreador de Solicitudes de Prácticas",
          timeframe: "Verano 2025",
          description: "Una aplicación basada en Java diseñada para ayudar a los estudiantes a rastrear, organizar y gestionar sus solicitudes de prácticas durante la universidad.",
          image: "/InternshipTracker/InternshipTracker.png",
          tech: ["Java", "Scenebuilder", "CSS", "JavaFX", "IntelliJ IDEA"],
          github: "https://github.com/mika-collins/Internship-Application-Tracker",
          sourceLabel: "Ver Código Fuente",
          disabled: false
        },
        {
          title: "Sitio de la Tienda de Halloween",
          timeframe: "Agosto 2025 - Octubre 2025",
          description: "Un sitio web simulado para una tienda de Halloween construido a través de una serie de laboratorios para un curso de desarrollo web del lado del cliente.",
          image: "/HalloweenStore/HalloweenStore.png",
          tech: ["HTML/CSS", "VSCode"],
          github: "https://github.com/mika-collins/SENG-365-Halloween-Website",
          sourceLabel: "Ver Código Fuente",
          disabled: false
        },
      ],
    },

    contact: {
      title: "Contáctame",
      header: "MÓDULO DE COMUNICACIÓN V.2.0 - ESTADO: EN LÍNEA",
      fields: {
        name: {
          label: "IDENTIFICAR_USUARIO",
          placeholder: "ingresar_nombre...",
        },
        email: {
          label: "CANAL_DE_COMUNICACIÓN",
          placeholder: "ingresar_correo_electrónico...",
        },
        message: {
          label: "TRANSMITIR_MENSAJE",
          placeholder: "ingresar_mensaje...",
        },
      }, 
      submit: "ENVIAR_MENSAJE",

      confirmation: {
        sent: "ESTADO DE TRANSMISIÓN: ENVIADO",
        thanks: "GRACIAS POR CONTACTARME! ME PONDRÉ EN CONTACTO CONTIGO PRONTO.",
      }
    },

    // Footer content
    footer: {
        copyright: "© {{year}} Mika Collins. Todos los derechos reservados."
  },
};

export default es;
