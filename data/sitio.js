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
import canteroVereda from "@/assets/img/cantero-vereda.jpg";
import piletaCamino from "@/assets/img/pileta-camino.jpg";

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
    foto: canteroVereda,
    alt: "Cantero de vereda con el césped cortado y los bordes prolijos",
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
// ser verticales u horizontales: todas se recortan al cuadrado, así que
// conviene que lo importante quede en el centro de la foto.

export const GALERIA = [];

// --- Reseñas de Google ----------------------------------------------------------
// Copiadas a mano de la ficha de Google del negocio (no se cargan solas:
// para eso hace falta la API de Google Places, que pide una clave y una
// cuenta de facturación; para una landing no vale la pena).
//
// Cuando entren reseñas nuevas, actualizar `promedio` y sumarlas a la lista.
// Solo van las que tienen texto: las que son solo estrellas ya cuentan en el
// promedio. El texto va tal cual lo escribió la persona (sin corregirlo: es
// una cita, y una reseña "demasiado prolija" parece inventada). Del nombre se muestra el nombre de pila y la inicial del
// apellido, como hacen la mayoría de los sitios: alcanza para que se note
// que es una persona real sin exponer su nombre completo.

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
// TEXTO PROVISORIO: el cliente va a pasar el suyo. Está escrito con lo que
// ya sabemos del negocio para ver cómo queda el diseño; reemplazar `texto`
// cuando llegue el definitivo.

export const MISION_VISION = [
  {
    titulo: "Misión",
    texto: "Cuidar los jardines y las piletas de Juana Koslay y alrededores con trabajo prolijo, puntual y trato directo, para que cada familia disfrute de sus espacios sin preocuparse por el mantenimiento.",
  },
  {
    titulo: "Visión",
    texto: "Ser la referencia de confianza en mantenimiento de espacios verdes y piscinas de la zona, y crecer trabajo a trabajo gracias a la recomendación de nuestros clientes.",
  },
];

// --- Sobre mí (el dueño) --------------------------------------------------------
// TEXTO Y FOTO PROVISORIOS: el cliente va a mandar fotos suyas y su
// presentación. Mientras `foto` sea null se muestra un recuadro con el logo;
// mientras `nombre` sea null no se muestra la firma.
// Para la foto: importarla arriba (como las demás) y poner acá
// `foto: nombreImportado` y `alt: "Nombre trabajando en un jardín"`.

export const AUTOR = {
  nombre: null,
  rol: "Dueño de JYJ Mantenimiento",
  foto: null,
  alt: "",
  parrafos: [
    "Detrás de JYJ hay una persona: la misma que te pasa el presupuesto, corta el césped y deja la pileta lista para usar.",
    "Trabajo en Juana Koslay y alrededores, y cada espacio que cuido lo trato como si fuera el de mi casa. Si tenés una duda, me escribís a mí y te respondo yo.",
  ],
};
