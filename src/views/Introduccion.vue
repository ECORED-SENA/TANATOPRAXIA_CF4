<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Estimado aprendiz, bienvenido a este momento de aprendizaje relacionado con el proceso el servicio al cliente en el contexto de un traslado de un resto mortal. Antes de iniciar la comprensión del contenido temático intencionado al desarrollo de conocimientos, habilidades y actitudes, se debe observar el siguiente recurso educativo.
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/img-intro1.svg', alt='imagen ambiental', style='width:266px;')
    
    .row.justify-content-center
      .col-lg-5.mb-5
        figure
          img.mx-auto(src='@/assets/curso/img-intro2.svg', alt='imagen ambiental', style='width:360px;')
      .col-lg-7.mb-5
        LineaTiempoD.color-primario
          .row(numero="1" titulo="¿Cómo iniciar este proceso de aprendizaje?")
            .col-md-12.mb-4.mb-md-0.px-4.padding-lineaTop
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Para iniciar este proceso de aprendizaje debe reconocer su interés por el traslado de restos mortales a partir de la aplicación de protocolos de bioseguridad y la normatividad colombiana.
                  
          .row(numero="2" titulo="¿Qué elementos tengo para aprender?")
            .col-md-12.mb-4.mb-md-0.px-4.padding-lineaTop
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Usted tiene a su disposición un conjunto de recursos de aprendizaje para desarrollar conocimientos, habilidades y actitudes. Entre ellos: gráficos, videos, textos de los autores del componente y otros.
                  
          .row(numero="3" titulo="Cuál es el propósito de este momento de aprendizaje?")
            .col-md-12.mb-4.mb-md-0.px-4.padding-lineaTop
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 El propósito de este momento es que usted desarrolle conocimientos, habilidades y actitudes para el desarrollo de un traslado de cadáver.
                  
          .row(numero="4" titulo="¿Cómo finalizar este componente de formación?")
            .col-md-12.mb-4.mb-md-0.px-4.padding-lineaTop
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Mantener una disciplina de estudio de acuerdo a los tiempos que tiene para este componente de formación.
                  
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Participar de los espacios de interacción del programa. Uno de ellos son los foros.
                  
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Si tiene inquietudes con respecto a su proceso, no dude en escribirle un correo a su instructor.
                  
      .cajon.color-primario.p-4.mb-5
        p.mb-0 Teniendo claras algunas condiciones para aprender, se debe recordar que el traslado de cadáveres requiere de conocimientos y habilidades previas para brindar una experiencia a los deudos que conlleve a una despedida de su ser querido a partir de sus necesidades y creencias.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
