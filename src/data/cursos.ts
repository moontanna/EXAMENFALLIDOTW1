export interface Enlace {
  titulo: string
  url: string
}

export interface Contacto {
  correo: string
  telefono: string
  horario?: string 
}

export interface Curso {
  id: number
  nombre: string
  materialApoyo: Enlace[]
  contacto: Contacto
  certificaciones: string[]
  empresasReferencia: Enlace[]
  casoDeExito: {
    empresa: string
    descripcion: string
  }
  videos: Enlace[]
}

export const cursos: Curso[] = [
  {
    id: 1,
    nombre: 'Finanzas Empresariales para la Toma de Decisiones',
    materialApoyo: [
      {
        titulo: 'CENEVAL – Finanzas Empresariales',
        url: 'https://ceneval.edu.mx/examenes-certificacion-euc_finem/',
      },
      {
        titulo: 'CONDUSEF – Educación financiera',
        url: 'https://www.condusef.gob.mx/',
      },
      {
        titulo: 'UNAM – Facultad de Contaduría y Administración',
        url: 'https://www.fca.unam.mx/',
      },
    ],
    contacto: {
      correo: 'finanzas@facultad.edu.mx',
      telefono: '999 000 0000',
      horario: 'lunes a viernes, 9:00 a 17:00 h',
    },
    certificaciones: [
      'CENEVAL – conocimientos relacionados con finanzas',
      'Microsoft Excel',
      'Cursos de educación financiera de CONDUSEF',
    ],
    empresasReferencia: [
      { titulo: 'BBVA México', url: 'https://www.bbva.mx/' },
      { titulo: 'Deloitte México', url: 'https://www.deloitte.com/mx/es.html' },
      { titulo: 'KPMG México', url: 'https://kpmg.com/mx/es/home.html' },
    ],
    casoDeExito: {
      empresa: 'BBVA',
      descripcion:
        'Análisis financiero y utilización de herramientas digitales para apoyar la toma de decisiones empresariales.',
    },
    videos: [
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Estados financieros | SAT',
        url: 'https://www.youtube.com/embed/PE4HoV7mnfI',
      },
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Decreto Plan México | SAT',
        url: 'https://www.youtube.com/embed/lR7ATra8WY4',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Contabilidad Práctica para Emprendedores',
    materialApoyo: [
      { titulo: 'SAT – Información fiscal', url: 'https://www.sat.gob.mx/' },
      {
        titulo: 'Contabilidad',
        url: 'https://uttamazula.edu.mx/Contabilidad.php',
      },
      {
        titulo: 'Universidad Interamericana – Contaduría Pública y Finanzas',
        url: 'https://universidadinteramericana.edu.mx/producto/licenciatura-en-contaduria-publica-y-finanzas/',
      },
    ],
    contacto: {
      correo: 'contabilidad@facultad.edu.mx',
      telefono: '999 000 0001',
    },
    certificaciones: [
      'CENEVAL',
      'Microsoft Excel',
      'Cursos de actualización fiscal del SAT',
    ],
    empresasReferencia: [
      { titulo: 'PwC México', url: 'https://www.pwc.com/mx/es.html' },
      { titulo: 'EY México', url: 'https://www.ey.com/es_mx' },
      { titulo: 'Deloitte México', url: 'https://www.deloitte.com/mx/es.html' },
    ],
    casoDeExito: {
      empresa: 'PwC',
      descripcion:
        'Utilización de herramientas contables y financieras para apoyar a empresas en el control de sus operaciones y cumplimiento de obligaciones.',
    },
    videos: [
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Estados financieros | SAT',
        url: 'https://www.youtube.com/embed/PE4HoV7mnfI',
      },
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Decreto Plan México | SAT',
        url: 'https://www.youtube.com/embed/lR7ATra8WY4',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Administración Estratégica de Empresas',
    materialApoyo: [
      {
        titulo: 'UNAM – Facultad de Contaduría y Administración',
        url: 'https://www.fca.unam.mx/',
      },
      {
        titulo: 'UAEH – Repositorio Institucional',
        url: 'https://repository.uaeh.edu.mx/',
      },
      { titulo: 'UDG – CUCEA', url: 'https://www.cucea.udg.mx/' },
    ],
    contacto: {
      correo: 'estrategia@facultad.edu.mx',
      telefono: '999 000 0002',
    },
    certificaciones: [
      'Administración estratégica',
      'Gestión empresarial',
      'Planeación estratégica',
    ],
    empresasReferencia: [
      { titulo: 'Grupo Bimbo', url: 'https://www.grupobimbo.com/' },
      { titulo: 'FEMSA', url: 'https://www.femsa.com/' },
      { titulo: 'Walmart México', url: 'https://www.walmart.com.mx/' },
    ],
    casoDeExito: {
      empresa: 'Grupo Bimbo',
      descripcion:
        'Crecimiento y expansión internacional mediante estrategias de diversificación, innovación y desarrollo de mercados.',
    },
    videos: [
      {
        titulo: 'UNAM – Conferencias sobre administración estratégica',
        url: 'https://www.youtube.com/results?search_query=UNAM+conferencia+administraci%C3%B3n+estrat%C3%A9gica+empresas',
      },
      {
        titulo: 'UDG – Estrategia y gestión empresarial',
        url: 'https://www.youtube.com/results?search_query=UDG+estrategia+gesti%C3%B3n+empresarial+conferencia',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Excel para Contadores y Administradores',
    materialApoyo: [
      {
        titulo: 'Microsoft Excel – Soporte',
        url: 'https://support.microsoft.com/es-es/excel',
      },
      {
        titulo: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/es-mx/training/',
      },
      {
        titulo: 'Microsoft Create – Plantillas de Excel',
        url: 'https://create.microsoft.com/es-es/search?query=excel',
      },
    ],
    contacto: {
      correo: 'excel@facultad.edu.mx',
      telefono: '999 000 0003',
    },
    certificaciones: [
      'Microsoft Office Specialist',
      'Microsoft Excel',
      'Microsoft 365',
    ],
    empresasReferencia: [
      { titulo: 'Microsoft', url: 'https://www.microsoft.com/es-mx' },
      { titulo: 'Deloitte México', url: 'https://www.deloitte.com/mx/es.html' },
      { titulo: 'KPMG México', url: 'https://kpmg.com/mx/es/home.html' },
    ],
    casoDeExito: {
      empresa: 'Microsoft',
      descripcion:
        'Excel se utiliza ampliamente para organizar datos, realizar cálculos, elaborar reportes y analizar información empresarial.',
    },
    videos: [
      {
        titulo: 'Curso de Microsoft Excel 2026 – Yoney Gallardo',
        url: 'https://www.youtube.com/embed/Szqtg6idszg',
      },
      {
        titulo: 'Curso Excel completo para principiantes – Ciudadano 2.0',
        url: 'https://www.youtube.com/embed/s76recy9xDg',
      },
    ],
  },
  {
    id: 5,
    nombre: 'Marketing Digital y Gestión de Negocios',
    materialApoyo: [
      {
        titulo: 'HubSpot Academy – Marketing Digital',
        url: 'https://academy.hubspot.com/es/courses/digital-marketing',
      },
      {
        titulo: 'HubSpot Academy – Fundamentos de Marketing Digital',
        url: 'https://academy.hubspot.com/es/lessons/digital-marketing-fundamentals',
      },
      { titulo: 'Google Skillshop', url: 'https://skillshop.withgoogle.com/' },
    ],
    contacto: {
      correo: 'marketing@facultad.edu.mx',
      telefono: '999 000 0004',
    },
    certificaciones: [
      'HubSpot Academy',
      'Google Ads',
      'Google Analytics',
      'Meta Blueprint',
    ],
    empresasReferencia: [
      { titulo: 'Google', url: 'https://www.google.com/' },
      { titulo: 'HubSpot', url: 'https://www.hubspot.com/' },
      { titulo: 'Meta', url: 'https://www.meta.com/' },
    ],
    casoDeExito: {
      empresa: 'HubSpot',
      descripcion:
        'Desarrollo de estrategias de marketing digital basadas en contenido, automatización, análisis de datos y gestión de clientes.',
    },
    videos: [
      {
        titulo: '¿Qué es el curso de marketing digital? – HubSpot Español',
        url: 'https://www.youtube.com/embed/mPq4uF39CLU',
      },
      {
        titulo: 'Cómo crear una estrategia de marketing digital – HubSpot Español',
        url: 'https://www.youtube.com/embed/9TkcnWWZD0g',
      },
    ],
  },
  {
    id: 6,
    nombre: 'Emprendimiento y Creación de Modelos de Negocio',
    materialApoyo: [
      {
        titulo: 'CONALEP – Modelo de emprendimiento',
        url: 'https://conalepveracruz.edu.mx/wp-content/uploads/2024/03/Modelo-de-emprendimiento-CONALEP.pdf',
      },
      {
        titulo: 'UABC – Facultad de Ciencias Administrativas',
        url: 'https://fcias.uabc.edu.mx/',
      },
      {
        titulo: 'Tecnológico de Monterrey – Emprendimiento',
        url: 'https://tec.mx/es/emprendimiento',
      },
      {
        titulo: 'LibreTexts Español – Recursos sugeridos de emprendimiento',
        url: 'https://espanol.libretexts.org/Bookshelves/Negocio/Negocios/Emprendimiento/Libro%3A_Emprendimiento_%28OpenStax%29/02%3A_El_viaje_y_los_caminos_empresariales/2.09%3A_Recursos_sugeridos',
      },
    ],
    contacto: {
      correo: 'emprendimiento@facultad.edu.mx',
      telefono: '999 000 0005',
    },
    certificaciones: [
      'Emprendimiento',
      'Modelo Canvas',
      'Innovación empresarial',
      'Gestión de proyectos',
    ],
    empresasReferencia: [
      { titulo: 'Startup México', url: 'https://www.startupmexico.com/' },
      { titulo: 'Y Combinator', url: 'https://www.ycombinator.com/' },
      {
        titulo: 'Tecnológico de Monterrey',
        url: 'https://tec.mx/',
      },
    ],
    casoDeExito: {
      empresa: 'Y Combinator',
      descripcion:
        'Aceleradora que ha apoyado la creación y crecimiento de numerosas empresas tecnológicas mediante modelos de negocio escalables.',
    },
    videos: [
      {
        titulo: 'Explicación del lienzo del modelo de negocio',
        url: 'https://www.youtube.com/embed/QOAOZMTLP5s',
      },
      {
        titulo: 'Dream Further – Diseño de proyectos emprendedores',
        url: 'https://www.youtube.com/embed/UbQ3AW85VRo',
      },
    ],
  },
  {
    id: 7,
    nombre: 'Gestión del Talento y Recursos Humanos',
    materialApoyo: [
      {
        titulo: 'UNAM – Facultad de Contaduría y Administración',
        url: 'https://www.fca.unam.mx/',
      },
      { titulo: 'UANL – FACPYA', url: 'https://facpya.uanl.mx/' },
      { titulo: 'UDG – CUCEA', url: 'https://www.cucea.udg.mx/' },
    ],
    contacto: {
      correo: 'recursoshumanos@facultad.edu.mx',
      telefono: '999 000 0006',
    },
    certificaciones: [
      'Gestión del talento',
      'Recursos Humanos',
      'Reclutamiento y selección',
      'Desarrollo organizacional',
    ],
    empresasReferencia: [
      {
        titulo: 'LinkedIn Talent Solutions',
        url: 'https://business.linkedin.com/talent-solutions',
      },
      { titulo: 'SHRM', url: 'https://www.shrm.org/' },
      { titulo: 'Deloitte México', url: 'https://www.deloitte.com/mx/es.html' },
    ],
    casoDeExito: {
      empresa: 'LinkedIn',
      descripcion:
        'Utilización de herramientas digitales para facilitar procesos de reclutamiento, búsqueda de talento y desarrollo profesional.',
    },
    videos: [
      {
        titulo: 'LinkedIn Talent Solutions – Reclutamiento y selección',
        url: 'https://www.youtube.com/results?search_query=LinkedIn+Talent+Solutions+reclutamiento+selecci%C3%B3n',
      },
      {
        titulo: 'SHRM – Liderazgo y gestión del talento',
        url: 'https://www.youtube.com/results?search_query=SHRM+liderazgo+gesti%C3%B3n+del+talento',
      },
    ],
  },
  {
    id: 8,
    nombre: 'Inteligencia de Negocios y Análisis de Datos',
    materialApoyo: [
      {
        titulo: 'Microsoft Learn – Power BI',
        url: 'https://learn.microsoft.com/es-mx/training/powerplatform/power-bi/',
      },
      {
        titulo: 'Microsoft Learn – Análisis de datos',
        url: 'https://learn.microsoft.com/es-mx/training/paths/data-analytics-microsoft/',
      },
      {
        titulo: 'Microsoft Learn – Modelado de datos con Power BI',
        url: 'https://learn.microsoft.com/es-mx/training/paths/model-data-power-bi/',
      },
    ],
    contacto: {
      correo: 'datos@facultad.edu.mx',
      telefono: '999 000 0007',
    },
    certificaciones: [
      'Microsoft Power BI',
      'Microsoft Data Analyst',
      'Análisis de datos',
      'Inteligencia de negocios',
    ],
    empresasReferencia: [
      { titulo: 'Microsoft', url: 'https://www.microsoft.com/es-mx' },
      { titulo: 'IBM México', url: 'https://www.ibm.com/mx-es' },
      { titulo: 'Oracle México', url: 'https://www.oracle.com/mx/' },
    ],
    casoDeExito: {
      empresa: 'Microsoft Power BI',
      descripcion:
        'Permite transformar datos empresariales en reportes y paneles que facilitan el análisis y la toma de decisiones.',
    },
    videos: [
      {
        titulo: 'Microsoft Power BI – Tutoriales oficiales',
        url: 'https://www.youtube.com/results?search_query=Microsoft+Power+BI+canal+oficial+tutorial+espa%C3%B1ol',
      },
      {
        titulo: 'Microsoft Power BI – Análisis y visualización de datos',
        url: 'https://www.youtube.com/results?search_query=Microsoft+Power+BI+an%C3%A1lisis+visualizaci%C3%B3n+datos+espa%C3%B1ol',
      },
    ],
  },
  {
    id: 9,
    nombre: 'Innovación y Transformación Digital Empresarial',
    materialApoyo: [
      {
        titulo: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/es-mx/training/',
      },
      {
        titulo: 'UABC – Inteligencia de Negocios',
        url: 'https://fcias.uabc.edu.mx/inteligencia-de-negocios/',
      },
      {
        titulo: 'Tecnológico de Monterrey – Emprendimiento',
        url: 'https://www.tec.mx/es/emprendimiento',
      },
    ],
    contacto: {
      correo: 'innovacion@facultad.edu.mx',
      telefono: '999 000 0008',
    },
    certificaciones: [
      'Microsoft',
      'Gestión de innovación',
      'Transformación digital',
      'Gestión de proyectos tecnológicos',
    ],
    empresasReferencia: [
      { titulo: 'Microsoft', url: 'https://www.microsoft.com/es-mx' },
      { titulo: 'IBM México', url: 'https://www.ibm.com/mx-es' },
      { titulo: 'Telefónica', url: 'https://www.telefonica.com/' },
    ],
    casoDeExito: {
      empresa: 'Telefónica',
      descripcion:
        'Ha implementado tecnologías como IoT, automatización y soluciones digitales dentro de sus procesos empresariales.',
    },
    videos: [
      {
        titulo: '¿Qué es la transformación digital en empresas y tecnología? – Telefónica',
        url: 'https://www.youtube.com/embed/tNdS8pj5ZeI',
      },
      {
        titulo: 'Transformación Digital en las Empresas – Juan Merodio',
        url: 'https://www.youtube.com/embed/hpxMnUmofSc',
      },
    ],
  },
  {
    id: 10,
    nombre: 'Fiscalidad y Obligaciones Empresariales',
    materialApoyo: [
      { titulo: 'SAT – Portal oficial', url: 'https://www.sat.gob.mx/' },
      {
        titulo: 'SAT – Obligaciones fiscales de empresas',
        url: 'https://wwwmat.sat.gob.mx/consulta/30167/conoce-cuales-son-las-obligaciones-fiscales-del-regimen-de-actividades-empresariales',
      },
      {
        titulo: 'SAT – Declaración Anual Empresas',
        url: 'https://www.sat.gob.mx/minisitio/DeclaracionAnual/Empresas/index.html',
      },
    ],
    contacto: {
      correo: 'fiscal@facultad.edu.mx',
      telefono: '999 000 0009',
    },
    certificaciones: [
      'Actualización fiscal',
      'Contabilidad fiscal',
      'Declaraciones fiscales',
      'CENEVAL',
    ],
    empresasReferencia: [
      { titulo: 'SAT', url: 'https://www.sat.gob.mx/' },
      { titulo: 'Deloitte México', url: 'https://www.deloitte.com/mx/es.html' },
      { titulo: 'EY México', url: 'https://www.ey.com/es_mx' },
    ],
    casoDeExito: {
      empresa: 'SAT',
      descripcion:
        'Utilización de plataformas digitales para facilitar la presentación de declaraciones, facturas electrónicas y cumplimiento de obligaciones fiscales.',
    },
    videos: [
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Estados financieros | SAT',
        url: 'https://www.youtube.com/embed/PE4HoV7mnfI',
      },
      {
        titulo: 'Tutorial Declaración Anual 2025 empresas – Decreto Plan México | SAT',
        url: 'https://www.youtube.com/embed/lR7ATra8WY4',
      },
    ],
  },
]