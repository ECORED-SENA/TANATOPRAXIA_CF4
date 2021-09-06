export default {
  global: {
    componenteFormativo: 'Protocolo de traslado restos mortales',
    descripcionCurso:
      'El presente componente de formación se desarrolla en torno al traslado de restos mortales. Este es un proceso de vital importancia para dar la despedida final a un ser querido. Durante el proceso se debe cumplir con la normatividad asociada, los requerimientos del cliente, principios de orientación al duelo, manejo de custodia y sobre todo la ética y respeto hacia los deudos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
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
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El duelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Traslado de los restos mortales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Traslado inicial',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Traslado intermedio',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Traslado final',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Procesos de traslado relacionados con el COVID-19',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Calidad en los procesos y procedimientos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Corte Suprema de Justicia de Colombia (2013). Cadena de Custodia-Concepto, finalidad conformación y forma de realizar la cadena de custodia.',
      link:
        'https://cortesuprema.gov.co/corte/wp-content/uploads/relatorias/pe/spa/CONCEPTO.pdf',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (2018). Manual del Sistema de Cadena de Custodia.',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      referencia:
        'ICONTEC (2015). Sistema de Gestión de la Calidad- NTC-ISO 9001.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=en-US&Q=18DA2EE329823ACFD353E72B04A3271B2B1DA961E0A07526&Req=',
    },
    {
      referencia: 'ICONTEC (2017) Norma técnica colombiana NTC 5840.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'Innovación y Cualificación, S. L. y Pablo Blanco, M (2019). Atención al cliente y calidad en el servicio. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=13304',
    },
    {
      referencia:
        'Kübler-Ross, E y Kessler, D. (2017). Sobre el duelo y dolor. Ediciones Luciérnaga.',
    },
    {
      referencia:
        'Ley 906 de 2004 [Congreso de Colombia]. "Por la cual se expide el Código de Procedimiento Penal. (Corregida de conformidad con el Decreto 2770 de 2004).',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_906_2004.pdf',
    },
    {
      referencia:
        'Ley 9 de 1979 [Congreso de Colombia], Por la cual se dictan Medidas Sanitarias.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf',
    },
    {
      referencia:
        'Medina, W. D. (2009). Calidad, Productividad y Competitividad: La salida de la crisis. Madrid: Diaz de Santos.',
      link:
        'https://issuu.com/librospdfgratis/docs/calidad__productividad_y_competitividad_409',
    },
    {
      referencia:
        'Meza Dávalos, E; García, Silvia; Torres Gómez, A; Castillo, L. Sauri Suárez, S; Martínez, S. (2008). El proceso del duelo. Un mecanismo humano para el manejo de las pérdidas emocionales. Revista de Especialidades Médico-Quirúrgicas. Vol. 13, núm. 1, enero-marzo, 2008, pp. 28-31. Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado México.',
      link: 'https://www.redalyc.org/pdf/473/47316103007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia (2020). Orientaciones para el manejo, traslado y disposición Final de cadáveres por covid-19.',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GIPG08.pdf',
    },
    {
      referencia:
        'Montoya, César y Boyero, Martín (2013). El CRM como herramienta para el servicio al cliente en la organización. Revista Científica “Visión de futuro”. Volumen 17, número 1. Argentina. pp. 130-151.',
      link:
        'https://revistacientifica.fce.unam.edu.ar/index.php?option=com_content&view=article&id=250&Itemid=58',
    },
    {
      referencia:
        'Pérez, V. (2016). Calidad total en la atención al cliente. Pautas para garantizar la excelencia en el servicio.',
      link:
        'https://www.academia.edu/8910048/CALIDAD_TOTAL_EN_LA_ATENCI%C3%93N_AL_CLIENTE_Pautas_para_Garantizar_la_Excelencia_en_el_Servicio',
    },
    {
      referencia:
        'Posada, S. (2005). El manejo del duelo. Grupo editorial Norma',
    },
    {
      referencia:
        'Rodríguez, D. (2012) ¿Quieres incrementar el nivel servicio al cliente en tu negocio?.',
      link:
        'http://www.crecesco.com/2011/10/cual-es-la%20definición-de-servicio-al.html',
    },
    {
      referencia: 'Renedo, P. (2021). Cortometraje el duelo. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=UR1JfYA0zHQ',
    },
    {
      referencia:
        'Red Producción de Contenidos Grupo Gestión Curricular SENA. (2021). Equipo de protección personal. [Video] YouTube:',
      link: 'https://www.youtube.com/watch?v=iDnhA8nPFsM&t=1s',
    },
  ],
  glosario: [
    {
      termino: 'Cadáver',
      significado:
        'Cuerpo humano sin vida, cuyo deceso debe, para efectos jurídicos, estar certificado previamente a su inhumación o cremación por un médico o funcionario de salud competente.',
    },
    {
      termino: 'Cremar',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'Acción de reducir a cenizas cadáveres, restos humanos o restos óseos u órganos y/o partes humanas por medio de la energía calórica.',
    },
    {
      termino: 'Embalar',
      significado:
        'Disposición del cadáver dentro de cubiertas-camillas para ser transportado, utilizando los elementos necesarios para resguardar su identificación y manipulación; con el fin de garantizar la integridad de los mismos durante su transporte.',
    },
    {
      termino: 'Inhumar',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'Acción de enterrar en los cementerios cadáveres, restos óseos y partes humanas.',
    },
  ],
  complementario: [
    {
      texto:
        'Meza Dávalos, E; García, Silvia; Torres Gómez, A; Castillo, L. Sauri Suárez, S; Martínez, S. (2008). El proceso del duelo. Un mecanismo humano para el manejo de las pérdidas emocionales. Revista de Especialidades Médico-Quirúrgicas. Vol. 13, núm. 1, enero-marzo, 2008, pp. 28-31. Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado México. ',
      tipo: 'Texto Digital',
      descarga: '/downloads/proceso-del-duelo.pdf',
    },
    {
      texto: 'Renedo, P. (2021). Cortometaje DUELO. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UR1JfYA0zHQ',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social de Colombia. (2020). Orientaciones para el manejo, traslado y disposición final de cadáveres por covid-19.',
      tipo: 'Texto digital',
      descarga: '/downloads/orientaciones.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de Diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
