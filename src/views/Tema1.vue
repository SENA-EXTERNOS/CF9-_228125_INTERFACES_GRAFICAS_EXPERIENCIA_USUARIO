<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Objetos de interfaz de usuario
    
    .bloque-texto-g.color-secundario.inv01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La interfaz gráfica de usuario, conocida también como GUI (del inglés #[em graphical user interface]), es el elemento base para la comunicación entre el sistema y el usuario; está conformada por una serie de gráficos e imágenes que generan una conexión entre diferentes pantallas que el #[em software] mostrará para cada uno de los procesos que el usuario desee hacer con el sistema. En el diseño de la interfaz gráfica intervienen muchas disciplinas, tanto ilustradores como diseñadores gráficos, diseñadores industriales, programadores, entre otros roles, son los encargados de identificar las necesidades del cliente final para luego plasmarlas visualmente.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-9.cajon.color-acento-contenido.p-4
        .h5 La usabilidad, adaptabilidad, navegabilidad, entre otros criterios, son los que establecen un estándar de calidad para las interfaces. 
        .h5.mb-0 El usuario estará interactuando con el sistema siempre a través de una GUI, por eso es importante conocer cómo se crean, qué elementos la componen, sus beneficios, desventajas y diferentes características.

    .BGIMG01.p-md-5.p-4  
      separador
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.mb-lg-0.mb-4(data-aos="fade-right")
          #t_1_1.titulo-segundo.color-acento-contenido
            h2 1.1 Elementos
          .cajon-b.color-acento-contenido.p-3
            p.mb-0 Una interfaz gráfica se compone de diferentes elementos según sea su diseño y su destino de uso, por ejemplo, se pueden crear interfaces gráficas para aplicaciones de escritorio y su navegabilidad será a través de ventanas emergentes. También se pueden hacer diseños para aplicaciones móviles y su visualización será a través de #[em Activitys] con su respectivo #[em layout] o también se pueden generar diseños para aplicaciones web y su diseño deberá guiarse por el estándar de los navegadores, por su manejo a través de las 12 columnas y la estructura de HTML5 para que los navegadores comprendan mejor el contenido de esta.
        .col-lg-3(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img02.svg")
    
      p Elementos de una interfaz gráfica de usuario.
    
    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Esta imagen muestra un ejemplo de estructura de página en HTML5, pero los diseños pueden variar; lo importante es mantener siempre las etiquetas de cada bloque que forma un elemento de la página. En una GUI se tienen elementos de barra de menú de diferentes estilos.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img03.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El menú #[em drop down] es aquel que se diseña para que su navegación tenga la funcionalidad de ir desplegando hacia la derecha y abajo el menú subyacente o los submenús que se tengan en el diseño, así como lo muestra la ilustración 2.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img04.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El menú estrecho tiene la particularidad de expandir cada una de sus opciones cuando se le da clic y de mostrar su nombre en modo hipervínculo; se usa cuando el espacio determinado para él es muy reducido.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img05.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p A continuación, se muestra una barra de navegación que también puede actuar como otro menú dentro de la aplicación que se esté desarrollando.
            p Las barras de navegación son elementos de la interfaz gráfica de usuario que permiten dar las opciones al usuario para moverse por la aplicación y ejecutar diferentes acciones. 
            p.mb-0 Hasta aquí se ha hablado de los elementos que componen una interfaz gráfica de usuario, ahora veamos las características de una interfaz gráfica de usuario.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img06.svg")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características
    
    .BGIMG03.p-md-5.p-4.mb-4(data-aos="zoom-in")
      p.mb-5 Las características que deben tener las interfaces gráficas de usuario y el conjunto de elementos que las constituyen son los siguientes:
      <br><br>
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img07.svg')
        .tarjeta.color-acento-contenido.p-3(x="8%" y="40%" numero="+")
          .h5.mb-2 Usabilidad
          p.mb-0 La interacción del usuario debe ser muy eficiente, es decir, permitir que el usuario use la aplicación sin ninguna dificultad, que no sea complejo buscar la forma de hacer las cosas y, en lo posible, que todas las funciones se encuentren a 3 clics de distancia.
        .tarjeta.color-acento-contenido.p-3(x="23%" y="40%" numero="+")
          .h5.mb-2 Navegabilidad
          p.mb-0 Esta característica indica la forma como se navega en la aplicación, la navegación debe ser muy sencilla, coherente en estilo entre todas las páginas y que se pueda entender fácil la lógica de navegación.
        .tarjeta.color-acento-contenido.p-3(x="40%" y="40%" numero="+")
          .h5.mb-2 Confiabilidad
          p.mb-0 La aplicación debe ser confiable en cuanto al manejo de los datos, utilizar los protocolos necesarios para dar esa seguridad al usuario y, sobre todo, que se tengan las políticas necesarias para cumplir el tratamiento de datos.
        .tarjeta.color-acento-contenido.p-3(x="56%" y="40%" numero="+")
          .h5.mb-2 Coherencia
          p.mb-0 La coherencia es una de las características más importantes de las interfaces gráficas de usuario, dado que debe existir una relación lógica y acorde con las expectativas del usuario final.
        .tarjeta.color-acento-contenido.p-3(x="73%" y="40%" numero="+")
          .h5.mb-2 Mantenibilidad
          p.mb-0 Esta característica indica tener interfaces gráficas de usuario independientes por función, y que en una sola interfaz no se haga todo porque se vuelve una aplicación monolítica y cuando se necesite hacer un cambio o ajuste, se vuelve tedioso su proceso de mantenimiento.
        .tarjeta.color-acento-contenido.p-3(x="88%" y="40%" numero="+")
          .h5.mb-2 Facilidad
          p.mb-0 Esta característica va de la mano con la usabilidad, dado que indica que las interfaces gráficas de usuario deben ser intuitivas para el usuario, que la curva de aprendizaje de uso sea mínima para que el usuario la maneje sin ningún inconveniente.
      <br><br>
   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
