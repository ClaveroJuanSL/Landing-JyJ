import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/ssr";
import { TRABAJOS } from "@/data/sitio";
import { INSTAGRAM } from "@/data/contacto";
import Boton from "@/components/Boton";

// Trabajos terminados, en "cascada": tres fotos superpuestas y apenas
// giradas, como copias apoyadas sobre una mesa. Al pasar el mouse, la foto se
// endereza y pasa al frente. En celular se apilan derechas, una debajo de
// otra (superpuestas molestarían al tocar).
//
// Ojo con la estructura: el giro va en el <figure> y la animación de
// aparición (data-reveal) en el div de adentro. Si estuvieran en el mismo
// elemento, las dos transiciones se pisarían.
export default function Trabajos() {
  return (
    <section className="seccion" id="trabajos">
      <div className="contenedor">
        <header className="seccion__cabecera" data-reveal>
          <h2 className="titulo-seccion">Así quedan los espacios que cuidamos.</h2>
          <p className="bajada">Parques, canteros y piletas de la zona. Hay más trabajos en nuestro Instagram.</p>
          <Boton className="seccion__boton" href={INSTAGRAM} externo variante="secundario" icono={InstagramLogo}>
            Ver Instagram
          </Boton>
        </header>

        <div className="cascada">
          {TRABAJOS.map((trabajo, i) => (
            <figure key={trabajo.alt} className={`cascada__foto cascada__foto--${trabajo.posicion}`}>
              {/* Cada foto está en su propio <figure>, así que Revelar no las
                  ve como hermanas: el escalonado se define acá, a mano. */}
              <div className="bisel" data-reveal style={{ "--retraso": `${i * 140}ms` }}>
                <div className="bisel__nucleo">
                  <Image src={trabajo.foto} alt={trabajo.alt} fill sizes="(max-width: 1023px) 100vw, 46vw" placeholder="blur" />
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
