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
        
      .col-8.col-lg-6.col-xl-4.mb-4.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema4/img4.svg', alt='imagen ambiental', style='width:435px;')

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 A continuación, se hará una aproximación a cada etapa con el propósito que usted identifique y valore lo que sucede en ella desde los aspectos normativos hasta los protocolos.

    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Traslado inicial

    p.mb-5 El traslado inicial es mover un cadáver, ya sean restos humanos o restos óseos, desde el sitio original de deceso (casa, centro hospitalario o morgue) hasta las funerarias, donde se continuará con la prestación del servicio. Este proceso se inicia con la recepción del cadáver una vez realizados los acuerdos con el cliente sobre la prestación del servicio funerario. Para empezar el traslado inicial se debe:
    
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
              p.mb-0 Gafas, guantes, tapabocas y traje de protección antifluidos - bata. La selección y uso correcto de los elementos mencionados son un mecanismo exigido por lineamientos sanitarios. Cuando usted los implementa está disminuyendo riesgos biológicos, químicos o físicos para la sociedad y usted. 
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema4/img5.jpg', alt='elementos de protección', style="width: 456px;")
        
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img6.jpg', alt='Codiciones de aislamiento', style="width: 456px;")
          .col-md-5.mb-4.mb-md-0.align-self-center
            h4.mb-4 Disponer el cadáver en condiciones de aislamiento y aseguramiento dentro del vehículo
            .cajon-b.color-primario.p-0.mb-5
              p.mb-0 Para esto el vehículo funerario contará con espacio separado y destinado para tal fin, donde se ubicará la camilla con el fallecido, el sistema de retención deberá estar correctamente ajustado al cuerpo del fallecido para evitar el volcamiento del cuerpo por movimientos bruscos o accidentes de tránsito. La camilla deberá fijarse en el piso de esta cámara de aislamiento para evitar movimientos bruscos que produzcan lesiones en el fallecido al golpearse contra las paredes de este. También se hará uso de un cobertor de plástico para cubrir el cuerpo del fallecido.
              
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
    
    
    p.mb-4 Realizado el traslado, es importante ampliar la información en relación con la desinfección, entendiendo esta como la eliminación de microorganismos patógenos que se encuentran en objetos o material y que visiblemente no es posible percibirlos a simple vista, es por ello, que se necesitan productos más fuertes para que penetren más a fondo y puedan eliminar microorganismos. Algunos de estos productos son: hipoclorito de sodio y amonios cuaternarios. A continuación, se puede ver la caracterización de cada uno de estos productos.

    .row.justify-content-center.mb-4
      .col-lg-7
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 Empezando por el hipoclorito de sodio, uno de los desinfectantes más comúnmente usados en el campo funerario. El principio activo de esta solución es la liberación de cloro molecular que al mezclarse con agua genera el ácido hipocloroso; la efectividad de este compuesto se disminuirá por el pH, debido a que actúa mejor en un pH neutro que ácido, la presencia de materia orgánica y su nivel de exposición a la luz, Se recomienda realizar su dilución en contenedores opacos.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema4/img10.jpg', alt='Hipoclorito de sodio', style="width: 456px;")

    p.mb-5 La medición de la concentración de cloro activo es fundamental para determinar la cantidad del desinfectante a usar, este se mide en partes por millón (PPM) o gramos por litro (gr/l) de modo que 1000 PPM = 1 gr/l o lo que es lo mismo 1 PPM = 1 mg/l. Ahora, para hacer la dilución de una solución concentrada de hipoclorito de sodio se utiliza la siguiente ecuación:

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
      .h2 4.2 Traslado intermedio
    
    p.mb-4 Consiste en llevar los restos mortales de la sala de embalsamamiento al sitio de velación o lugar de donde se realizan los rituales de despedida. Estos pueden ser cerca del lugar de fallecimiento, entre ciudades o entre países.
    p.mb-4 Si el destino intermedio es la velación del cadáver, el conductor del vehículo tendrá que:
    .row.justify-content-center
      .col-lg-7.mb-4
        ul.lista-ul.ms-4
          li 
            i.fas.fa-atom
            p.mb-0 Adecuar el lugar el mobiliario de la sala de velación o transportarlo y ubicarlo en el sitio designado por la familia, en caso tal que sea velación en casa.
          li 
            i.fas.fa-atom
            p.mb-0 Verificar la identidad y estado externo del cadáver. 
          li 
            i.fas.fa-atom
            p.mb-0 Verificación del estado del cofre, urna de cenizas u otro contenedor.
          li 
            i.fas.fa-atom
            p.mb-0 Si llegase a encontrar un no favorable en estas revisiones, tendrá que tomar acciones correctivas, con el fin de garantizar la correcta presentación del fallecido.
          li 
            i.fas.fa-atom
            p.mb-0 Hacer entrega del cadáver y el lugar de velación al responsable del servicio. 
          li 
            i.fas.fa-atom
            p.mb-0 Dejar registro escrito de todos los procesos realizados.
        
      .col-lg-5.mb-4
        figure.mb-3
          img.mx-auto(src="@/assets/curso/tema4/img12.jpg", alt="Sitio de velacion - funeraria ", style="width:456px;")
    
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 La Ley 9 de 1979, menciona en su artículo 529, que cuando se hace un traslado de un resto mortal, el Ministerio de Salud deberá:
    
    .row.justify-content-center
      .col-lg-12
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px; border-top: solid  2px #AFAFAF; border-bottom: solid  2px #AFAFAF;')
          .tarjeta-numerada__numero
            .h1 a
          p.mb-4 Determinar los requisitos generales que se deberán cumplir cuando el traslado se haga dentro del territorio nacional y, particularmente, en este mismo caso, aquellos relacionados con la preservación de los cadáveres, teniendo en cuenta los siguientes factores:
          .row(style='justify-content: space-around')
            .col-7.col-lg-3.mb-4.mb-lg-0
              figure.mb-2
                img.mx-auto(src="@/assets/curso/tema4/img13.svg", alt="imagen ambiental", style="width:456px;")
            .col-lg-8
              ol.lista-ol--cuadro.lista-ol--separador
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 1]
                  p.mb-0 Causa de muerte, debidamente certificada.
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 2]
                  p.mb-0 Tiempo del traslado con relación a la hora de la muerte.
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 3]
                  p.mb-0 Duración del traslado.
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 4]
                  p.mb-0 Medio de transporte del cadáver.
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 5]
                  p.mb-0 Condiciones climatológicas del lugar de defunción, de las regiones de tránsito y del lugar de destino que puedan influir en el desarrollo de los fenómenos de putrefacción.
    
    .row.justify-content-center.mb-5
      .col-lg-7
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px; border-bottom: solid  2px #AFAFAF;')
          .tarjeta-numerada__numero
            .h1 b
          p.mb-4 Determinar de acuerdo con los convenios internacionales existentes, los sistemas de preservación de cadáveres, cuando su traslado se haga fuera de los límites de la nación.
        
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px; border-bottom: solid  2px #AFAFAF;')
          .tarjeta-numerada__numero
            .h1 c
          p.mb-4 Fijar los requisitos que deberán cumplir las personas y establecimientos autorizables para el embalsamamiento de cadáveres y determinar cuáles son las técnicas más adecuadas.
        
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px; border-bottom: solid  2px #AFAFAF;')
          .tarjeta-numerada__numero
            .h1 d
          p.mb-4 En concordancia con los convenios internacionales, establecer las condiciones que, en cuanto a número, material de fabricación y hermetismo, deberán llenar los ataúdes y los embalajes de estos, cuando el traslado se haga fuera del país.
        
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px; border-bottom: solid  2px #AFAFAF;')
          .tarjeta-numerada__numero
            .h1 e
          p.mb-4 Determinar los requisitos que deberán reunir los vehículos destinados al transporte de cadáveres.
          
        .tarjeta-numerada.color-primario.px-5.pb-2(style='padding-top: 30px;')
          .tarjeta-numerada__numero
            .h1 f
          p.mb-4 Establecer los requisitos de orden sanitario que se deberán llenar ante los consulados de la nación para que estos puedan autorizar el trámite hacia el país, reglamentando la constatación correspondiente por parte de las autoridades sanitarias.
          
      .col-8.col-lg-5.align-self-center
        figure.mb-2
          img.mx-auto(src="@/assets/curso/tema4/img14.svg", alt="imagen ambiental", style="width:526px;")
    
    .row.justify-content-center.mb-4
      .col-lg-4
        figure.mb-2
          img.mx-auto(src="@/assets/curso/tema4/img15.jpg", alt="Traslado de cadaver a su país", style="width:366px;")
      .col-lg-8
        p.mb-4 Cuando se realiza un traslado con motivo de repatriación, se seguirán los lineamientos del Acuerdo Internacional sobre el transporte de cadáveres dado en Berlín en 1937, donde se establece una reglamentación para que los diferentes países adscritos a este acuerdo acepten la entrada, o el paso en tránsito por sus respectivos territorios, de los cadáveres de personas fallecidas en el territorio de alguno de los demás países. Entre sus disposiciones generales se dicta que, sin importar la vía de transporte, ni las condiciones de los cadáveres se necesita un permiso de tránsito especial donde claramente se encuentre especificado: nombres completos, edad, lugar, fecha y causa de fallecimiento, todo esto expedido por la autoridad competente del lugar del fallecimiento.

    p.mb-5 También se deberá adjuntar el acta de defunción y testimonios oficiales que determinen que el transporte no representa un riesgo para la salud pública y que las condiciones necesarias de embalaje cumplen con los requisitos. El embalaje de los cadáveres para el traslado debe realizarse con materiales impermeables, que sean resistentes y absorban cualquier filtración de líquido y generación de olores, aclarando las características de adentro hacia afuera. Estos son:
    
    .row.justify-content-center.mb-5

      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-container2.tarjeta-oscura
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema4/num1.svg", alt="icono", style="width:105px;").m-auto
              p.mb-0 #[strong  Primer ataúd]
            .tarjetaTxt2
              figure.mb-3
                img(src="@/assets/curso/tema4/img16.jpg", alt="imagen ambiental", style="width:290px;").m-auto
              .px-3
                .bg-num1
                  p.mb-2 #[strong  Primer ataúd]
                  p.mb-0 Uso de un ataúd no reutilizable, ya que está en contacto con el cuerpo, de material no impermeable, a prueba de filtraciones y que garantice un cierre hermético y sobre todo resistente a la manipulación.
    
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-container2.tarjeta-verde
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema4/num2.svg", alt="icono", style="width:105px;").m-auto
              p.mb-0 #[strong Material absorbente]
            .tarjetaTxt3
              figure.mb-3
                img(src="@/assets/curso/tema4/img17.jpg", alt="imagen ambiental", style="width:290px;").m-auto
              .px-3
                .bg-num2
                  p.mb-2 #[strong Material absorbente]
                  p.mb-0 Material cuya función es la retención de líquidos que pudiesen salir del cuerpo y quedar atrapados en el primer ataúd. Este material se encuentra entre el primer y segundo ataúd, no se permite el uso del aserrín de madera.
    
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-container2.tarjeta-oscura
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema4/num3.svg", alt="icono", style="width:105px;").m-auto
              p.mb-0 #[strong Segundo ataúd]
            .tarjetaTxt2
              figure.mb-3
                img(src="@/assets/curso/tema4/img18.jpg", alt="imagen ambiental", style="width:290px;").m-auto
              .px-3
                .bg-num3
                  p.mb-2 #[strong Segundo ataúd]
                  p.pb-4 Elaborado en un material resistente, de fácil limpieza y desinfección, a prueba de filtraciones y que sirve para contener el ataúd número uno y protegerlo del medio circundante.
    
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-container2.tarjeta-verde
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema4/num4.svg", alt="icono", style="width:105px;").m-auto
              p.mb-0 #[strong Recubrimiento final]
            .tarjetaTxt3
              figure.mb-3
                img(src="@/assets/curso/tema4/img19.jpg", alt="imagen ambiental", style="width:290px;").m-auto
              .px-3
                .bg-num4
                  p.mb-2 #[strong Recubrimiento final]
                  p.mb-0 Es revestir el segundo ataúd con un material resistente (cartón grueso de alto calibre y asas de sujeción) que permita su manipulación por parte de las aerolíneas y su personal.
    
    p.mb-4 Dentro de las actividades de inspección, vigilancia y control realizadas por la autoridad sanitaria, está la verificación de las condiciones de embalaje, inspección física y los requerimientos documentales. Una vez se cumpla con lo anteriormente descrito, se expedirá la autorización para la salida del territorio nacional, si por el contrario se realiza es la salida, se deberá expedir un salvoconducto.
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-2
        figure.mb-3
          img(src="@/assets/curso/tema4/img20.jpg", alt="Inspección de sanidad", style="width:450px;").m-auto
      .col-lg-7.mb-2
        .cajon.color-secundario.p-4
          p.mb-0 La inspección física será realizada por la autoridad competente, para este caso la autoridad de sanidad portuaria, y consiste en una inspección visual de las condiciones de embalaje del cadáver (que no exista deformidades, hundimientos, roturas, humedad u olores) antes de realizar el ingreso al medio de transporte. Los documentos requeridos para el ingreso del féretro y los cuales deberán estar acompañados de las autorizaciones consulares, sanitarias y policiales expedidas en el lugar de fallecimiento, son:
    
    .row.justify-content-center.mb-5
      .col-lg-12
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span #[strong 1]
            p.mb-0 Autorización de salida del cadáver o los restos óseos, expedida por el país de origen y debe contener los datos que a continuación se mencionan, nombres y apellidos completos, edad, lugar del nacimiento y de fallecimiento, hora y fecha en que se produjo el deceso, medio de transporte usado, fecha de salida del cadáver del país y destino final, nombre del aeropuerto de entrada en Colombia y ciudad.
          li 
            .lista-ol--cuadro__vineta
              span #[strong 2]
            p.mb-0 Permiso de traslado, otorgado por la autoridad judicial si la muerte fue violenta.
          li 
            .lista-ol--cuadro__vineta
              span #[strong 3]
            p.mb-0 Registro civil de defunción.
          li 
            .lista-ol--cuadro__vineta
              span #[strong 4]
            p.mb-0 Licencia de exhumación, certificado de defunción y licencia de inhumación.
          li 
            .lista-ol--cuadro__vineta
              span #[strong 5]
            p.mb-0 Declaración de embalsamamiento y embalaje, certificando el proceso realizado, detallando forma y método en el que se realizó el proceso de preparación del cadáver, hora y fecha del procedimiento, cantidad y forma de los embalajes empleados para el transporte del cadáver.
          li 
            .lista-ol--cuadro__vineta
              span #[strong 6]
            p.mb-0 Certificado que el ataúd sólo contiene el cadáver en cuestión, deberá estar firmado por quien responda por este procedimiento y contar con los datos de la funeraria.
    

    .bloque-texto-a.color-secundario.p-4.p-md-5(style='margin-bottom:60px;')
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Para el envío de cadáveres y restos óseos al exterior, o sea, para su salida, la autoridad sanitaria certifica que el cadáver y su ataúd cumplen con los requisitos sanitarios exigidos por el país de destino, para esto se requiere contar con la siguiente documentación: 1. Certificado de defunción; 2. Registro civil de defunción; 3. Licencia de inhumación o cremación, que aclare el destino final del cadáver; 4. Declaración de embalsamamiento y embalaje; 5. Licencia de exhumación, si es el caso del transporte de restos óseos y 6. Autorización para el traslado otorgado por el país de destino y que tiene que ser tramitado ante el consulado, embajada o representación diplomática. Por último, si existiese el tránsito de cadáveres y restos óseos por el país, se contará con:
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/tema4/img21.svg', alt='imagen ambiental', style='width:300px;')
    
    .row.justify-content-center
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-containerBasic.tarjeta-primario
          .tarjetaContent-basic
            .tarjetaImgX
              figure.mb-3
                img.mx-auto(src="@/assets/curso/tema4/icon10.svg", alt="icono", style="width:105px;")
              p.mb-0 Certificado de defunción y registro civil de defunción.
      
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-containerBasic.tarjeta-acentoContenido
          .tarjetaContent-basic
            .tarjetaImgX
              figure.mb-3
                img.mx-auto(src="@/assets/curso/tema4/icon11.svg", alt="icono", style="width:105px;")
              p.mb-0 Licencia de inhumación o cremación.
    
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-containerBasic.tarjeta-primario
          .tarjetaContent-basic
            .tarjetaImgX.pt-5
              figure.mb-3
                img.mx-auto(src="@/assets/curso/tema4/icon12.svg", alt="icono", style="width:105px;")
              p.mb-0 Declaración de embalsamamiento y embalaje.
      
      .col-auto.mb-4.px-2
        .tarjeta.tarjeta-containerBasic.tarjeta-acentoContenido
          .tarjetaContent-basic
            .tarjetaImgX.pt-2
              figure.mb-3
                img.mx-auto(src="@/assets/curso/tema4/icon13.svg", alt="icono", style="width:105px;")
              p.mb-0 Licencia de exhumación.

    separador
    #t_4_3.titulo-segundo
      .h2 4.3 Traslado final
    
    p.mb-4 El traslado final corresponde al uso de una carroza o coche fúnebre para transportar el cuerpo desde el lugar del funeral-velación hacia el lugar de despedida ceremoniosa según la religión o decisiones de la familia y posteriormente al cementerio u horno de cremación, donde se realizará el entierro, disposición o cremación de los restos. También será aplicable la definición de traslado final al procedimiento de restos óseos o entrega de cenizas, pertenencias, documentos e implementos a la persona responsable del servicio.
    
    .cajon.color-secundario.p-4.mb-4
      p.mb-0 En este traslado se deberá tener especial cuidado con el ataúd y la forma de conducción, para así evitar accidentes que afecten la finalización del servicio funerario. Los aspectos para considerar son:
    
    .row.justify-content-center.mb-4
      .col-7.col-lg-4.align-self-center
        figure.mb-4
          img.mx-auto(src="@/assets/curso/tema4/img22.svg", alt="imagen ambiental", style="width:435px;")
      .col-lg-8
        .row.justify-content-center
          .col-auto.px-2.mb-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/tema4/img23.svg", alt="El desfile mortuorio", style="width:218px;")
          .col-auto.px-2.mb-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/tema4/img24.svg", alt="El ataúd o la urna de las cenizas", style="width:218px;")
          .col-auto.px-2.mb-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/tema4/img25.svg", alt="Se verificará el desarrollo de las honras fúnebres según lo planificado.", style="width:218px;")
    
    .row.justify-content-center.mb-2
      .col-lg-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img(style='min-width:15%')
            img.mx-auto(src='@/assets/curso/tema4/img26.svg' alt='AvatarTop' style='width:155px;')
          .tarjeta.tarjeta-white--color-red(style='border-radius:0;')
            .p-4.ps-0.pt-5
              p.mb-0 La realización de los procesos de traslado de un cadáver no debe tomarse a la ligera porque lleva consigo la importancia y representación de darle al difunto sus últimos cuidados en esta tierra, por lo cual en muchos ritos funerarios constituye que el cuerpo cumple su retorno, representando un alivio al dolor de aquellos quienes han perdido a un ser querido. Al final este es el propósito más importante dentro de los traslados, siendo contemplados como una forma de reconstruir los vínculos desgarrados y afirmar la continuidad de la vida de las personas que han perdido un ser querido.

    
    
    separador
    #t_4_4.titulo-segundo
      .h2 4.4  Procesos de traslado relacionados con el COVID-19 

    p.mb-4 El proceso de traslado de una persona fallecida por el COVID-19 debe realizarse con especial cuidado y sobre todo siguiendo los lineamientos de bioseguridad establecidos para prevenir y salvaguardar la salud personal y pública, debido a que este virus puede sobrevivir durante varios días en superficies húmedas y frías. Para esto se debe recurrir al uso de desinfectantes que puedan neutralizar este agente patógeno.
    
    .row.justify-content-center.mb-4
      .col-lg-8.mb-2
        p.mb-0 Algunos de los principios generales para la gestión de cadáveres infectados con COVID-19, son en primer lugar, la gestión de cadáveres con casos confirmados o sospechosos por COVID-19, la evaluación preliminar y la realización del análisis de los riesgos. En segundo lugar, el personal encargado del transporte de estos cuerpos debe estar especialmente entrenado. En tercer y último lugar, los procedimientos realizados deben limitar la exposición al virus para así prevenir la propagación de este y respetar la dignidad de la persona fallecida durante todo el proceso. Así, si llegase a existir prácticas culturales que sean incompatibles con estas medidas imprescindibles, se debe hacer lo necesario para que la familia las entienda y las acepte.
      .col-lg-4.mb-2
        figure
          img.mx-auto(src="@/assets/curso/tema4/img27.svg", alt="imagen ambiental", style="width:360px;")

    .bloque-texto-a.reverse.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema4/img28.svg', alt='imagen ambiental', style='width:258px;')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-2 Las personas que participen en la manipulación física de los cuerpos de las personas fallecidas por COVID-19 deben tomar precauciones en la manipulación de los cadáveres, para evitar un posible contagio. Observa el siguiente video titulado “Equipo de protección personal”, donde se explican métodos para la apropiada manipulación de personas fallecidas por el COVID 19.
            .row.justify-content-end
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=iDnhA8nPFsM&t=1s" target="_blank" style='background-color: #f5f5f5')
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p
                        b(style="color: #12263f") Enlace web. 
                        b-none(style="color: #12263f") Equipo de protección personal. 
                        b(style="color: #12263f") COVID-19

    p.mb-4 Adicional a lo mencionado, dentro de las actividades de los prestadores de servicios de salud y de los servicios funerarios en el marco de las personas fallecidas por el COVID-19, deberán notificar la muerte de forma inmediata a la Secretaría de Salud y al Instituto Nacional de Salud (INS), usando la ficha epidemiológica 348 Infección Respiratoria Aguda (IRA) y posteriormente realizar el aislamiento del cadáver en el mismo sitio de defunción, utilizando los elementos de protección personal y seguir procedimientos de bioseguridad. Para este procedimiento se seguirán los siguientes pasos:

    .tarjeta.tarjeta-fondito.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-6.col-lg-5.mb-4.mb-md-0.align-self-center
            .cajon-b.abajo-derecha.color-primario.p-0.mb-4
              p.mb-0 Usar algodón impregnado en solución desinfectante para cubrir orificios naturales, envolver en tela antifluido o sábana el cadáver completamente sin retirar ningún elemento usado para su tratamiento. Luego embalar el cadáver usando una bolsa anteriormente mencionada, rociar con desinfectante el interior de esta antes de realizar el cierre final, posteriormente desinfectar el exterior de la bolsa. Luego se coloca la primera bolsa dentro de la segunda, y se repite el procedimiento de desinfección. Culminado este proceso, quien manipuló el cadáver deberá realizar la desinfección externa de los guantes usados con alcohol isopropílico al 70%.
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img29.jpg', alt='Envolver cadaver en tela antifluido', style="width: 456px;")
        
        .row.justify-content-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img30.jpg', alt='Traslado del cuerpo al equipo funerario', style="width: 456px;")
          .col-md-6.col-lg-5.mb-4.mb-md-0.align-self-center
            .cajon-b.color-primario.p-0.mb-4
              p.mb-4 Después de este embalaje, el personal de salud informará al personal funerario y se realizará la entrega del cuerpo siguiendo la ruta establecida, donde se garantizan las condiciones de bioseguridad sin poner en riesgo al personal circundante, en la morgue o depósito de cadáveres, este personal deberá realizar el depósito en el ataúd o contenedor de cremación y posterior traslado al destino final. Cabe aclarar que el personal de traslado funerario deberá usar los elementos de protección personal anteriormente descritos.
              p.mb-0 Se trasladará el cuerpo en un carro fúnebre destinado exclusivamente para este fin.
        .row.justify-content-center
          .col-md-6.col-lg-5.mb-4.mb-md-0.align-self-center
            .cajon-b.abajo-derecha.color-primario.p-0.mb-4
              p.mb-0 El personal del cementerio u horno crematorio deberá contar con los elementos de protección personal y demás medidas que garanticen su seguridad personal.
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img31.jpg', alt='Elementos de protección', style="width: 456px;")
        
        .row.justify-content-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img32.jpg', alt='Limpieza y desinfección del area', style="width: 456px;")
          .col-md-6.col-lg-5.mb-4.mb-md-0.align-self-center
            .cajon-b.color-primario.p-0.mb-4
              p.mb-0 Luego del retiro del cuerpo, la habitación u área de atención donde se realizó el aislamiento anteriormente descrito, deberá pasar por un proceso de limpieza y desinfección siguiendo las recomendaciones del comité de infecciones. Al igual se realizará la desinfección del vehículo y elementos usados durante el traslado.
              

    .row.justify-content-center.mb-4
      .col-lg-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img(style='min-width:15%')
            img.mx-auto(src='@/assets/curso/tema2/icon9.svg' alt='AvatarTop' style='width:158px;')
          .tarjeta.tarjeta-white--color-red(style='border-radius:0;')
            .p-4.ps-0.pt-5
              p.mb-0 La seguridad y salud de las personas que intervienen en la gestión de cadáveres es una prioridad. Por ello, se debe proporcionar equipos de protección personal y capacitación adecuada para la realización de un proceso ajustado a las directrices para el manejo de cadáveres con COVID-19. Todas estas medidas deben demostrar respeto hacia sus familiares y comunidades afectadas, y contemplando consideraciones especiales para sus prácticas y rituales culturales y religiosos.



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
