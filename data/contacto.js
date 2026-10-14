// Datos de contacto y navegación.
//
// Está separado de sitio.js a propósito: lo usan componentes de CLIENTE
// (el Header), y todo lo que un componente de cliente importa viaja al
// navegador. sitio.js importa las fotos del sitio; si estos datos vivieran
// ahí, el navegador se llevaría también esas fotos (sus datos, no los
// archivos) sin usarlas. Este archivo no importa nada.

// Sacados del flyer del cliente (Contenido/WhatsApp Image … 11.31.51.jpeg).
// 2664 028121 → formato internacional para WhatsApp: 54 (Argentina) + 9 (celular) + 2664028121.
export const TELEFONO = "2664 028121";
export const WHATSAPP = "https://wa.me/5492664028121";
export const INSTAGRAM = "https://www.instagram.com/jyj.mantenimiento/";
export const INSTAGRAM_USUARIO = "@jyj.mantenimiento";
// El flyer dice "jyj.mantenimiento", pero la página de Facebook que Google
// asocia al negocio (con el mismo teléfono) es @JyJmantenimiento2016.
export const FACEBOOK = "https://www.facebook.com/JyJmantenimiento2016";
export const ZONA = "Juana Koslay y alrededores";

// --- Ficha de Google (Google Business Profile) ------------------------------------
// El "place ID" es el identificador fijo de la ficha del negocio en Google.
// A diferencia del link para compartir (share.google/…), no cambia si el
// cliente edita el nombre o la dirección, y con él se arman los tres links
// oficiales: ver en Maps, leer las reseñas y escribir una.
const GOOGLE_PLACE_ID = "ChIJwXNb7pk_1JUR2YAgWaI3hwc";
export const GOOGLE_MAPS = `https://www.google.com/maps/search/?api=1&query=JYJ%20Mantenimiento&query_place_id=${GOOGLE_PLACE_ID}`;
export const GOOGLE_RESENAS = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;
export const GOOGLE_ESCRIBIR_RESENA = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

// Arma un link de WhatsApp con un mensaje ya escrito.
// encodeURIComponent convierte "Hola, quiero…" en "Hola%2C%20quiero…",
// que es como tiene que ir el texto dentro de una URL.
export function whatsappCon(mensaje) {
  return `${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// Todos los botones de WhatsApp dicen lo mismo ("Pedir presupuesto"): un
// mismo objetivo, una misma etiqueta. Lo que cambia es el mensaje que llega
// escrito, para que el cliente sepa desde qué parte de la página le escriben.
export const WHATSAPP_PRESUPUESTO = whatsappCon("Hola! Quiero pedir un presupuesto");
export const WHATSAPP_PILETA = whatsappCon("Hola! Quiero pedir un presupuesto para mi pileta");

// Una sola lista para el header, el menú móvil y el footer.
// Cada href apunta al id de una sección de app/page.js.
export const NAV = [
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#piletas", texto: "Piletas" },
  { href: "/#trabajos", texto: "Trabajos" },
  { href: "/#resenas", texto: "Reseñas" },
  { href: "/#mision", texto: "Nosotros" },
  { href: "/#contacto", texto: "Contacto" },
];
