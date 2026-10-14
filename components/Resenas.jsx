import { GoogleLogo, PencilSimpleLine, Quotes } from "@phosphor-icons/react/ssr";
import { CALIFICACION, RESENAS } from "@/data/sitio";
import { GOOGLE_ESCRIBIR_RESENA, GOOGLE_RESENAS } from "@/data/contacto";
import Boton from "@/components/Boton";
import Estrellas from "@/components/Estrellas";

// Reseñas de Google: a la izquierda el resumen (la nota grande, las
// estrellas y los links a la ficha); a la derecha, las reseñas como citas.
//
// Las reseñas son la prueba que no da el propio negocio: lo dice otra
// persona. Por eso van después de los trabajos (primero ves el resultado,
// después quién quedó conforme) y siempre con el link a Google, para que
// cualquiera pueda comprobar que son reales.
export default function Resenas() {
  // toLocaleString con "es-AR" escribe el decimal con coma: 5 → "5,0".
  const promedio = CALIFICACION.promedio.toLocaleString("es-AR", { minimumFractionDigits: 1 });

  return (
    <section className="seccion seccion--tinte" id="resenas">
      <div className="contenedor resenas">
        <div className="resenas__resumen" data-reveal>
          <h2 className="titulo-seccion">
            Lo dicen nuestros clientes, <span className="tenue">no nosotros.</span>
          </h2>

          <div className="puntaje">
            <span className="puntaje__numero">{promedio}</span>
            <div>
              <Estrellas valor={Math.round(CALIFICACION.promedio)} tamano={22} />
              <p className="puntaje__fuente">Calificación en {CALIFICACION.fuente}</p>
            </div>
          </div>

          <div className="resenas__acciones">
            <Boton href={GOOGLE_RESENAS} externo variante="secundario" icono={GoogleLogo}>
              Ver en Google
            </Boton>
            <Boton href={GOOGLE_ESCRIBIR_RESENA} externo variante="secundario" icono={PencilSimpleLine}>
              Dejar una reseña
            </Boton>
          </div>
        </div>

        <ul className="resenas__lista">
          {RESENAS.map((resena) => (
            <li key={resena.nombre} className="resena" data-reveal>
              <div className="bisel">
                {/* <figure> + <blockquote> + <figcaption> es la forma correcta
                    de marcar una cita con su autor en HTML. */}
                <figure className="bisel__nucleo resena__nucleo">
                  <Quotes className="resena__comillas" size={36} weight="fill" aria-hidden="true" />
                  <blockquote className="resena__texto">
                    <p>{resena.texto}</p>
                  </blockquote>
                  <figcaption className="resena__autor">
                    {/* Inicial en un círculo, en vez de la foto de perfil de
                        Google: no hace falta pedirle nada a Google y no
                        mostramos la cara de nadie sin permiso. */}
                    <span className="resena__inicial" aria-hidden="true">
                      {resena.nombre.charAt(0)}
                    </span>
                    <span className="resena__firma">
                      <span className="resena__nombre">{resena.nombre}</span>
                      <span className="resena__origen">Reseña en Google</span>
                    </span>
                    <Estrellas valor={resena.estrellas} tamano={16} />
                  </figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
