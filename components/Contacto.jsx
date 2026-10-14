import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import {
  FACEBOOK,
  GOOGLE_MAPS,
  INSTAGRAM,
  INSTAGRAM_USUARIO,
  TELEFONO,
  WHATSAPP,
  WHATSAPP_PRESUPUESTO,
  ZONA,
} from "@/data/contacto";
import Boton from "@/components/Boton";

// Cierre de la página: un panel verde bosque con el llamado a escribir y los
// datos de contacto. No hay formulario: el cliente trabaja por WhatsApp, así
// que el camino más corto es un botón que abre la conversación.
export default function Contacto() {
  return (
    <section className="seccion" id="contacto">
      <div className="contenedor">
        <div className="bisel bisel--panel" data-reveal>
          <div className="bisel__nucleo contacto">
            <div className="contacto__texto">
              <h2 className="titulo-seccion">Contanos qué necesitás.</h2>
              <p className="bajada">
                Escribinos por WhatsApp con fotos del jardín o la pileta y te pasamos el presupuesto.
              </p>
              <Boton href={WHATSAPP_PRESUPUESTO} externo variante="acento" icono={WhatsappLogo}>
                Pedir presupuesto
              </Boton>
            </div>

            {/* <dl> = lista de "término: dato". Los lectores de pantalla la leen
                como pares (WhatsApp: 2664 028121). */}
            <dl className="contacto__datos">
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={WHATSAPP} target="_blank" rel="noopener">
                    {TELEFONO}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Zona de trabajo</dt>
                <dd className="contacto__zona">
                  {ZONA}
                  <a href={GOOGLE_MAPS} target="_blank" rel="noopener">
                    Ver en Google Maps
                  </a>
                </dd>
              </div>
              <div>
                <dt>Redes</dt>
                <dd className="contacto__redes">
                  <a href={INSTAGRAM} target="_blank" rel="noopener">
                    Instagram {INSTAGRAM_USUARIO}
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener">
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
