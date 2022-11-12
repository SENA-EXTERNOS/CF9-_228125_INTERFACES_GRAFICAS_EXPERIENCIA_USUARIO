export default {
  global: {
    componenteFormativo:
      'Interfaces gráficas de usuario y experiencia de usuario',
    descripcionCurso:
      'Este componente formativo abordará el concepto de interfaces gráficas de usuario, con todos sus conceptos y buenas prácticas, así como el tema de experiencia de usuario.',
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
        titulo: 'Objetos de interfaz de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos de interfaz de usuario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de interfaz de usuario',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para creación de interfaz de usuario',
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
        titulo: 'Componentes de interfaz gráfica de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Patrones de diseño en interfaz de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Elementos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Patrones de navegación en interfaz de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Elementos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
        ],
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
      tema: 'Tipos de interfaz de usuario | Interface',
      referencia: 'Teocom. 2021',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YoRtDMj9E20',
    },
    {
      tema: 'Interfaz de usuario',
      referencia: 'Tedx Talks. 2019',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bptPpkmprNw',
    },
    {
      tema: 'UI: Conoce la interfaz de usuario',
      referencia: 'Crehana, 2019',
      tipo: 'Video',
      link: 'https://youtu.be/K7tqYyLq0M4',
    },
    {
      tema: 'Elementos de una interfaz',
      referencia: 'Francisco Aguilera, 2020',
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
        'contenedor invisible en la interfaz gráfica que puede integrar varios elementos visuales.',
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
        'Campaña Haro, M. N., & Martillo Vásquez, E. L. (2020). <em> Análisis, estudio y prototipo de la aplicación de experiencia de usuario (UX) en el desarrollo de la interfaz gráfica de usuario de la plataforma e integración con componentes del sistema del proyecto FCI temonet fase II de la Universidad de Guayaquil</em> [Tesis de grado, Universidad de Guayaquil].',
      link: 'http://repositorio.ug.edu.ec/handle/redug/52257',
    },
    {
      referencia:
        'Cantos Jara, J. K., & Molina Franco, K. J. (2020). <em> Análisis y desarrollo de la sección interfaz gráfica de usuario del módulo framework de la plataforma del proyecto FCI-053 temonet de la Universidad De Guayaquil</em> [Tesis de grado, Universidad de Guayaquil].',
      link: 'http://repositorio.ug.edu.ec/handle/redug/48814',
    },
    {
      referencia:
        'Casas, P. (2021). <em>Desarrollo de una Interfaz Gráfica de Usuario para aplicaciones docentes.</em> [Trabajo de grado, Universidad Politécnica de Cartagena].',
      link: 'http://hdl.handle.net/10317/9450',
    },
    {
      referencia:
        'Castillo, L. C. B., Daza, R. P. T., Peña, G. D., & Riaza, H. F. Q. (2018). Desarrollo de una interfaz gráfica para el control de posición de un manipulador paralelo plano 3RRR. <em>Scientia et Technica</em>, 23(2), 168-174.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6643332.pdf',
    },
    {
      referencia:
        'Fernández-de-Córdoba-Martos, G. (2019). Creación de Interfaces Gráficas de Usuario (GUI) con MatLab. Universidad de Málaga.',
      link: 'https://hdl.handle.net/10630/17148',
    },
    {
      referencia:
        'Martínez, Y. A., & Córdoba, C. A. C. (2018). Diseño de Interfaz de Usuario para la creación de Sistemas Multimedia para Apoyar el Desarrollo del Lenguaje. <em>Tecnología & Diseño</em>, (9), 39-55.',
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
