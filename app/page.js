// Página de inicio (ruta "/"). Se lee como un índice: el orden de las
// secciones es el orden en que aparecen en pantalla. Cada una vive en su
// propio archivo dentro de components/, y el contenido en data/.
//
// El header y el footer no están acá: son parte del marco común del sitio,
// así que viven en app/layout.js.

import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Piletas from "@/components/Piletas";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import Trabajos from "@/components/Trabajos";
import Contacto from "@/components/Contacto";
import { FACEBOOK, INSTAGRAM, WHATSAPP } from "@/data/contacto";

// Datos estructurados (schema.org): le cuentan a Google, en un formato que
// entiende sin leer la página, que esto es un negocio local, qué hace, dónde
// trabaja y cómo contactarlo. Ayuda a aparecer en búsquedas como
// "jardinero en Juana Koslay".
const negocioLocal = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JYJ Mantenimiento",
  description: "Mantenimiento de jardines y piscinas: podas, césped, champas, cercos, nivelación de suelo y limpieza de piletas.",
  telephone: "+54 9 2664 02-8121",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Juana Koslay",
    addressRegion: "San Luis",
    addressCountry: "AR",
  },
  areaServed: ["Juana Koslay", "San Luis"],
  sameAs: [INSTAGRAM, FACEBOOK, WHATSAPP],
};

export default function Home() {
  return (
    <main id="contenido">
      {/* JSON.stringify arma el texto; el script no se ejecuta, Google lo lee */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocioLocal) }} />

      <Hero />
      <Servicios />
      <Piletas />
      <ComoTrabajamos />
      <Trabajos />
      <Contacto />
    </main>
  );
}
