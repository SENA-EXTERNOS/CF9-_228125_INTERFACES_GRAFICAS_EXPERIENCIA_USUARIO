<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presentación de la información

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estimado aprendiz, hasta aquí se ha hecho un abordaje acerca de las herramientas necesarias para la creación de interfaz de usuario. Ahora, se desarrollarán temas relacionados con la presentación de la información, entendiendo esta como un proceso del diseño de interfaces, que aunque no tiene nada que ver con conceptos técnicos de programación, sí tiene que ver con aspectos básicos del diseño en su más pura expresión y será de vital importancia para entender cómo se debe organizar e implementar la información de un producto digital, para que el usuario tenga una experiencia satisfactoria a la hora de interactuar con la aplicación.
    
    p Los aspectos importantes para tener presentes en el momento de mostrar la información al usuario son los estilos utilizados en la aplicación, los colores, la tipografía, los gráficos o ilustraciones, las animaciones y las formas de navegación.

    .row.justify-content-between.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-secundario.p-3.mb-4
          p.mb-0 De acuerdo con lo anterior, la tipografía, o fuente tipográfica como se conoce en el contexto profesional, es la familia de tipo de letra que se va a utilizar para mostrar la información de texto, así como su tamaño y su estilo. Existen diferentes tipos de fuentes que se pueden implementar en la página o aplicación web, en este caso, se hablará específicamente de “fuentes seguras para web”. En otras palabras, se puede decir que la tipografía es de gran relevancia para lograr un diseño exitoso… Encontrar la mejor o la tipografía ideal, es clave.
      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img02.svg")
    
    .row.justify-content-center.mb-4
      .col-lg-9.cajon.color-primario.p-4(data-aos="flip-up")
        .h5.mb-0 Las fuentes seguras son sencillas de implementar y aseguran una consistencia de marca, generan ventajas en la experiencia de usuario y optimización en los buscadores de posicionamiento. Además, una fuente segura es una tipografía que puede ser visualizada por la mayoría de los dispositivos, es decir, computadores de escritorio, portátiles y celulares. Normalmente vienen instaladas en cada sistema operativo.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img03.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        .h5.mb-0 Es necesario recalcar que este tema de las tipografías es muy importante, porque si un visitante llega a la aplicación web y su dispositivo no tiene la fuente instalada, la aplicación la reemplazará por una fuente genérica mostrando de forma diferente el contenido o incluso mostrándolo de forma ilegible en algunos dispositivos.

    p De igual manera, contar con este tipo de fuentes puede mejorar la velocidad de carga de la aplicación y, como se dijo anteriormente, la experiencia de usuario UX y el posicionamiento SEO.
    .BGIMG05.p-md-5.p-4.mb-4
      p Algunas de las fuentes seguras que se pueden usar son:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-6.order-lg-1.order-2(data-aos="fade-right")
          .BGR04A.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Arial
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Times New Roman
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Helvetica
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Calibri
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Georgia
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Cambria
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Veranda
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Tahoma
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Trebuchet
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Century Gothic
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Didot
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="flip-up")
          .row.justify-content-center
            .col-10
              img(src="@/assets/curso/tema3/img04.svg")
        .col-lg-3.col-6.order-3(data-aos="fade-left")
          .BGR04A.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Bodoni
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Calisto
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Candara
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Optima
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Palatino
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Quicksand
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Courier New
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Rockwell
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Garamond
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Copperplate
          .BGR04B.p-2
            <i class="fas fa-angle-right" style="color:#21CBAE"></i> Impact

    .row.justify-content-center.mb-4
      .col-10.cajon.color-acento-contenido.color-a.p-4(data-aos="flip-up")
        p.mb-0 Habría que decir también que el color es un elemento de vital importancia, dado que es muy poderoso e impactante en el diseño web a la hora de establecer un esquema de color para la aplicación que se está creando. Este proceso conlleva utilizar correctamente la guía de la teoría del color.

    .h4 Teoría del color

    .row.justify-content-center.mb-4
      .col-10
        .bloque-texto-g.color-acento-botones.bloque-inv.p-4.p-sm-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img05.svg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Existe un conjunto de reglas básicas que los diseñadores web deben tener muy claras, entre ellas es muy importante conocer los principios generales de la teoría del color, para que al momento de seleccionar los colores que se van a utilizar, se haga con fundamento técnico. El círculo cromático es un punto de partida muy importante, indispensable para los artistas digitales, y en este caso, para los diseños web. Esta herramienta permite seleccionar una gama o esquema de colores de forma coherente.

    p Para elegir una gama o mezcla de colores armoniosa, hay que seleccionar dos colores opuestos entre sí (por ejemplo 1 y 2) y tres igualmente espaciados entre sí (por ejemplo 2, 3 y 4); formando un triángulo (o un cuadrado si se escogen dos pares de colores opuestos). El esquema de color armonizará cualquiera que sea el ángulo en el que se establezca la relación.

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in")
      .row.BGIMG06.px-md-4.px-3.py-md-5.py-4(titulo="Colores primarios")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Son el rojo, el amarillo y el azul. El resto de los colores se obtienen combinando estos tres, mezclando dos colores primarios, se obtiene un color secundario.          
        .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img06.png")
      .row.BGIMG06.px-md-4.px-3.py-md-5.py-4(titulo="Colores secundarios")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Son aquellos que se obtienen al combinar la misma proporción de dos colores primarios.          
        .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img07.png")
      .row.BGIMG06.px-md-4.px-3.py-md-5.py-4(titulo="Colores terciarios")
        .col-lg-8.order-lg-1.order-2
          p Se obtienen mezclando un color primario con otro secundario, obteniendo los siguientes colores.
          ul.lista-ul--color.ms-4  
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Amarillo + Verde = Amarillo verdoso
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Azul + Verde = Azul verdoso
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Azul + Violeta = Azul violáceo
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Rojo + Violeta = Rojo violáceo
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Rojo + Naranja = Rojo anaranjado
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Amarillo + Naranja = Amarillo anaranjado          
        .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img08.png")
      .row.BGIMG06.px-md-4.px-3.py-md-5.py-4(titulo="Colores complementarios")
        .col-lg-8.order-lg-1.order-2
          p Son los colores opuestos en el círculo cromático, estas combinaciones dan el contraste más fuerte. Por ejemplo, si tenemos un fondo rojo y le ponemos un texto verde, el resultado es casi cegador.
          ul.lista-ul--color.ms-4  
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Rojo y verde
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Azul y naranja
            li
              <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
              |	Violeta y amarillo          
        .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img09.png")
      .row.BGIMG06.px-md-4.px-3.py-md-5.py-4(titulo="Colores análogos")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Son los colores adyacentes (cercanos entre sí) en el círculo cromático, combinan perfectamente y comunican tranquilidad. Estos colores podrán usarse siempre que se quiera que los usuarios de un sitio web se sientan cómodos.          
        .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img10.png")

    .BGIMG07.p-md-5.p-4      
      .h4 Gráficos e ilustraciones

      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img11.svg")
        .col-lg-7(data-aos="fade-left")
          .cajon-b.color-primario.p-3.mb-4
            p.mb-0 Ahora hablemos sobre los gráficos e ilustraciones, que en un sentido general se pueden definir como una representación visual que acompaña y da sentido a una temática específica y son claves para lograr que la experiencia del usuario sea dinámica, interactiva, intuitiva y acorde con las expectativas de este.
          .cajon.color-acento-contenido.color-a.p-4
            .h5.mb-0 Los gráficos o ilustraciones utilizados en el diseño de páginas o aplicaciones web no se pueden poner en crudo, es decir, no se puede solo tomar una foto, pasarla al sitio y mostrarla; tampoco hacer una captura de pantalla y ponerla o descargar imágenes de repositorios y ponerlas. Para esto, se debe tratar la imagen; cuando se habla de tratar es de optimizarla, ajustarla, escalarla y asignar el tamaño o dimensiones exactas según el espacio que va a ocupar en la web. También deben ser trabajadas en alta definición, por si en algún caso deben adaptarse a una pantalla más grande o más pequeña, no se pixelen o se vean estiradas o deformadas.

</template>

<script>
export default {
  name: 'Tema3',
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
