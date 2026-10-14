import Link from "next/link";
import { FacebookLogo, GoogleLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { FACEBOOK, GOOGLE_MAPS, INSTAGRAM, NAV, WHATSAPP } from "@/data/contacto";
import { NEGOCIO } from "@/data/sitio";
import Marca from "@/components/Marca";

// Pie de página: marca y lema, la misma navegación del header (sale de NAV)
// y las redes como íconos.
export default function Footer() {
  // Se calcula al generar la página, así que se actualiza en cada build.
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="contenedor pie__grilla">
        <div className="pie__marca">
          <Marca />
          <p className="pie__lema">{NEGOCIO.lema}.</p>
        </div>

        <nav className="pie__nav" aria-label="Pie de página">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.texto}
            </Link>
          ))}
        </nav>

        <div className="pie__redes">
          <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp">
            <WhatsappLogo size={22} weight="light" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram">
            <InstagramLogo size={22} weight="light" />
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook">
            <FacebookLogo size={22} weight="light" />
          </a>
          <a href={GOOGLE_MAPS} target="_blank" rel="noopener" aria-label="Google Maps">
            <GoogleLogo size={22} weight="light" />
          </a>
        </div>
      </div>

      <div className="contenedor pie__legal">
        <p>
          © {anio} {NEGOCIO.nombre}. {NEGOCIO.rubro}.
        </p>
      </div>
    </footer>
  );
}
