export interface Enlace {
  titulo: string
  url: string
}

export interface Contacto {
  correo: string
  telefono: string
  horario?: string 
}

export interface ImagenApoyo {
  url: string
  alt: string
  fuenteUrl: string
  credito: string
  licencia: string
  licenciaUrl: string
}

export interface Curso {
  id: number
  nombre: string
  imagenApoyo: ImagenApoyo
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

export interface Inscripcion {
  nombre: string
  correo: string
  telefono: string
  cursoId: number
  cursoNombre: string
  fecha: string
}

export const inscripciones: Inscripcion[] = []

export const cursos: Curso[] = [
  {
    id: 1,
    nombre: 'Finanzas Empresariales para la Toma de Decisiones',
    imagenApoyo: {
      url: 'https://live.staticflickr.com/5756/21184692654_210b362269_b.jpg',
      alt: 'Panel de discusión en un foro de finanzas corporativas',
      fuenteUrl: 'https://www.flickr.com/photos/134633001@N07/21184692654',
      credito: 'falcongrp',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Guía para el sustentante del examen EUC-FINEM – CENEVAL/IMCP',
        url: 'https://ceneval.edu.mx/examenes-certificacion-euc_finem/',
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
    imagenApoyo: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Camp_Chesterfield_general_account_ledger,_1910-1916_-_DPLA_-_206e8c73ecb9419118717c75562a2497_(page_12).jpg',
      alt: 'Página de un libro mayor contable histórico',
      fuenteUrl:
        'https://commons.wikimedia.org/wiki/File:Camp_Chesterfield_general_account_ledger,_1910-1916_-_DPLA_-_206e8c73ecb9419118717c75562a2497_(page_12).jpg',
      credito: 'DPLA / Indiana Memory; autor no identificado',
      licencia: 'Dominio público en EE. UU.',
      licenciaUrl:
        'https://commons.wikimedia.org/wiki/File:Camp_Chesterfield_general_account_ledger,_1910-1916_-_DPLA_-_206e8c73ecb9419118717c75562a2497_(page_12).jpg',
    },
    materialApoyo: [
      {
        titulo: 'Principios de contabilidad financiera – OpenStax (en inglés)',
        url: 'https://openstax.org/details/books/principles-financial-accounting',
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
    imagenApoyo: {
      url: 'https://live.staticflickr.com/4051/5126106846_68d32ba724_b.jpg',
      alt: 'Tarjetas con ideas para planificar una estrategia',
      fuenteUrl: 'https://www.flickr.com/photos/55260169@N07/5126106846',
      credito: 'plantoo47',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Gestión estratégica y ventaja competitiva – OpenStax (en inglés)',
        url: 'https://openstax.org/books/principles-management/pages/9-introduction',
      },
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
        titulo: 'Administración estratégica en la UNAM: caso de éxito',
        url: 'https://www.youtube.com/embed/XvjhdBHOojE',
      },
      {
        titulo: 'Conferencia de estrategia empresarial: Modelo Delta',
        url: 'https://www.youtube.com/embed/T4WOfrVZ-qM',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Excel para Contadores y Administradores',
    imagenApoyo: {
      url: 'https://live.staticflickr.com/1101/979975865_cf6d5ee643.jpg',
      alt: 'Presupuesto y documentos de planificación financiera',
      fuenteUrl: 'https://www.flickr.com/photos/75755822@N00/979975865',
      credito: 'jamingray',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Ayuda y formación de Excel – Microsoft',
        url: 'https://support.microsoft.com/es-es/excel',
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
    imagenApoyo: {
      url: 'https://live.staticflickr.com/4098/4791983384_b9936e2580_b.jpg',
      alt: 'Material visual de una estrategia de marketing digital',
      fuenteUrl: 'https://www.flickr.com/photos/23300119@N03/4791983384',
      credito: 'Maria Reyes-McDavis',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Curso de marketing digital – HubSpot Academy',
        url: 'https://academy.hubspot.com/es/courses/digital-marketing',
      },
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
    imagenApoyo: {
      url: 'https://live.staticflickr.com/7372/10659974933_c2a506b281_b.jpg',
      alt: 'Emprendedor presentando una idea de negocio',
      fuenteUrl: 'https://www.flickr.com/photos/82878259@N00/10659974933',
      credito: 'CharlesUibel',
      licencia: 'CC BY 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Emprendimiento – OpenStax, edición en español de LibreTexts',
        url: 'https://espanol.libretexts.org/Bookshelves/Negocio/Negocios/Emprendimiento/Libro%3A_Emprendimiento_%28OpenStax%29',
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
        titulo: 'Modelo Canvas explicado paso a paso con ejemplo',
        url: 'https://www.youtube.com/embed/OnvW8vbM02U',
      },
      {
        titulo: 'Taller: diseño de un modelo de negocios innovador',
        url: 'https://www.youtube.com/embed/7EBIpn68Hnw',
      },
    ],
  },
  {
    id: 7,
    nombre: 'Gestión del Talento y Recursos Humanos',
    imagenApoyo: {
      url: 'https://live.staticflickr.com/5638/20740672110_d1ca81fdcb_b.jpg',
      alt: 'Equipo de Recursos Humanos trabajando en conjunto',
      fuenteUrl: 'https://www.flickr.com/photos/21187388@N06/20740672110',
      credito: 'University of the Fraser Valley',
      licencia: 'CC BY 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Comportamiento organizacional – OpenStax (en inglés)',
        url: 'https://openstax.org/details/books/organizational-behavior',
      },
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
        titulo: 'LinkedIn Talent Solutions: soluciones para selección de personal',
        url: 'https://www.youtube.com/embed/AAR_YhsKZK4',
      },
      {
        titulo: 'SHRM: panel intergeneracional de líderes de Recursos Humanos',
        url: 'https://www.youtube.com/embed/vxelDrq7kJI',
      },
    ],
  },
  {
    id: 8,
    nombre: 'Inteligencia de Negocios y Análisis de Datos',
    imagenApoyo: {
      url: 'https://live.staticflickr.com/8072/29489453303_576bd97a06_b.jpg',
      alt: 'Presentación sobre análisis de grandes volúmenes de datos',
      fuenteUrl: 'https://www.flickr.com/photos/80824546@N00/29489453303',
      credito: 'infomatique',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Introducción al análisis de datos con Microsoft Power BI',
        url: 'https://learn.microsoft.com/es-mx/training/paths/data-analytics-microsoft/',
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
        titulo: 'Cómo usar Power BI: tutorial desde cero',
        url: 'https://www.youtube.com/embed/pwJuFbyhZFE',
      },
      {
        titulo: 'Cómo crear informes en Power BI',
        url: 'https://www.youtube.com/embed/X0D4zPeCPZ0',
      },
    ],
  },
  {
    id: 9,
    nombre: 'Innovación y Transformación Digital Empresarial',
    imagenApoyo: {
      url: 'https://live.staticflickr.com/7572/15251834103_52069eb279_b.jpg',
      alt: 'Interfaz digital experimental presentada en un laboratorio de innovación',
      fuenteUrl: 'https://www.flickr.com/photos/67540051@N03/15251834103',
      credito: 'NYC Media Lab',
      licencia: 'CC BY-SA 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Inteligencia de Negocios – Facultad de Ciencias Administrativas, UABC',
        url: 'https://fcias.uabc.edu.mx/inteligencia-de-negocios/',
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
    imagenApoyo: {
      url: 'https://live.staticflickr.com/33/40890499_629164fa72_b.jpg',
      alt: 'Calculadora de bolsillo para realizar cálculos fiscales',
      fuenteUrl: 'https://www.flickr.com/photos/45581782@N00/40890499',
      credito: 'psd',
      licencia: 'CC BY 2.0',
      licenciaUrl: 'https://creativecommons.org/licenses/by/2.0/',
    },
    materialApoyo: [
      {
        titulo: 'Conoce las obligaciones fiscales del régimen de actividades empresariales – SAT',
        url: 'https://wwwmat.sat.gob.mx/consulta/30167/conoce-cuales-son-las-obligaciones-fiscales-del-regimen-de-actividades-empresariales',
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