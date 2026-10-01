import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { ANTES_DESPUES, SERVICIOS_PILETA } from "@/data/sitio";
import { WHATSAPP_PILETA } from "@/data/contacto";
import Boton from "@/components/Boton";
import AntesDespues from "@/components/AntesDespues";

// Piletas: el servicio con la prueba más fuerte (la misma pileta, de verde a
// limpia). Texto y servicios a la izquierda; el comparador a la derecha.
//
// Este componente es de SERVIDOR; solo AntesDespues es de cliente, porque es
// la única parte que reacciona a lo que hace la persona.
export default function Piletas() {
  return (
    <section className="seccion seccion--tinte" id="piletas">
      <div className="contenedor piletas">
        <div className="piletas__texto" data-reveal>
          <p className="etiqueta">Piscinas</p>
          <h2 className="titulo-seccion">Del verde al cristalino.</h2>
          <p className="bajada">La misma pileta, antes y después de nuestro trabajo. Deslizá sobre la foto para comparar.</p>

          <ul className="piletas__lista">
            {SERVICIOS_PILETA.map((servicio) => {
              const Icono = servicio.icono;
              return (
                <li key={servicio.titulo} className="piletas__item">
                  <span className="piletas__icono" aria-hidden="true">
                    <Icono size={20} weight="light" />
                  </span>
                  <div>
                    <h3 className="piletas__titulo">{servicio.titulo}</h3>
                    <p className="piletas__detalle">{servicio.detalle}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Boton href={WHATSAPP_PILETA} externo icono={WhatsappLogo}>
            Pedir presupuesto
          </Boton>
        </div>

        <div className="piletas__comparador" data-reveal>
          <AntesDespues antes={ANTES_DESPUES.antes} despues={ANTES_DESPUES.despues} />
        </div>
      </div>
    </section>
  );
}
