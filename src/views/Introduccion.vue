<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Apreciado aprendiz, bienvenido a este componente formativo, donde se desarrollará una serie de temáticas que serán claves para la comprensión y el aprendizaje de los diferentes elementos que componen una interfaz gráfica de usuario. Consolide sus conocimientos y habilidades en lo relacionado con objetos, herramientas, patrones de navegación, patrones de diseño de interfaz de usuario, entre otros. 

    p A partir de ello, reconozca y sepa cómo seleccionar y usar adecuadamente cada uno de estos elementos, y alcance los niveles de satisfacción altos deseados, frente a la interacción y la experiencia que un usuario final tendrá al momento de utilizar una aplicación.

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
