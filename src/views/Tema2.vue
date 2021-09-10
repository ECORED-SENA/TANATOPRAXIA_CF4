<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El duelo
    
    p.mb-5 Tanto el duelo como los sentimientos que se asocian a él, son factores que se deben tener en cuenta en el momento de la prestación del servicio funerario; aunque los trabajadores funerarios no sean los especialistas en el manejo del duelo, sí se deben conocer sus manifestaciones básicas, para brindar y otorgar la ayuda necesaria al cliente. 
      b #[i Se preguntará, ¿qué es el duelo? ]
      b-none Según Posada (2005), lo define como la respuesta psicológica -sentimiento y pensamiento- que se presenta ante la pérdida de un ser querido. Esta respuesta puede ser subjetiva y depende del sistema mental y emocional de quien lo vive. Las creencias que tenga quien lo sufre, modifica su expresión y desarrollo, haciéndolo más manejable o complejo de tratar en algunos casos. Algunos estados que pueden padecer los deudos ante un descenso de un cuerpo son:

    .row.justify-content-center.mb-4
      .col-auto.mb-2
        figure
          img.mx-auto(src='@/assets/curso/tema2/img1.svg', alt='', style='width:218px;')
      .col-auto.mb-2
        figure
          img.mx-auto(src='@/assets/curso/tema2/img2.svg', alt='', style='width:218px;')
      .col-auto.mb-2
        figure
          img.mx-auto(src='@/assets/curso/tema2/img3.svg', alt='', style='width:218px;')
      .col-auto.mb-2
        figure
          img.mx-auto(src='@/assets/curso/tema2/img4.svg', alt='', style='width:218px;')
    
    p.mb-4 Si bien existen muchas clasificaciones en las fases del duelo, se tomará la perspectiva de Kübler-Ross, E & Kessler, David (2017), para su caracterización. Cada fase es un momento que experimenta cada deudo para superar la pérdida del ser querido. Las fases tienen como objetivo la aceptación de la muerte del ser querido; pero se debe tener en cuenta que cada proceso que un deudo experimenta es distinto y este no tiene que seguir el orden planteado, aunque la primera fase: shock y la segunda fase: reorganización, sí suelen presentarse en este estricto orden. Se invita a identificar las características de cada fase en el siguiente recurso de aprendizaje.

    .row.justify-content-center
      .col-lg-11
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema2/icon1.svg' alt='AvatarTop' style='width: 64px;')
                .tarjeta
                  .p-4
                    h4 Fase de shock
                    p.mb-0 Ocurre en las primeras horas o días tras el conocimiento de la muerte de la persona. Esta fase suele afectar a las personas en su capacidad de reacción, y además, se observan  cambios abruptos de conducta, la cual está estrechamente relacionada con el tipo de muerte del ser querido.
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    h4 Fase de negación
                    p.mb-0 Suele presentarse en los deudos como una negación del descenso del cuerpo de un ser querido. En esta fase aparece la rabia, ira  o enfado, las cuales son emociones que protegen a los deudos de la noticia recibida. En esta fase es común que los dolientes empiecen a buscar culpables.
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema2/icon2.svg' alt='AvatarTop' style='width: 90px;')
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema2/icon3.svg' alt='AvatarTop' style='width: 102px;')
                .tarjeta
                  .p-4
                    h4 Fase de aceptación
                    p.mb-0 Este momento se caracteriza por la aceptación de la muerte por parte del deudo. La persona se da cuenta que la muerte de su ser querido es real e irreparable.
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    h4 Fase de reorganización
                    p.mb-0 El doliente se hace consciente que el fallecido no volverá y comienza a reorganizar su vida.  Para ello necesitará tiempo en soledad para reflexionar. 
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style='width: 92px;')

    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9.mb-2
          .bloque-texto-a__texto.p-4
            p Se habla de diferentes tipos de duelo según el tipo de muerte del ser querido, debido a que son diferentes escenarios y contextos en los que una persona puede fallecer, y estos afectan el proceso del duelo de los sobrevivientes. Estos tipos de muertes son:
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/tema2/img5.svg', alt='imagen ambiental', style='width:266px;')
    
    .row.justify-content-center.mb-5
      .col-auto
        figure.mb-4
          img.img-size.mx-auto(src='@/assets/curso/tema2/img6.svg', alt='imagen ambiental', style='')
      .col-lg-7
        LineaTiempoD.color-primario.mb-4
          p(numero="1" titulo="Muerte repentina") En general estas muertes generan sentimientos de desesperación, ansiedad y desconcierto. Por ser inesperada deja a los dolientes aturdidos, ocasionando en algunos casos un duelo más prolongado. Entre este tipo de muertes se encuentran: el suicidio, muerte súbita, accidentes y homicidios. <br><br> En el caso especial del suicidio los familiares tienen sentimientos muy específicos como lo son: la culpa, ira, vergüenza y rechazo.
          p(numero="2" titulo="Muerte súbita") Los dolientes presentan un estado de incredulidad por la noticia repentina del fallecimiento, en algunas ocasiones la culpa suele ser el sentimiento más común.
          p(numero="3" titulo="Muerte por enfermedad") En este tipo de muertes la familia suele anticiparse al duelo, ya que la noticia del fallecimiento del ser querido será inminente. Esto provoca que el sentimiento de angustia no sea tan fuerte como en los casos anteriores.
          p(numero="4" titulo="Muerte de personas de edad avanzada") El sufrimiento de la familia depende de la calidad de vida que tuviese el ser querido al momento de su deceso, por ejemplo si la persona no tenía buen estado de salud tanto físico como mental, los familiares tienden a sufrir menos de dolor y pena, ya que toman este suceso como un alivio tanto para ellos como para el fallecido.
          p(numero="5" titulo="Muerte de un hijo") Se considera entre las muertes más difíciles de superar, su dolor puede tardar años en superarse y el sentimiento de culpa es mayor que en otros casos, porque los padres sienten que han fallado en su rol de cuidador-protector.
          p(numero="6" titulo="Muerte de un progenitor") El dolor de esta muerte también suele ser profundo dependiendo de la edad del progenitor y el tipo de relación que se tenía con el ser querido, entre mayor apego mayor dolor. El hijo (a) tendrá sentimientos de desolación y desamparo.
          p(numero="7" titulo="Muertes múltiples") Este tipo de muertes son por sí mismas más difíciles de superar debido a que no es solo un miembro de la familia quien ha fallecido, son más y probablemente el círculo de personas que pudiesen apoyar el proceso de duelo; por ello, en este tipo de muertes los sobrevivientes tienen sentimientos de irrealidad total, incredulidad, angustia y desespero. Normalmente el estado inicial de shock es más profundo y toma más tiempo salir de este.
        

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Es importante destacar que la forma en cómo se vive el duelo depende de factores como la edad del fallecido, tipo de muerte, relación con el fallecido y por último la ayuda y apoyo que se recibe por parte de los familiares. Existen ciertos cuidados primarios para la atención de los deudos, ¿cuáles son? A continuación, se presentan las características que usted debe considerar en un momento de duelo.

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/tema2/icon5.svg' alt='AvatarTop' style='width:125px;')
          .tarjeta.tarjeta-white
            .p-4.ps-0
              h3 La escucha
              p.mb-3 Escuchar es un acto de identificación de una expresión comunicativa. En caso de duelo, es importante reconocer las emociones y manifestaciones de un deudo: ¿qué siente?
        
      .col-lg-11
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/tema2/icon6.svg' alt='AvatarTop' style='width:125px;')
          .tarjeta.tarjeta-white
            .p-4.ps-0
              h3 La comprensión
              p.mb-3 ¿Qué quiere decir el deudo? La respuesta que se encuentre a esta pregunta muestra su interés por el mensaje y manifestación de un deudo.
        
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/tema2/icon7.svg' alt='AvatarTop' style='width:125px;')
          .tarjeta.tarjeta-white
            .p-4.ps-0
              h3 La empatía
              p.mb-3 Si bien la empatía convoca un apoyo a los otros, en el contexto del duelo es su capacidad de ponerse en la situación del deudo y entender sus reacciones.
        
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/tema2/icon8.svg' alt='AvatarTop' style='width:125px;')
          .tarjeta.tarjeta-white
            .p-4.ps-0
              h3 El acompañamiento
              p.mb-3 Acompañar comienza con la interpretación de las necesidades del deudo, ¿qué necesita para que se sienta apoyado?
        
    .row.justify-content-center
      .col-lg-8.mb-4
        p Se debe recordar que las personas no acuden a la funeraria porque así lo desean, lo hacen porque deben darle la despedida a su ser querido, por ello el trato hacia ellos deberá ser con empatía, delicado y sobre todo respetuoso. También debemos tener claro que cada persona es diferente, siente a su manera y por lo tanto, avanza a su ritmo; de igual forma ocurre con el duelo, por esto es importante respetar los tiempos de las diferentes etapas del duelo y entender claramente las características de cada tipo de cliente que acude a una empresa funeraria para brindar la ayuda necesaria.
      .col-lg-4.col-sm-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema2/img7.jpg', alt='Servicio funerario', style='width:420px;')

    .row.justify-content-center.mb-5
      .col-lg-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/tema2/icon9.svg' alt='AvatarTop' style='width:155px;')
          .tarjeta.tarjeta-white--color-red
            .p-4.ps-0.py-5
              p.mb-0 Reconocemos que la presentación temática relacionada con el duelo merece una revisión desde otros campos del conocimiento como la psicología. Aquí se hizo una descripción grosso modo de este aspecto, sin embargo, seguimos invitándole a la ampliación de esta a partir de la observación del “Cortometraje Duelo”, el cual se encuentra en el material complementario.

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

<style lang="sass" scoped></style>
