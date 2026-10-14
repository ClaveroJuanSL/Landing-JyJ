import { MISION_VISION } from "@/data/sitio";

// Misión y visión: dos frases grandes, una al lado de la otra, separadas por
// una línea fina. Sin tarjetas ni íconos: es texto para leer con calma, y el
// tamaño de la letra ya le da el peso que necesita.
export default function MisionVision() {
  return (
    <section className="seccion" id="mision" aria-label="Misión y visión">
      <div className="contenedor">
        <div className="mision">
          {MISION_VISION.map((item) => (
            <article key={item.titulo} className="mision__item" data-reveal>
              <h2 className="mision__titulo">{item.titulo}</h2>
              <p className="mision__texto">{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
