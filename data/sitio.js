// Contenido del sitio, separado del diseño.
//
// Los componentes (carpeta components/) saben CÓMO se ve cada cosa; este
// archivo dice QUÉ se muestra. Para sumar un servicio o una foto de un
// trabajo alcanza con agregar un elemento a la lista que corresponda:
// no hay que tocar HTML ni CSS.
//
// Lo usan solo componentes de SERVIDOR. Los datos de contacto viven en
// contacto.js (ver por qué ahí).

// --- Imágenes -------------------------------------------------------------------
// Importar una imagen (en vez de escribir su ruta como texto) le permite a Next
// leer el archivo al compilar: sabe su ancho y alto reales, genera versiones
// más chicas y un placeholder borroso. Si una ruta está mal, el build falla
// en vez de mostrar una imagen rota en producción.
//
// Son todas fotos reales de trabajos del cliente, y cada una se usa una sola
// vez en la página: repetir fotos se nota y le resta credibilidad.

import piletaSierras from "@/assets/img/pileta-sierras.jpg";
import cespedParque from "@/assets/img/cesped-parque.jpg";
import champasColocacion from "@/assets/img/champas-colocacion.jpg";
import piletaAntes from "@/assets/img/pileta-antes.jpg";
import piletaDespues from "@/assets/img/pileta-despues.jpg";
import piletaReposera from "@/assets/img/pileta-reposera.jpg";
import piletaCamino from "@/assets/img/pileta-camino.jpg";
// Segunda tanda (octubre 2026): galería y retrato del fundador.
import jardinAntes from "@/assets/img/jardin-antes.jpg";
import jardinDespues from "@/assets/img/jardin-despues.jpg";
import piletaPintada from "@/assets/img/pileta-pintada.jpg";
import barrioCesped from "@/assets/img/barrio-cesped.jpg";
import piletaAgua from "@/assets/img/pileta-agua.jpg";
import canteroFlores from "@/assets/img/cantero-flores.jpg";
import arbolesVereda from "@/assets/img/arboles-vereda.jpg";
import patioCesped from "@/assets/img/patio-cesped.jpg";
import parqueCerco from "@/assets/img/parque-cerco.jpg";
import cespedGaleria from "@/assets/img/cesped-galeria.jpg";
import canteroLetras from "@/assets/img/cantero-letras.jpg";
import fundador from "@/assets/img/fundador.jpg";

// --- Íconos ---------------------------------------------------------------------
// Phosphor, versión "ssr": son componentes que no necesitan JavaScript en el
// navegador, así que se pueden usar desde componentes de servidor.

import {
  Plant,
  Leaf,
  Scissors,
  TreeEvergreen,
  Shovel,
  Wall,
  SwimmingPool,
  Recycle,
  TestTube,
  Broom,
  PaintRoller,
  Funnel,
  Wrench,
  WhatsappLogo,
  Receipt,
  SunHorizon,
} from "@phosphor-icons/react/ssr";

// --- El negocio -----------------------------------------------------------------
// Frases tomadas del flyer y el banner que mandó el cliente.

export const NEGOCIO = {
  nombre: "JYJ Mantenimiento",
  rubro: "Jardines y Piscinas",
  lema: "Cuidamos lo que te rodea",
};

// --- Hero -----------------------------------------------------------------------

export const HERO = {
  foto: piletaSierras,
  alt: "Pileta limpia rodeada de césped recién cortado, con las sierras de fondo",
};

// --- Servicios de jardín (grilla "bento") ---------------------------------------
// `estilo` define el fondo de la celda: "foto", "oscura", "clara" o "acento".
// `columnas` y `filas` definen cuánto ocupa en la grilla de escritorio, que
// tiene 12 columnas. Las filas tienen que quedar completas (sumar 12):
//   fila 1: Césped (7) + Champas (5, ocupa 2 filas)
//   fila 2: Podas (4) + Cercos (3)            + [Champas sigue acá]
//   fila 3: Movimiento de suelo (7) + Cierres perimetrales (5)
// En tablet y celular estos números se ignoran (ver globals.css).

export const SERVICIOS_JARDIN = [
  {
    titulo: "Césped",
    detalle: "Corte y mantenimiento. Un césped cuidado realza tu casa.",
    icono: Plant,
    estilo: "foto",
    foto: cespedParque,
    alt: "Parque amplio con el césped parejo, rodeado de cercos verdes",
    columnas: 7,
  },
  {
    titulo: "Colocación de champas",
    detalle: "Renová tu jardín de forma rápida y efectiva.",
    icono: Leaf,
    estilo: "foto",
    foto: champasColocacion,
    alt: "Champas de césped recién colocadas junto a un parque ya asentado",
    columnas: 5,
    filas: 2,
  },
  {
    titulo: "Podas",
    detalle: "Árboles, arbustos y plantas.",
    icono: Scissors,
    estilo: "oscura",
    columnas: 4,
  },
  {
    titulo: "Cercos",
    detalle: "Instalación y mantenimiento.",
    icono: TreeEvergreen,
    estilo: "clara",
    columnas: 3,
  },
  {
    titulo: "Movimiento y nivelación de suelo",
    detalle: "El terreno parejo, listo para sembrar o colocar champas.",
    icono: Shovel,
    estilo: "acento",
    columnas: 7,
  },
  {
    titulo: "Cierres perimetrales",
    detalle: "Para delimitar y proteger tu terreno.",
    icono: Wall,
    estilo: "clara",
    columnas: 5,
  },
];

// --- Servicios de pileta --------------------------------------------------------
// La lista que pidió el cliente, en su orden. Van solo con título: son
// servicios que se entienden solos, y así la lista se lee de un vistazo.

export const SERVICIOS_PILETA = [
  { titulo: "Mantenimiento de piscina", icono: SwimmingPool },
  { titulo: "Recuperación de agua", icono: Recycle },
  { titulo: "Nivelación de pH", icono: TestTube },
  { titulo: "Desagote y cepillado", icono: Broom },
  { titulo: "Pintura", icono: PaintRoller },
  { titulo: "Cambio de material filtrante", icono: Funnel },
  { titulo: "Arreglos de construcción", icono: Wrench },
];

// --- Antes y después ------------------------------------------------------------
// La misma pileta, fotografiada desde el mismo ángulo. Es la prueba más
// fuerte del trabajo: por eso tiene su propio comparador interactivo.

export const ANTES_DESPUES = {
  antes: { foto: piletaAntes, alt: "Pileta con el agua verde, antes del tratamiento" },
  despues: { foto: piletaDespues, alt: "La misma pileta con el agua limpia y transparente, después del tratamiento" },
};

// --- Cómo trabajamos ------------------------------------------------------------
// Lo atiende una sola persona: quien pasa el presupuesto es quien hace el
// trabajo. Es un argumento de venta (trato directo), no algo para esconder.

export const PASOS = [
  {
    titulo: "Nos escribís",
    texto: "Contanos qué necesitás por WhatsApp. Si podés, mandá fotos del jardín o la pileta.",
    icono: WhatsappLogo,
  },
  {
    titulo: "Te pasamos el presupuesto",
    texto: "Sabés qué incluye el trabajo antes de empezar.",
    icono: Receipt,
  },
  {
    titulo: "Hacemos el trabajo",
    texto: "Y te dejamos el espacio listo para disfrutar.",
    icono: SunHorizon,
  },
];

// --- Trabajos (composición en cascada) ------------------------------------------
// `posicion` ubica cada foto en la cascada: las tres se superponen apenas
// giradas, como fotos apoyadas sobre una mesa.

export const TRABAJOS = [
  {
    foto: piletaReposera,
    alt: "Pileta limpia y parque cortado, con una reposera al borde",
    posicion: "izquierda",
  },
  {
    foto: canteroFlores,
    alt: "Cantero con flores, plantas y piedras en la vereda de un edificio",
    posicion: "centro",
  },
  {
    foto: piletaCamino,
    alt: "Camino de lajas en el césped hacia la pileta",
    posicion: "derecha",
  },
];

// --- Galería (más trabajos, debajo de la cascada) -------------------------------
// Vacía por ahora: el cliente va a mandar más fotos. Para sumar una:
//   1. copiar la foto en assets/img/ (nombre en minúsculas, sin espacios)
//   2. importarla arriba de todo, junto a las otras
//   3. agregar { foto: nombreImportado, alt: "qué se ve en la foto" } acá
// Mientras la lista esté vacía, la galería no se muestra. Las fotos pueden
// ser verticales u horizontales: todas se recortan al cuadrado, centradas.
// Si lo importante queda afuera del recorte, `posicion` dice desde dónde
// recortar (como object-position en CSS): "50% 100%" = centrada a lo ancho
// y pegada abajo.
// `etiqueta` (opcional) se muestra como una pastilla sobre la foto.
//
// El orden importa: primero el antes y después del parque (la prueba más
// fuerte, y así quedan uno al lado del otro en cualquier pantalla), y
// después se alternan jardines y piletas para que no queden todas juntas.

export const GALERIA = [
  {
    foto: jardinAntes,
    alt: "Antes: parque con el pasto alto y maleza, mientras dos operarios lo desmalezan con bordeadoras",
    etiqueta: "Antes",
  },
  {
    foto: jardinDespues,
    alt: "Después: el mismo parque terminado, con el césped corto y parejo",
    etiqueta: "Después",
  },
  { foto: piletaPintada, alt: "Pileta vacía recién pintada de celeste" },
  { foto: barrioCesped, alt: "Césped cortado entre las casas de un barrio, junto a un camino de tierra" },
  { foto: piletaAgua, alt: "Agua de pileta limpia y cristalina, vista de cerca" },
  { foto: arbolesVereda, alt: "Árboles jóvenes recién plantados a lo largo de una vereda" },
  { foto: patioCesped, alt: "Césped recién cortado junto a un patio, con un cantero de plantas al fondo" },
  { foto: parqueCerco, alt: "Parque con el césped cortado y un cerco verde al fondo, al sol de la tarde" },
  { foto: cespedGaleria, alt: "Césped parejo junto a una galería techada" },
  { foto: canteroLetras, alt: "Cantero de tierra preparado bajo un sauce, detrás de un cartel de letras gigantes" },
];

// --- Reseñas de Google ----------------------------------------------------------
// Copiadas a mano de la ficha de Google del negocio (no se cargan solas:
// para eso hace falta la API de Google Places, que pide una clave y una
// cuenta de facturación; para una landing no vale la pena).
//
// Cuando entren reseñas nuevas, actualizar `promedio` y sumarlas a la lista.
// Solo van las que tienen texto: las que son solo estrellas ya cuentan en el
// promedio. El texto va tal cual lo escribió la persona (sin corregirlo: es
// una cita, y una reseña "demasiado prolija" parece inventada). Del nombre
// se muestra el nombre de pila y la inicial del apellido, como hacen la
// mayoría de los sitios: alcanza para que se note que es una persona real
// sin exponer su nombre completo.

export const CALIFICACION = {
  promedio: 5,
  fuente: "Google",
};

export const RESENAS = [
  {
    nombre: "Nahuel A.",
    texto: "Servicio excepcional. Muy prolijos respetuosos y cumplidores!!! Se recomienda 100%",
    estrellas: 5,
  },
];

// --- Misión y visión ------------------------------------------------------------
// Texto del cliente, sin cambios. Cada uno tiene dos oraciones: la primera
// (`frase`) dice qué es, y se muestra grande; la segunda (`detalle`) lo
// desarrolla, en letra normal. Separarlas así le da jerarquía al bloque sin
// tocar una palabra.

export const MISION_VISION = [
  {
    titulo: "Nuestra misión",
    frase:
      "Brindar servicios de jardinería, mantenimiento de espacios verdes y piscinas con calidad, compromiso y responsabilidad, buscando la plena satisfacción de nuestros clientes a través de un trabajo eficiente, personalizado y confiable.",
    detalle:
      "Nos esforzamos por cuidar cada espacio como si fuera propio, construyendo relaciones duraderas basadas en la confianza, el respeto y la excelencia en el servicio.",
  },
  {
    titulo: "Nuestra visión",
    frase:
      "Ser una empresa de referencia en servicios de jardinería y mantenimiento de jardines y piscinas en Juana Koslay y la región, reconocida por la calidad de nuestro trabajo, la responsabilidad y el compromiso con cada cliente.",
    detalle:
      "Aspiramos a crecer de manera sostenida, ampliar nuestro equipo de trabajo, incorporar nuevas herramientas y servicios, y expandir nuestra presencia a más localidades, manteniendo siempre los valores que nos identifican.",
  },
];

// --- Sobre mí (el fundador) -----------------------------------------------------
// Texto del cliente, sin cambios. El primer párrafo se muestra como entrada
// (más grande) y el último como cierre (con la letra de los títulos): ver
// .autor__parrafos en globals.css.
// `anios` sale del texto ("más de 12 años") y se muestra como dato sobre la
// foto. Mientras `nombre` sea null no se muestra la firma: falta que el
// cliente confirme cómo quiere que figure.

export const AUTOR = {
  nombre: null,
  rol: "Fundador de JyJ Mantenimiento",
  foto: fundador,
  alt: "Retrato del fundador de JyJ Mantenimiento, sonriendo, con saco azul y camisa blanca",
  anios: 12,
  titulo: "Una historia de esfuerzo,",
  tituloTenue: "compromiso y crecimiento.",
  parrafos: [
    "Soy el fundador de JyJ Mantenimiento – Jardines y Piscinas, una empresa que representa más de 12 años de esfuerzo, dedicación y trabajo constante para crecer, mejorar y brindar cada día un mejor servicio.",
    "A lo largo de este camino, aprendí que construir una empresa no se trata solamente de realizar un buen trabajo, sino también de cumplir con la palabra, asumir responsabilidades y generar relaciones de confianza duraderas con cada cliente.",
    "Mi compromiso es ofrecer soluciones de jardinería y mantenimiento de jardines y piscinas con profesionalismo, responsabilidad y atención a cada detalle, entendiendo que detrás de cada servicio hay personas que confían en nosotros y esperan resultados de calidad.",
    "Creo en el valor del trabajo bien hecho, en la mejora continua y en la importancia de crecer con bases sólidas. Por eso, trabajo día a día para fortalecer nuestro equipo, incorporar nuevas herramientas y ampliar nuestros servicios, con el objetivo de llevar JyJ Mantenimiento a más localidades y convertirnos en una empresa de referencia en nuestra región.",
    "Este proyecto es el resultado de años de esfuerzo y perseverancia, pero también de una visión clara de futuro: seguir creciendo sin perder nuestra esencia, nuestros valores ni el compromiso que nos trajo hasta acá.",
    "En JyJ Mantenimiento, cada trabajo es una oportunidad para demostrar que la calidad, la responsabilidad y la confianza son la base de todo lo que hacemos.",
  ],
};
