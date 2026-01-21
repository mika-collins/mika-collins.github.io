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
        minor: "Minor: Ciencias de la Computación y Español",
        courseworkTitle: "Cursos Relevantes",
        coursework: [
          "Estructuras de Datos",
          "Algoritmos",
          "Bases de Datos"
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
            org: "Consejo Asesor de Ingeniería de Software de UNCW · ", 
            role: "Representante Estudiantil" 
          },
          { 
            org: "Asociación para la Maquinaria de Computación (ACM) · ", 
            role: "Miembro" 
          },
          { 
            org: "Sigma Delta Pi, Sociedad Nacional Universitaria Hispana de Honor · ", 
            role: "Miembro" 
          },
          {
            org: "Sociedad de Mujeres Ingenieras (SWE) · ",
            role: "Miembro"
          },
        ]
      }
    },

    // Footer content
    footer: {
        copyright: "© {{year}} Mika Collins. Todos los derechos reservados."
  },
};

export default es;
