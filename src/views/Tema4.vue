<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Componentes de interfaz gráfica de usuario
    
    .BGIMG05.p-md-5.p-4.mb-4
      p Los componentes de la interfaz gráfica de usuario son los elementos visuales que la integran y permiten que el usuario interactúe con el sistema.
      p Estos componentes son:

      .row.justify-content-between.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img01.svg")
        .col-lg-7(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01")
            .row(titulo="CAJA DE TEXTO")
              p Las cajas o campos de texto son elementos de la interfaz a través de los cuales el usuario puede ingresar información al sistema. Este elemento permite ingresar por defecto caracteres varios, es decir, letras, números y caracteres especiales. Este componente se puede configurar con código para que solo reciba números, solo reciba letras o que valide el ingreso del email que cumpla con las condiciones correctas.
              p.mb-0 Importante: al momento de emplear estos elementos configurar y tener muy claro su objetivo para poderlo diseñar eficientemente.
            .row(titulo="BOTONES")
              p.mb-0 Los botones son los elementos a través de los cuales el usuario da clic para llevar a cabo una acción, tienen el evento on-clic con el cual se validan muchas funcionalidades. Estos elementos pueden ir en cualquier sección del aplicativo web, pero por lo general se encuentran en las barras de menú, barras de herramientas o menús laterales.
            .row(titulo="BARRAS DE DESPLAZAMIENTO")
              p.mb-0 Son las barras que aparecen cuando el aplicativo tiene una página muy extensa, ya sea de forma vertical u horizontal. Aclarando que las formas más frecuentes son extensas en vertical debido a que en ancho u horizontal normalmente son adaptables las páginas. Estos elementos son configurables en su tamaño y estilos.
            .row(titulo="IMÁGENES")
              p.mb-0 Todas las imágenes que se vayan a usar en el aplicativo deben ser editadas para cumplir con los requisitos de calidad, que no se pixelen, que permitan una visión de forma nítida y, si se requiere expandirlas por algún motivo, se siga viendo de forma correcta.

      .row.justify-content-between.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01")
            .row(titulo="LIENZO")
              p.mb-0 Los lienzos son muy usados en aplicaciones web, son marcos especiales de trabajo sobre los cuales se pueden hacer animaciones, pintar y trazar diferentes diseños para su posterior interacción. Por ejemplo, en aplicaciones móviles el lienzo permite generar animaciones o juegos y es fácil de usar implementando la herramienta del MIT llamada App Inventor. En las aplicaciones web también se usan para la creación de diferentes animaciones o espacios editables.
            .row(titulo="VENTANA")
              p.mb-0 Es una pantalla que se visualiza cuando se está ejecutando una acción, esta ventana puede ser emergente y solo se lanza cuando se está ejecutando una acción específica como, por ejemplo, guardar el registro de un cliente o cualquier otra funcionalidad que requiere mensajes de validación o afirmación.
            .row(titulo="LISTA")
              p.mb-0 Las listas pueden ser de dos tipos, listas ordenadas donde cada uno de los elementos que la integran deben llevar un orden inalterable; un ejemplo sería la tabla de posiciones de los equipos en una liga de fútbol, o el pódium de una carrera en eventos nacionales o internacionales  . Las listas no ordenadas donde los elementos que la componen no tienen una jerarquía u orden estricto, un ejemplo de ellos son las opciones de un menú, la lista de ingredientes o un listado de características de un objeto.
            .row(titulo="BOTÓN DESPLEGABLE")
              p.mb-0 El botón desplegable, también llamado #[b #[em combo box]] en otras herramientas de desarrollo, permite crear una lista de datos para mostrarla al usuario a través de un botón, que al darle clic despliega una lista hacia abajo de este, mostrando las opciones para su elección.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img02.svg")


</template>

<script>
export default {
  name: 'Tema4',
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
