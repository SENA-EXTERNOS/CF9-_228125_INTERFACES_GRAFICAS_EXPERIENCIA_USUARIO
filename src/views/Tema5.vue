<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Patrones de diseño en interfaz gráfica de usuario
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Como su nombre lo indica, los patrones de diseño de interfaz gráfica de usuario son soluciones en materia de diseño para resolver problemas repetitivos y muy comunes en temas de navegación, interacción y diseño de interfaces.<br><br>Antes de entrar en el tema en cuestión, una reflexión: muchas veces, las personas en su comportamiento cotidiano, cuando ingresan a varias páginas web para obtener información por cuestiones de trabajo y demás, tienden a pensar que ya antes han ingresado a una página similar. Lo anterior no indica plagio o robo de código o copia, esto suele suceder porque se han utilizado los mismos patrones que definen un estándar en diseño de aplicaciones.

    .BGIMG08.p-md-5.p-4
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-auto
          img(src="@/assets/curso/tema5/img02.svg")
        .col
          .h4.mb-0 Estos patrones cumplen su función basados en una serie de objetivos
      
      .row.justify-content-between.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR05")
            .row(titulo="Ser elementos de diseño reutilizables")
              p.mb-0 Dan la característica de tener un catálogo enriquecido de elementos que se pueden usar nuevamente en otros diseños de acuerdo con el contexto problema que se esté abordando. Es muy importante decir que los patrones nacieron a partir de una serie de estudios de diferentes productos, por lo que ya son validados para resolver los problemas a los que se aplican. Por ejemplo, el menú de hamburguesa. Este patrón es reutilizable y ayuda a solucionar el tema de navegación para que el usuario conozca las opciones de la aplicación. 
            .row(titulo="Evitar repeticiones")
              p.mb-0 Cuando ya existe un problema que es reiterativo en las diferentes aplicaciones, es muy importante y tiene todo de eficiente, generar una solución que se pueda reutilizar para diferentes soluciones de diseño de interfaz de usuario. 
            .row(titulo="Estandarizar el diseño")
              p.mb-0 Los patrones no son un estándar de diseño para que todo se haga igual, solamente proponen soluciones a problemas comunes en el diseño de interfaces. 
            .row(titulo="Concentrar el conocimiento")
              p.mb-0 Los nuevos diseños que vienen ya traen ese conocimiento a implementar de los patrones para aplicarlos a sus problemas de diseño y tener soluciones validadas. 
            .row(titulo="Ahorro de tiempo y mejora en la efectividad de una aplicación")
              p.mb-0 Ayudan a que la interacción y el flujo del usuario en una aplicación sea más amigable y natural. 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img03.svg")

    .BGIMG01.p-md-5.p-4
      separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Elementos
      
      .row.justify-content-center.mb-4
        .col-lg-10.cajon.color-acento-botones.p-4(data-aos="flip-up")
          p.mb-0 A continuación, se nombrarán algunos patrones utilizados en el diseño de interfaces de usuario. Es de importancia saber que los usuarios, por experiencia de manejo o por costumbre, ya reconocen la forma de interactuar de algunas estructuras visuales, porque las han visto antes. Ya saben que si dan clic en algún objeto de la interfaz este les va a devolver información. Por eso es importante tener presente los patrones, innovar mucho e intentar cambiar ese esquema mental; romper ese paradigma de los usuarios puede ser que los frustre al manejar la aplicación o sencillamente decidan cambiarse a otra.


    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 #[em Tabs]
            p.mb-0 Los “Tabs” son utilizados para resolver ciertos contenidos en donde el usuario no necesita cambiar de página. En ellas, el problema o contexto requiere que el contenido deba separarse en secciones. Las tabs permiten acceder a las diferentes partes a través de un área de contenido única que no actualiza la página al hacer clic en cada sección.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img04.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Carruseles
            p.mb-0 Son componentes que me permiten presentar diferentes elementos como  diapositivas, con un deslizamiento, se puede mostrar contenido imagen o texto en el carrusel.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img05.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 #[em Cards]
            p.mb-0 Esta
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img06.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Notificaciones
            p.mb-0 Componentes emergentes que aparecen en la pantalla para darle al usuario alguna indicación o información.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img07.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 #[em Breadcrumbs]
            p.mb-0 Es un menú que siempre indica la página actual donde se encuentra localizado sin navegación o jerarquía.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img08.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Modales
            p.mb-0 Componente que se muestra en forma de ventana emergente con funcionalidades específicas y le permite al usuario aplicar alguna acción e inmediatamente volver a la página principal.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img09.png")
    
    .BGIMG09.p-md-5.p-4
      separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Características
      
      p La característica principal de los patrones es lograr su reutilización en varios contextos problemas, y así tratar de estandarizar, no solo la forma de diseñar, sino de afrontar los problemas de diseño comunes.
      p Posterior a lo dicho anteriormente, los patrones facilitan no solo el diseño sino la interacción del usuario con la aplicación web que se está desarrollando.

    .BGIMG05.p-md-5.p-4
      .h5.mb-5 Para concluir, según sus características se pueden clasificar en tres grupos:
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img.w-75(src="@/assets/curso/tema5/img10.svg")
        .col-lg-8
          .row.justify-content-center
            .col-md-4.col-8.mb-md-0.mb-4(data-aos="flip-up")
              .BGR06.p-4
                .h4.text-white.text-center Patrones de Interacción
                p.text-white.text-center.mb-0 Comunicación fluida entre una aplicación y el usuario.
            .col-md-4.col-8.mb-md-0.mb-4(data-aos="flip-up")
              .BGR06.p-4
                .h4.text-white.text-center Patrones de Usabilidad
                p.text-white.text-center.mb-0 Mejores soluciones para los problemas de uso entre el usuario y una aplicación.
            .col-md-4.col-8(data-aos="flip-up")
              .BGR06.p-4
                .h4.text-white.text-center Patrones Arquitectónicos
                p.text-white.text-center.mb-0 Interacción de elementos entre niveles de Arquitectura de Información.

    .bloque-texto-g.color-acento-botones.inv02.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img11.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.text-white Usar un patrón de diseño no es copiar, sino reutilizar un componente que es una solución ya realizada, probada y conocida, para solucionar el problema común que se tiene en la aplicación.<br><br>Asimismo, utilizar patrones de diseño ayuda a tener presente cómo otras apps u otras empresas están solucionando ese problema común.<br><br>Por último, es siempre difícil comenzar un nuevo proyecto y más si se empieza todo de cero, es como tener una hoja en blanco sin saber qué hacer, en cambio, con los patrones ya se tiene una guía de cómo abordar ciertos contextos.

</template>

<script>
export default {
  name: 'Tema5',
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
