import Image from "next/image";
import { AUTOR } from "@/data/sitio";
import isotipo from "@/assets/img/logo-isotipo.png";

// Sobre mí: la persona detrás del negocio. Foto a la izquierda, su historia
// a la derecha y, si ya tenemos el nombre, una firma al final.
//
// Va al final, justo antes del contacto: a esta altura la persona ya vio los
// trabajos y las reseñas, y lo último que necesita para escribir es saber
// con quién va a hablar.
//
// El texto es largo, así que en escritorio la foto queda "pegada" (sticky)
// mientras se lee: acompaña la lectura en vez de quedar arriba sola.
export default function SobreMi() {
  return (
    <section className="seccion seccion--tinte" id="sobre-mi">
      <div className="contenedor autor">
        <div className="autor__foto" data-reveal>
          <div className="bisel">
            <div className="bisel__nucleo">
              {AUTOR.foto ? (
                <Image src={AUTOR.foto} alt={AUTOR.alt} fill sizes="(max-width: 1023px) 100vw, 40vw" placeholder="blur" />
              ) : (
                // Si no hay foto: el logo sobre el verde bosque, para que el
                // diseño no quede con un hueco.
                <div className="autor__vacio">
                  <span className="autor__ficha">
                    <Image src={isotipo} alt="" sizes="160px" />
                  </span>
                </div>
              )}

              {/* Dato destacado sobre la foto, sacado del texto del cliente */}
              {AUTOR.anios && (
                <p className="autor__dato">
                  <span className="autor__dato-numero">+{AUTOR.anios}</span>
                  <span className="autor__dato-texto">años de trabajo</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="autor__texto" data-reveal>
          <p className="rotulo">El fundador</p>
          <h2 className="titulo-seccion">
            {AUTOR.titulo} <span className="tenue">{AUTOR.tituloTenue}</span>
          </h2>

          <div className="autor__parrafos">
            {AUTOR.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          {AUTOR.nombre && (
            <p className="autor__firma">
              <span className="autor__nombre">{AUTOR.nombre}</span>
              <span className="autor__rol">{AUTOR.rol}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
