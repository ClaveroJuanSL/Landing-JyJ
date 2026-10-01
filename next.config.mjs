const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy: la lista de orígenes desde donde el navegador puede
// cargar cosas. Si alguien lograra inyectar un <script> de otro sitio, el
// navegador lo bloquea.
//
// - script-src 'unsafe-inline': Next mete scripts chiquitos dentro del HTML
//   para "hidratar" los componentes de cliente. Sin esto, el menú y las
//   animaciones no funcionan. (La alternativa, "nonces", obliga a generar la
//   página en cada visita; para una landing no vale la pena.)
// - 'unsafe-eval' solo en desarrollo: lo necesita el recargado en caliente.
// - img-src data: el placeholder borroso de next/image es una imagen "data:".
// - Sin fonts.googleapis.com: next/font descarga las fuentes al compilar y las
//   sirve desde nuestro propio dominio.
// - Si más adelante se suma un mapa de Google embebido (<iframe>), hay que
//   agregar frame-src con el dominio de Google Maps; si no, se ve en blanco.
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

// Encabezados de seguridad: los mismos que usa la landing de Equilibrate.
const encabezadosDeSeguridad = [
  { key: "Content-Security-Policy", value: csp.replace(/\s{2,}/g, " ").trim() },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Calidades de compresión permitidas para next/image.
    // Next 16 solo permite 75 por defecto, y si un <Image> pide otra que no
    // está en esta lista, la baja a la más cercana SIN AVISAR.
    // 75 → todas las fotos. 85 → reservada para la foto principal (hero).
    qualities: [75, 85],
  },

  // Se aplican a todas las rutas: páginas e imágenes.
  async headers() {
    return [{ source: "/(.*)", headers: encabezadosDeSeguridad }];
  },
};

export default nextConfig;
