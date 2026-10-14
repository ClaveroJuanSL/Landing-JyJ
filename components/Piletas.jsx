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
          <p className="bajada">
            Del mantenimiento periódico a la puesta a punto completa. Deslizá sobre la foto para ver la misma pileta, antes y
            después.
          </p>

          {/* Lista en dos columnas, separada por líneas finas como una ficha
              técnica. Si la cantidad es impar, la última ocupa el ancho
              completo (ver .piletas__item en el CSS): la grilla nunca queda
              con un hueco. */}
          <ul className="piletas__lista">
            {SERVICIOS_PILETA.map((servicio) => {
              const Icono = servicio.icono;
              return (
                <li key={servicio.titulo} className="piletas__item">
                  <span className="piletas__icono" aria-hidden="true">
                    <Icono size={20} weight="light" />
                  </span>
                  {servicio.titulo}
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
