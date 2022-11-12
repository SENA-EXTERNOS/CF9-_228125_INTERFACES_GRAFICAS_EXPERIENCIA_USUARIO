<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas para creación de interfaz de usuario

    .bloque-texto-g.color-acento-botones.inv01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Conocer las herramientas y los diferentes tipos de sistemas que favorecen el diseño de interfaces gráficas de usuario es fundamental para los profesionales dedicados al desarrollo web en todo su conjunto, desde el inicio de la toma de requerimientos hasta la implementación de la aplicación.<br><br>Estas herramientas las utiliza, no solo el desarrollador web completo llamado #[em fullstack], sino también el diseñador conocido como #[em front-end], ya sea para el diseño de la aplicación, de una página web o de cualquier otro producto digital.

    .BGIMG04.p-md-5.mb-4
      .row.justify-content-end.align-items-center.mb-4
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img02.svg")
        .col-lg-8(data-aos="fade-left")
          .cajon-b.color-acento-botones.p-3.mb-4
            p.mb-0 Es indispensable, siempre que se vaya a hacer un diseño, contar con algunos recursos fundamentales para ese trabajo. En primera medida se debe revisar y seleccionar la herramienta adecuada para trabajar el diseño de las interfaces, realizando así una propuesta inicial o un prototipo para que el cliente pueda revisar si este primer acercamiento es acorde con lo que necesita y si se deben hacer ajustes dentro de la respectiva retroalimentación.
          p.mb-0 Hasta hace unos años la herramienta predilecta para este proceso de diseño era Photoshop  , la cual era muy utilizada por ilustradores, diseñadores, desarrolladores y todos los roles con incidencia en contenidos o productos digitales. Pero ahora, como en los proyectos lo más común es que se tenga que diseñar para tres productos o plataformas: escritorio, web y móvil, se debe revisar qué herramienta da esa funcionalidad y facilidad.

      p A continuación, se mencionan algunas herramientas que permiten hacer este trabajo de una manera más eficiente y sencilla. Es indispensable, siempre que se vaya a hacer un diseño, contar con algunos recursos fundamentales para ese trabajo. En primera medida se debe revisar y seleccionar la herramienta que se utilizará para el diseño de las interfaces.
      
      .row.justify-content-end.mb-4
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01")
            .row(titulo="BALSAMIQ")
              p Es una herramienta que se debe registrar para comenzar su uso, permite crear interfaces gráficas de usuario basadas en el #[em wireframing] y tiene un estilo visual de dibujo a mano alzada. Este software diseñado para la creación o bosquejo de interfaces tiene una variedad de elementos que se pueden utilizar: menús, barras de navegación, elementos de estado, etc. Además, tiene la funcionalidad de arrastrar y soltar para ir creando el diseño.
              p.mb-0 Después de terminar el diseño de las interfaces se pueden exportar a JPG o PDF para su posterior comunicación. Una ventaja de esta herramienta es que su trabajo es multiplataforma, es decir, se puede trabajar desde cualquier sistema operativo y permite el trabajo colaborativo con otros integrantes de su equipo. Habría que decir también que en su versión gratuita se puede trabajar desde la nube.
            .row(titulo="MOCKINGBIRD")
              p Esta es una herramienta que no requiere de ninguna instalación en la máquina y no se necesita tener tantos conocimientos o experiencia, por eso es ideal para usuarios nuevos o con poca experiencia que necesiten crear #[em mockups], ofreciendo alrededor de 90 componentes de trabajo. Una característica importante de esta herramienta, que permite el prototipado de interfaces, es que los diseños que se realicen se pueden compartir; cabe señalar que cuenta con diseños interactivos que permiten testear la usabilidad desde el rol de usuario o cliente para tener un #[em feedback] más acertado.
              p.mb-0 El sistema tiene una versión gratuita que se puede utilizar, pero tiene capacidades limitadas como la de crear proyectos debido a que solo permite 3, y la función de exportar y guardar solo está en la versión licenciada.
            .row(titulo="INVISION")
              p Es una herramienta de prototipado con funcionalidades sobresalientes en el mercado, ideal para especialistas del diseño web. Una ventaja diferenciadora con las otras herramientas es que es fácil de usar, intuitiva, no solo para el diseñador sino para todo el equipo de proyecto. También permite la colaboración compartiendo el proyecto y permitiendo su retroalimentación en tiempo real.
              p Esta herramienta cuenta con muchos beneficios que la distinguen, algunos de ellos son:
              ul.lista-ul--color.ms-4  
                li
                  <i class="fas fa-circle" style="color:#EF3C79; font-size: x-small"></i>
                  | Su diseño y visualización simula una web real.
                li
                  <i class="fas fa-circle" style="color:#EF3C79; font-size: x-small"></i>
                  | Mejora el proceso de retroalimentación con el cliente.
                li
                  <i class="fas fa-circle" style="color:#EF3C79; font-size: x-small"></i>
                  | Se puede hacer seguimiento y retroalimentación en tiempo real.
                li
                  <i class="fas fa-circle" style="color:#EF3C79; font-size: x-small"></i>
                  | Se puede usar en plataformas móviles.
                li
                  <i class="fas fa-circle" style="color:#EF3C79; font-size: x-small"></i>
                  | Tiene historial de versiones o contenido.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img03.svg")

    .BGIMG05.p-md-5.p-4(data-aos="zoom-in")
      .h5 Adicional a las ya nombradas y detalladas anteriormente, se tienen diferentes categorías para las herramientas de creación de interfaces gráficas.
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/img04.svg')
        .tarjeta.color-acento-contenido.p-3(x="20.2%" y="47%" numero="+")
          .h5.mb-2 Balsamiq
          p.mb-0 Popular en el mercado por ser fácil de usar y permite desarrollar los #[em wireframes] del proyecto directamente en el navegador.
        .tarjeta.color-acento-contenido.p-3(x="20.2%" y="55.8%" numero="+")
          .h5.mb-2 Mockupstogo
          p.mb-0 Biblioteca con elementos visuales de Android y otros sistemas operativos para implementarla en Balsamiq.
        .tarjeta.color-acento-contenido.p-3(x="20.2%" y="65%" numero="+")
          .h5.mb-2 Moqups
          p.mb-0 Herramienta que se puede buscar y trabajar vía web y permite desarrollar prototipos de interfaces gráficas de forma rápida; esto gracias a que es intuitiva y cuenta con más de 300 elementos visuales para construir la interfaz. Tiene una versión gratuita, pero solo permite gestionar 2 proyectos y con limitaciones en las funcionalidades de la herramienta.
        .tarjeta.color-acento-contenido.p-3(x="20.2%" y="74.8%" numero="+")
          .h5.mb-2 MockFlow
          p.mb-0 Herramienta web donde se puede diseñar la estructura de una página o aplicación web, la característica principal es que permite añadir enlaces para ir de una página a otra y evaluar así la navegabilidad de la aplicación.
        .tarjeta.color-acento-contenido.p-3(x="20.2%" y="83.7%" numero="+")
          .h5.mb-2 iPlotz
          p.mb-0 Herramienta que crea prototipos con navegación y permite el trabajo colaborativo.
        .tarjeta.color-acento-contenido.p-3(x="78.5%" y="16.2%" numero="+")
          .h5.mb-2 Axure
          p.mb-0 Es una herramienta muy usada en la ejecución de proyectos profesionales, se pueden crear prototipos de aplicaciones web o móviles con un nivel de detalle muy amplio. Tiene una comunidad muy activa donde se generan tutoriales y ayudas.
        .tarjeta.color-acento-contenido.p-3(x="78.5%" y="25.2%" numero="+")
          .h5.mb-2 Justinmind
          p.mb-0 Es una empresa que ofrece su herramienta llamada Prototyper, un programa potente con el cual se pueden elaborar prototipos de alto impacto y finos para aplicaciones móviles y web.
        .tarjeta.color-acento-contenido.p-3(x="78.5%" y="34.3%" numero="+")
          .h5.mb-2 Invision
          p.mb-0 Herramienta para crear diseños o interfaces para apps móviles y web, permite también agregarles navegación.
        .tarjeta.color-acento-contenido.p-3(x="81.3%" y="65%" numero="+")
          .h5.mb-2 Fluid UI
          p.mb-0 Tiene dentro de su herramienta más de 2000 #[em widgets] que se pueden utilizar para la construcción de prototipos para aplicaciones en IOS, Android o Windows Phone.
        .tarjeta.color-acento-contenido.p-3(x="81.3%" y="73.75%" numero="+")
          .h5.mb-2 Proto.io
          p.mb-0 Herramienta también para crear prototipos móviles, pero con la característica de poder crear algunas funcionalidades habituales como tocar, arrastrar, pellizcar y otras más. Ofrece una versión plenamente funcional, pero de prueba y su licencia dura 15 días.
        .tarjeta.color-acento-contenido.p-3(x="81.3%" y="82.75%" numero="+")
          .h5.mb-2 Concept.ly
          p.mb-0 Esta herramienta da la posibilidad de subir nuestros bocetos y añadirles zonas interactivas para crear interacción o agregar navegación.
        .tarjeta.color-acento-contenido.p-3(x="81.3%" y="91.7%" numero="+")
          .h5.mb-2 Appery.io
          p.mb-0 No solo permite crear prototipos sino también desarrollar la aplicación entera, trabaja con Phonegap para hacerlas híbridas.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
