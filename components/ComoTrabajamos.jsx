import { PASOS } from "@/data/sitio";

// El diferencial del negocio: lo atiende una sola persona, de punta a punta.
// Una frase grande centrada (el mensaje ES el diseño) y abajo los tres pasos
// para pedir un trabajo, separados por una línea fina en vez de tarjetas.
export default function ComoTrabajamos() {
  return (
    <section className="seccion" id="como-trabajamos">
      <div className="contenedor">
        <h2 className="manifiesto" data-reveal>
          Sin intermediarios. <span className="tenue">Quien te pasa el presupuesto es quien hace el trabajo.</span>
        </h2>

        <ol className="pasos">
          {PASOS.map((paso) => {
            const Icono = paso.icono;
            return (
              <li key={paso.titulo} className="paso" data-reveal>
                <span className="paso__icono" aria-hidden="true">
                  <Icono size={22} weight="light" />
                </span>
                <h3 className="paso__titulo">{paso.titulo}</h3>
                <p className="paso__texto">{paso.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
