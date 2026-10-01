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
  Drop,
  TestTube,
  Funnel,
  Recycle,
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

export const SERVICIOS_PILETA = [
  { titulo: "Limpieza y mantenimiento", detalle: "Agua limpia, segura y lista para disfrutar.", icono: Drop },
  { titulo: "Recuperación de agua", detalle: "De agua verde a cristalina.", icono: Recycle },
  { titulo: "Nivelación de pH", detalle: "El agua equilibrada cuida la piel y la pileta.", icono: TestTube },
  { titulo: "Cambio de material filtrante", detalle: "Para que el filtro vuelva a hacer su trabajo.", icono: Funnel },
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
