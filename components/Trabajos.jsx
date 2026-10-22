import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/ssr";
import { GALERIA, TRABAJOS } from "@/data/sitio";
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

        {/* Galería: las fotos extra que vaya mandando el cliente (GALERIA en
            data/sitio.js). Si la lista está vacía no se dibuja nada.
            Son cuadrados de un cuarto del ancho en escritorio, un tercio en
            tablet y la mitad en celular: eso le dice `sizes` al navegador
            para que baje la versión justa. */}
        {GALERIA.length > 0 && (
          <ul className="galeria">
            {GALERIA.map((item) => (
              <li key={item.alt} className="galeria__item" data-reveal>
                <div className="bisel">
                  <div className="bisel__nucleo">
                    <Image
                      src={item.foto}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                      placeholder="blur"
                      style={item.posicion ? { objectPosition: item.posicion } : undefined}
                    />
                    {/* aria-hidden: el alt de la foto ya dice si es el antes o
                        el después; leer la etiqueta otra vez sería repetir. */}
                    {item.etiqueta && (
                      <span className="galeria__etiqueta" aria-hidden="true">
                        {item.etiqueta}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
