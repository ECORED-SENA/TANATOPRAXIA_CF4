<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Traslado de los restos mortales
    
    .row.justify-content-center
      .col-xl-8.col-md-10.col-lg-10.mb-4
        p.mb-4 Todo el personal que trabaje con la manipulación, manejo y transporte de un resto mortal, cadáver o restos óseos, debe entender y aplicar diferentes conocimientos durante su manipulación, garantizando la aplicación de los principios de precaución y dignidad humana durante todo el momento de la manipulación del cadáver, desde su recepción hasta su disposición final, y lo más importante, respetar las necesidades familiares, independientemente de su cultura y su religión a lo largo de todas las gestiones realizadas con ellos. Estas actividades de traslado siempre deben estar enmarcadas bajo la planificación.
        p.mb-4 El traslado de un resto mortal se desarrolla en tres etapas:
        .row.justify-content-center
          .col-auto.mb-2.px-1
            figure
              img.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='Traslado inicial', style='width:218px;')
          .col-auto.mb-2
            figure
              img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='Traslado intermedio', style='width:218px;')
          .col-auto.mb-2.px-1
            figure
              img.mx-auto(src='@/assets/curso/tema4/img3.svg', alt='Traslado final', style='width:218px;')
        
      .col-xl-4.col-lg-6.mb-4.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema4/img4.svg', alt='imagen ambiental', style='width:435px;')

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 A continuación, se hará una aproximación a cada etapa con el propósito que usted identifique y valore lo que sucede en ella desde los aspectos normativos hasta los protocolos.

    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Traslado inicial

    p.mb-5 El traslado inicial es mover un cadáver, ya sean restos humanos o restos óseos, desde el sitio original de deceso (casa, centro hospitalario o morgue) hasta las funerarias, donde se continuará con la prestación del servicio. Este proceso se inicia con la recepción del cadáver una vez realizados los acuerdos con el cliente sobre la prestación del servicio funerario. Para iniciar el traslado inicial se debe:
    
    .row.fondo-verde--margen.mb-5(style='background: linear-gradient(180deg,#ffffff,#71C6C1, #ffffff);')
      .col-lg-12.px-5.mt-5.fondo-verde
        .row.justify-content-center.mt-5
          .col-lg-10
            LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    
    
    p.mb-4 Luego de realizar la recepción y adecuación del cadáver para el inicio del traslado inicial, el proceso de traslado deberá seguir los siguientes lineamientos (ICONTEC, 2017):
    
    .tarjeta.tarjeta-fondito.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4 Usar elementos de protección
            .cajon-b.abajo-derecha.color-primario.p-0.mb-5
              p.mb-0 Gafas, guantes, tapabocas y traje de protección antiluidos - Bata. La selección y uso correcto de los elementos mencionados son un mecanismo exigido por lineamientos sanitarios. Cuando usted los implementa está disminuyendo riesgos biológicos, químicos o físicos para la sociedad y usted. 
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img5.jpg', alt='elementos de protección', style="width: 456px;")
        
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img6.jpg', alt='Codiciones de aislamiento', style="width: 456px;")
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4.mb-4 Disponer el cadáver en condiciones de aislamiento y aseguramiento dentro del vehículo
            .cajon-b.color-primario.p-0.mb-5
              p.mb-0 Para esto del vehículo funerario contará con espacio separado y destinado para tal fin, donde se ubicará la camilla con el fallecido, el sistema de retención deberá estar correctamente ajustado al cuerpo del fallecido para evitar el volcamiento del cuerpo por movimientos bruscos o accidentes de tránsito. La camilla deberá fijarse en el piso de esta cámara de aislamiento para evitar movimientos bruscos que produzcan lesiones en el fallecido al golpearse contra las paredes de este. También se hará uso de un cobertor de plástico para cubrir el cuerpo del fallecido.
              
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4.mb-4 Transportar el cadáver desde su lugar de recepción hasta el lugar de destino
            .cajon-b.abajo-derecha.color-primario.p-0.mb-5
              p.mb-0 Este transporte se deberá realizar bajo los lineamientos de conducción y respetando las señales de tránsito y transporte.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img7.jpg', alt='Transportar el cadaver', style="width: 456px;")
        
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img8.jpg', alt='Correcta entrega del cadaver', style="width: 456px;")
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4.mb-4 Entregar el cadáver con sus pertenencias y documentos al personal responsable de continuar con la prestación del servicio
            .cajon-b.color-primario.p-0.mb-5
              p.mb-0 Este procedimiento de entrega podrá realizarse directamente al embalsamador, al encargado de la recepción de los cuerpos en los hornos crematorios o cementerios, es esencial realizar una adecuada entrega del cadáver y sus pertenecías para dar continuidad con el proceso de cadena de custodia y dar por terminado este proceso donde se ve involucrado el manejo del cadáver.
              
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4.mb-4 Realizar la desinfección del vehículo y elementos usados durante el traslado  
            .cajon-b.abajo-derecha.color-primario.p-0.mb-5
              p.mb-0 Todos los insumos que fueron usados durante este proceso pasan por un proceso de desinfección con el cual se garantice la disminución total o parcial de los agentes patógenos que allí pudiesen alojarse, ya que todo cuerpo manipulado debe tratarse como potencialmente peligroso por su capacidad de ser huésped de innumerables enfermedades.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img9.jpg', alt='Desinfección de vehículo funerario', style="width: 456px;")
    
    
    p.mb-4 Realizado el traslado, es importante ampliar la información en relación con la desinfección, entendiendo esta como la eliminación de microorganismos patógenos que se encuentran en objetos o material y que visiblemente no es posible percibirlos a simple vista, es por ello, que se necesitan productos más fuertes para que penetren más a fondo y puedan eliminar microorganismos. Algunos de estos productos son: hipoclorito de sodio y amonios cuaternarios. A continuación se puede ver la caracterización de cada uno de estos productos.

    .row.justify-content-center.mb-4
      .col-lg-7
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 Empezando por el hipoclorito de sodio, uno de los desinfectantes más comúnmente usados en el campo funerario. El principio activo de esta solución es la liberación de cloro molecular que al mezclarse con agua genera el ácido hipocloroso; la efectividad de este compuesto se disminuirá por el pH, debido a que actúa mejor en un pH neutro que ácido, la presencia de material orgánica y su nivel de exposición a la luz, Se recomienda realizar su dilución en contenedores opacos.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema4/img10.jpg', alt='Hipoclorito de sodio', style="width: 456px;")

    p.mb-5 La medición de la concentración de cloro activo es fundamental para determinar la cantidad del desinfectante a usar, este se mide en partes por millón (PPM) o gramos por litro (gr/l) de modo que 1000 PPM=1 gr/l o lo que es lo mismo 1 PPM = 1 mg/l. Ahora, para hacer la dilución de una solución concentrada de hipoclorito de sodio se utiliza la siguiente ecuación:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img.mx-auto(src='@/assets/curso/tema4/img11.svg', alt='formula', style="width: 410px;")

    .row.justify-content-center.mb-5

      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon6.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es el volumen de la dilución madre.
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon7.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es la concentración de la dilución madre.
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon8.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es el volumen de la disolución final o diluida.
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon9.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es la concentración de la disolución final o diluida.

    p.mb-4 El último producto son los amonios cuaternarios, sus propiedades son antimicrobianas, de manera que proporciona soluciones fungicidas, bactericidas y viricidas al mismo tiempo, sus ingredientes activos generalmente son considerados menos tóxicos que el cloro y los fenólicos, y menos dañinos para el medioambiente y la salud humana que otros desinfectantes de uso habitual, porque sus moléculas tienen gran habilidad para sobrevivir al proceso de remoción de patógenos, lo que conlleva a eliminar un número mayor de microorganismos utilizando cantidades menores de solución desinfectante.
    .row.justify-content-center.mb-5
      .col-lg-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img(style='min-width:10%')
            img.mx-auto(src='@/assets/curso/tema2/icon9.svg' alt='AvatarTop' style='width:155px;')
          .tarjeta.tarjeta-white--color-red
            .p-4.ps-4.mt-3.pt-5
              p.mb-0 La desinfección del vehículo, insumos y elementos usados durante el proceso de traslado deberá basarse en las especificaciones del fabricante, para evitar posibles daños y deterioro en los materiales por mal uso de los agentes desinfectantes.




    separador
    #t_4_2.titulo-segundo
      .h2 4.2 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    separador
    #t_4_3.titulo-segundo
      .h2 4.3 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    separador
    #t_4_4.titulo-segundo
      .h2 4.4 

    //.row.align-items-start
      .col-auto        
        .round--number
          p 1
      .col
        .tarjeta.tarjeta--gris
          p Tipos de
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: 'Paso 1',
        texto:
          'Realizar la verificación de los documentos tales como certificado de defunción, documento de identificación del cuerpo fallecido, documentos del ente judicial en caso de muerte violenta y orden de servicio.',
        icono: require('@/assets/curso/tema4/icon1.svg'),
      },
      {
        titulo: 'Paso 2',
        texto:
          'Confirmar la autenticidad y diligenciamiento de los documentos solicitados.',
        icono: require('@/assets/curso/tema4/icon2.svg'),
      },
      {
        titulo: 'Paso 3',
        texto: 'Identificar correctamente el cadáver.',
        icono: require('@/assets/curso/tema4/icon3.svg'),
      },
      {
        titulo: 'Paso 4',
        texto:
          'Documentar el estado del cadáver y sus pertenencias en formatos establecidos por la organización.',
        icono: require('@/assets/curso/tema4/icon4.svg'),
      },
      {
        titulo: 'Paso 5',
        texto:
          'Informar a los deudos sobre los procedimientos que se realizarán.',
        icono: require('@/assets/curso/tema4/icon5.svg'),
      },
    ],
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
