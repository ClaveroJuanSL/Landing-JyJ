import Image from "next/image";
import { ArrowDown, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { HERO } from "@/data/sitio";
import { WHATSAPP_PRESUPUESTO } from "@/data/contacto";
import Boton from "@/components/Boton";

// Primera pantalla: qué hace el negocio, dónde, y el botón para pedir
// presupuesto. Nada más (máximo 4 elementos de texto: etiqueta, título,
// bajada y botones). El resto de la info vive en las secciones de abajo.
//
// Los textos entran con una animación de CSS (.entrada) y no con
// data-reveal: están en pantalla desde el primer momento, no hace falta
// esperar a que JavaScript los detecte. --i ordena la entrada escalonada.
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="contenedor hero__grilla">
        <div className="hero__texto">
          <p className="etiqueta entrada" style={{ "--i": 0 }}>
            Jardines &amp; Piscinas
          </p>

          <h1 className="hero__titulo entrada" style={{ "--i": 1 }}>
            Jardines prolijos, <span className="tenue">piletas cristalinas.</span>
          </h1>

          <p className="hero__bajada entrada" style={{ "--i": 2 }}>
            Mantenimiento de jardines y piscinas en Juana Koslay y alrededores, con atención directa de principio a fin.
          </p>

          <div className="hero__acciones entrada" style={{ "--i": 3 }}>
            <Boton href={WHATSAPP_PRESUPUESTO} externo icono={WhatsappLogo}>
              Pedir presupuesto
            </Boton>
            <Boton href="#trabajos" variante="secundario" icono={ArrowDown}>
              Ver trabajos
            </Boton>
          </div>
        </div>

        <div className="hero__foto">
          {/* "Doble bisel": la foto va en un marco interior (núcleo) apoyado
              sobre una bandeja exterior. Ver .bisel en globals.css. */}
          <div className="bisel">
            <div className="bisel__nucleo">
              {/* Es lo primero que se ve y lo más grande de la página (el
                  "LCP"): se pide de inmediato y con prioridad alta.
                  Calidad 85 (el resto usa 75) porque es la foto más grande.
                  Para que funcione, 85 tiene que estar en images.qualities
                  de next.config.mjs; si no, Next la baja a 75 sin avisar. */}
              <Image
                src={HERO.foto}
                alt={HERO.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                quality={85}
                loading="eager"
                fetchPriority="high"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
