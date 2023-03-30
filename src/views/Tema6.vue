<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Patrones de navegación de interfaz gráfica de usuario
    
    .bloque-texto-g.color-secundario.inv03.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Los patrones de navegación permiten explorar las posibles formas de navegar una página o aplicativo, que se han venido implementando en los diferentes proyectos.
        br
        br
        p Los patrones de navegación existen para las variadas categorías, para las aplicaciones de escritorio, las aplicaciones web y aplicaciones móviles. Es importante, también, tener presente los patrones móviles en el diseño web: este debe ser responsivo y adaptarse a cualquier pantalla, y es importante tener los patrones claros para una buena experiencia de usuario.

    .BGIMG09.p-md-5.p-4
      .row.justify-content-center
        .col-lg-8.mb-lg-0.mb-4
          h3 Elementos claves de los patrones para navegación de interfaz de usuario
          p Tanto para usuarios nuevos como para usuarios antiguos, la navegación dentro del producto digital, debe ser amigable, intuitiva y de fácil movilidad. 

          p A continuación, se mencionan algunos de los patrones de navegación más usados en el ámbito del desarrollo de interfaces gráficas de usuario: 

        .col-lg-3.col-6(data-aos="fade-left")
          img.w-75(src="@/assets/curso/tema6/img02.svg")
    
    .row.justify-content-center(data-aos="fade-right")
      AcordionA(tipo="a" clase-tarjeta="BGR07")
        .row.justify-content-center(titulo="Barras de navegación fija")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img03.svg")
          .col-lg-10
            p Estas barras de menú, como su nombre indica, siempre se mantienen fijas y visibles en la parte superior del navegador, el lugar común del menú en un gran número de sitios web. De esta manera, no importa en qué sección o lugar del sitio web se encuentre el usuario, siempre tiene a su disposición la barra de menú y puede ir directamente a cualquier otra sección que prefiera utilizando el menú.
            p Contar con la navegación siempre visible es una gran ventaja para los usuarios, especialmente si el desplazamiento vertical es extenso. Tanto en ordenadores como en móviles se puede utilizar esta técnica y puede ser especialmente apreciada en móviles (en donde el desplazamiento vertical puede ser más extenso que en los ordenadores), pues los usuarios no deben desplazarse hacia arriba en busca del menú si desean visitar otra sección del sitio web.
            p.mb-0 El uso común de estas barras de navegación es que no se notan claramente hasta que el usuario se desplaza hacia abajo. Es decir, se presentan como un menú, pero su fondo es transparente, de modo que se ve la fotografía o color que se emplea en la página de inicio. Una vez que el usuario se desplaza hacia abajo, el color de fondo de esta barra cambia y la navegación se hace más visible.
        .row.justify-content-center(titulo="Menú desplegable")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img04.svg")
          .col-lg-10
            p Este tipo de menú hace referencia a un menú desplegable que puede contener categorías, subcategorías y otro tipo de enlaces, todo en un espacio; de tal forma que el usuario pueda acceder a cualquier subcategoría sin necesidad de buscarla en otro menú desplegable. Puede ser particularmente útil en tiendas online, en donde incluso se pueden incluir imágenes de productos junto a elementos del menú como una forma de promoción.
            p Este tipo de menú es solo efectivo cuando se cuenta con un gran volumen de contenido y se debe organizar todo en diversas categorías y subcategorías. Su mayor ventaja es que permite al usuario acceder a diversas secciones del sitio mediante un par de clics, lo que hace una diferencia mínima de segundos en comparación con otro tipo de menú, pero el usuario estará agradecido.
            p.mb-0 Su principal desventaja es que, ya que contiene una gran cantidad de elementos, puede ser abrumador para el usuario o incluso le puede costar encontrar el producto que buscaba si las categorías no se encuentran organizadas de forma apropiada. También es problemático trasladar este tipo de menú a dispositivos móviles pues ocupan demasiado espacio horizontal.
        .row.justify-content-center(titulo="Barras de navegación vertical")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img05.svg")
          .col-lg-10
            p La barra de navegación vertical, como su nombre lo indica, hace referencia a tomar parte del espacio en pantalla para colocar la navegación de manera vertical, un elemento bajo otro; a diferencia de la navegación común donde se colocan lado a lado.
            p Una gran ventaja de utilizar este tipo de navegación es que la barra de menú siempre se mantiene visible y a disposición de los usuarios; de manera que fácilmente el visitante puede ir a otra sección si así lo desea. Es una forma bastante práctica de presentar la barra de menú.
            p.mb-0 Estas barras se suelen utilizar cuando existen pocos elementos en el menú, aunque definitivamente se pueden colocar más elementos de primer nivel que en una barra horizontal. Es recomendable que se utilice cuando la navegación es de un solo nivel, pues de lo contrario se podría crear una barra para desplazarse en esta zona lateral y este uso no es muy práctico.
        .row.justify-content-center(titulo="Barra de navegación sin botones")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img06.svg")
          .col-lg-10
            p Como su nombre indica, en este caso la barra de menú no contiene ningún elemento que luce como un botón, solo los textos de cada sección del menú. Dado a la posición en la que se encuentran, el usuario ya reconoce que se trata de la barra de menú y por lo tanto sabe que puede interactuar con dichos elementos, a pesar de que no existe ningún indicador. En otras palabras, el único indicador en estos casos es la ubicación de estos textos y posiblemente el nombre de cada sección que en ciertos casos es común para muchas páginas.
            p.mb-0 Con este tipo de navegación se puede fusionar el menú con el fondo, lo que es particularmente útil en los pantallazos iniciales, donde es deseable que el usuario preste toda la atención necesaria a la imagen y título que se está presentando. Este tipo de menú puede ser bastante adecuado si se está creando algún diseño minimalista y solo se poseen colores planos como fondo en el sitio, de manera que los elementos del menú son completamente visibles.

    .BGIMG09.p-md-5.p-4
      .row
        h3 Características de los patrones para navegación de interfaz de usuario
      
      .bloque-texto-g.color-acento-botones.inv03.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema6/img07.svg')})`}"
        )(data-aos="fade-right")
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Este tipo de patrones permiten al diseñador optimizar los espacios, las funciones de la aplicación y, sobre todo, mantener la facilidad de uso por parte del usuario. <br><br>Algunas otras características y ventajas de los patrones de navegación son:<br><br>●	Ocupación de un espacio mínimo en pantalla.<br>●	Es un indicador de las acciones principales que desean tomar los usuarios.<br>●	Captan la atención de los usuarios porque es un elemento que se encuentra en primer plano.<br>●	El usuario centra toda su atención en el menú una vez se ha activado.<br>●	Permite organizar la información de forma coherente sin abrumar a los usuarios.<br>●	Una vez que el usuario ha decidido a qué sección ir, se puede dedicar todo el espacio en pantalla a contenido específico para esa sección.<br>●	Se pueden organizar varios niveles de navegación e indicarlas mediante flechas o desplegables.

    .row.mt-5
      p En este punto del componente formativo, fortalezca algunos elementos importantes del diseño de interfaces de usuario, observando con atención el video que se muestra seguidamente, sobre la herramienta Moqups:

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1M9THjuijOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-10.cajon.color-primario.p-4(data-aos="flip-up")
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema6',
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
