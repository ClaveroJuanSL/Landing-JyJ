import { MISION_VISION } from "@/data/sitio";

// Misión y visión: dos bloques lado a lado, separados por una línea fina.
// Sin tarjetas ni íconos: es texto para leer con calma. En cada bloque, la
// primera oración va grande (es la idea) y la segunda en letra normal (la
// desarrolla). Así se lee de un vistazo aunque el texto sea largo.
export default function MisionVision() {
  return (
    <section className="seccion" id="mision" aria-label="Misión y visión">
      <div className="contenedor">
        <div className="mision">
          {MISION_VISION.map((item) => (
            <article key={item.titulo} className="mision__item" data-reveal>
              <h2 className="rotulo">{item.titulo}</h2>
              <p className="mision__frase">{item.frase}</p>
              <p className="mision__detalle">{item.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
