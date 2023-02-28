export default {
  global: {
    componenteFormativo:
      'Interfaces gráficas de usuario y experiencia de usuario',
    descripcionCurso:
      'Este componente formativo aborda las generalidades y aspectos claves sobre las interfaces gráficas de usuario, su configuración, utilidad, enfoques, desarrollos, patrones de diseño y navegación, buenas prácticas, entre otros. Todo ello, en función de una experiencia satisfactoria de usuarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Objetos de Interfaz de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para creación de Interfaz de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presentación de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Componentes de Interfaz gráfica de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Patrones de diseño en Interfaz de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Patrones de navegación en Interfaz de usuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Objetos de Interfaz de usuario',
      referencia:
        'Teocom. (2021). <i>Tipos de Interfaz de usuario</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YoRtDMj9E20',
    },
    {
      tema: 'Objetos de Interfaz de usuario',
      referencia:
        'Grande, D. (2019). <i>Más allá de la Interfaz de usuario</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bptPpkmprNw',
    },
    {
      tema: 'Componentes de Interfaz gráfica de usuario',
      referencia:
        'Crehana. (2019). <i>UI: Conoce la Interfaz de usuario</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/K7tqYyLq0M4',
    },
    {
      tema: 'Componentes de Interfaz gráfica de usuario',
      referencia:
        'Aguilera, F. (2020). <i>9 elementos de una Interfaz</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/TSdKFE0sLg8',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado: 'Interfaz de Programación de Aplicaciones.',
    },
    {
      termino: 'Atributo',
      significado: 'característica relevante de un objeto.',
    },
    {
      termino: 'GUI',
      significado: 'Interfaz Gráfica de Usuario.',
    },
    {
      termino: 'Interfaz',
      significado:
        'conexión que se da de manera física y a nivel de utilidad entre dispositivos o sistemas.',
    },
    {
      termino: 'Layout',
      significado:
        'contenedor invisible en la Interfaz gráfica que puede integrar varios elementos visuales.',
    },
    {
      termino: 'Método',
      significado:
        'es una función de código que realiza un comportamiento específico de un objeto.',
    },
    {
      termino: 'Objeto',
      significado:
        'entidad del mundo real que representa la instancia de una clase.',
    },
    {
      termino: 'Parámetro',
      significado: 'especifica el tipo de dato que recibirá un método.',
    },
    {
      termino: 'Visibilidad',
      significado:
        'valor que tendrá un atributo para conocer quién puede alcanzarlo en el sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Campaña Haro, M. N.,& Martillo Vásquez, E. L. (2020). <i>Análisis, estudio y prototipo de la aplicación de experiencia de usuario (UX) en el desarrollo de la interfaz gráfica de usuario de la plataforma e integración con componentes del sistema del proyecto FCI temonet fase II de la Universidad de Guayaquil</i> [Tesis de grado, Universidad de Guayaquil].',
      link: 'http://repositorio.ug.edu.ec/handle/redug/52257',
    },
    {
      referencia:
        'Cantos Jara, J. K. & Molina Franco, K. J. (2020). <i>Análisis y desarrollo de la sección Interfaz gráfica de usuario del módulo framework de la plataforma del proyecto FCI–053 temonet de la Universidad De Guayaquil</i> [Tesis de grado, Universidad de Guayaquil].',
      link: 'http://repositorio.ug.edu.ec/handle/redug/48814',
    },
    {
      referencia:
        'Casas, P. (2021). <em>Desarrollo de una Interfaz Gráfica de Usuario para aplicaciones docentes.</em> [Trabajo de grado, Universidad Politécnica de Cartagena].',
      link: 'http://hdl.handle.net/10317/9450',
    },
    {
      referencia:
        'Castillo, L. C. B., Daza, R. P. T., Peña, G. D., & Riaza, H. F. Q. (2018). Desarrollo de una Interfaz gráfica para el control de posición de un manipulador paralelo plano 3RRR. <em>Scientia et Technica</em>, 23(2), 168-174.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6643332.pdf',
    },
    {
      referencia:
        'Fernández-de-Córdoba-Martos, G. (2019). <i>Creación de Interfaces Gráficas de Usuario (GUI) con MatLab</i>. Universidad de Málaga.',
      link: 'https://hdl.handle.net/10630/17148',
    },
    {
      referencia:
        'Martínez, Y. A. & Córdoba, C. A. C. (2018). Diseño de Interfaz de Usuario para la creación de Sistemas Multimedia para Apoyar el Desarrollo del Lenguaje. <i>Tecnología & Diseño</i>, (9), p. 39-55.',
      link: 'https://revistatd.azc.uam.mx/index.php/rtd/article/view/39/72',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
