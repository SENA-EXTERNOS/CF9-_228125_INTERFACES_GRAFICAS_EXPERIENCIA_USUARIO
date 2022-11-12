<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Bienvenido estimado aprendiz, en este componente se desarrollarán una serie de temáticas que serán claves para la comprensión y el aprendizaje de los diferentes elementos que componen una interfaz gráfica de usuario, se abordarán temas como los objetos, las herramientas, los patrones de navegación, los patrones de diseño de interfaz de usuario, entre otros. A partir de esto, se hace necesario que el aprendiz reconozca la importancia de seleccionar y usar adecuadamente cada uno de estos elementos, con el objetivo de alcanzar un nivel de satisfacción alto frente a la interacción y la experiencia que un usuario final tendrá al momento de utilizar una aplicación.
    p Antes de empezar, veamos el siguiente video de introducción para tener mayor claridad sobre este componente.

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
