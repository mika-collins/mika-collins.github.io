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
    description: "Soy una ingeniera de software con muchas ganas de enfrentar problemas desafiantes, aprender nuevas tecnologías y esforzarme continuamente para crecer como profesional. Siempre estoy abierta a conectarme con otros, así que no dudes en contactarme!",
    location: "Carolina del Norte, EE.UU.",
    actions: {
      primary: "Contáctame",
      secondary: "Descargar Currículum",
    },
    resumeToast: {
      message: "¡Ups! Parece que mi currículum está desactualizado. Inténtalo de nuevo cuando lo haya actualizado.",
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
            title: "Ingeniera de Software Junior",
            company: "MetLife · Jun 2026-Presente",
            description: "¡Construyendo un futuro con más confianza!"
          },
          {
            title: "Beca de Ingeniería de Software",
            company: "Kittelson & Associates, Inc. · Feb 2026-Mayo 2026",
            description: "Desarrollé nuevos módulos y mejoras de interfaz para la plataforma wzKIT™ de Kittelson, mejorando el análisis de seguridad de zonas de trabajo y planificación vial."
          },
          {
            title: "Asistente de Enseñanza",
            company: "Departamento de Ciencias de la Computación de UNCW · Ene 2025-Mayo 2026",
            description: "Asistí en los cursos Introducción a la Ciencia de la Computación y Estructuras de Datos y Algoritmos revisando tareas de Python, depurando código de estudiantes y diseñando pruebas para verificar su precisión."
          },
          {
            title: "Asistente de Investigación",
            company: "Departamento de Ciencias de la Computación de UNCW · Verano 2025",
            description: "Evalué la capacidad de los LLM para generar código backend seguro, creando conjuntos de datos de referencia enfocados en inyección SQL, XSS y exposición de datos."
          }
        ]
      },
      
      // Campus Involvement subsection
      societies: {
        label: "Honores y Sociedades",
        list: [
          { 
            org: "Graduada Sobresaliente de Ingeniería de Software", 
            role: "Primavera 2026" 
          },
          { 
            org: "Upsilon Pi Epsilon, Sociedad Internacional de Honor para Computación y Disciplinas de Información", 
            role: "Miembro · Primavera 2026" 
          },
          { 
            org: "Sigma Delta Pi, Sociedad Nacional de Honor para Estudiantes Hispanos", 
            role: "Miembro· Primavera 2025" 
          },
          { 
            org: "Consejo Asesor de Ingeniería de Software de UNCW", 
            role: "Representante Estudiantil  · Ene 2025-Mayo 2026" 
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
          title: "Colaboradora de Código Abierto a Apache Grails",
          timeframe: "Marzo 2026 - Presente",
          description: "Contribuí al framework de Apache Grails resolviendo inconsistencias en la publicación de documentación y mejorando la confiabilidad de la construcción para la guía oficial de usuarios de Grails. También contribuí con mejoras al tooling de construcción y al flujo de trabajo de CI para mejorar el informe de estilo de código en GitHub Actions.",
          image: "/ApacheGrails/MergedPR.png",
          tech: ["Groovy", "Java", "Gradle", "Git", "GitHub Actions"],
          github: "https://github.com/apache/grails-core/pulls?q=is%3Apr+author%3Amika-collins",
          sourceLabel: "Ver Contribuciones",
          disabled: false
        },
        {
          title: "Sitio web de SFTB Enterprises",
          timeframe: "Diciembre 2025 - Presente",
          description: "Un sitio web moderno creado para un negocio local de camiones de volteo con sede en Albemarle, NC. El sitio muestra los servicios de la empresa, la información de contacto y los proyectos destacados a través de una interfaz basada en React responsive.",
          image: "/SFTB/SFTBWebsite.png",
          tech: ["Javascript", "React", "Vite", "HTML/CSS", "Node.js", "GitHub Actions"],
          github: "https://github.com/mika-collins",
          sourceLabel: "En Desarrollo",
          disabled: true
        },
        {
          title: "Sitio de Portafolio",
          timeframe: "Diciembre 2025 - Enero 2026",
          description: "Mi portafolio web con diseño adaptable para exhibir mis habilidades, experiencia y proyectos. Cuenta con soporte multilingüe e integración con GA4 para analizar la interacción de los usuarios.",
          image: "/PersonalPortfolio/PersonalPortfolio.png",
          tech: ["TypeScript", "React", "HTML/CSS", "Node.js", "EmailJS", "GA4", "i18next"],
          github: "https://github.com/mika-collins/mika-collins.github.io",
          sourceLabel: "Ver Código Fuente",
          disabled: false
        },
        {
          title: "The Floor is Lava",
          timeframe: "Agosto 2025 - Diciembre 2025",
          description: "Una aplicación web que visualiza la ocupación de habitaciones en tiempo real escaneando señales WiFi a través de Raspberry Pis y muestra los datos como un mapa de calor dinámico.",
          image: "/Heatmap/HeatmapTutorial.png",
          tech: ["Python", "Javascript", "Vue.js", "HTML/CSS", "Node.js", "Raspberry Pi", "PostgreSQL", "Fly.io", "PlayWright"],
          github: "https://github.com/mika-collins/seng401-project-mawc",
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
          tech: ["HTML/CSS"],
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
