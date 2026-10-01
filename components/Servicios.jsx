import Image from "next/image";
import { SERVICIOS_JARDIN } from "@/data/sitio";

// Servicios de jardín en una grilla "bento": celdas de distintos tamaños,
// algunas con foto real y otras con fondo de color, para que la grilla tenga
// ritmo y no sean seis tarjetas iguales en fila.
//
// El tamaño de cada celda viene de data/sitio.js (columnas y filas) y se
// pasa al CSS como variables (--columnas, --filas).
export default function Servicios() {
  return (
    <section className="seccion" id="servicios">
      <div className="contenedor">
        <header className="seccion__cabecera" data-reveal>
          <h2 className="titulo-seccion">Del corte de pasto al jardín nuevo.</h2>
          <p className="bajada">
            Trabajos puntuales o mantenimiento periódico, para que tu jardín esté sano y prolijo todo el año.
          </p>
        </header>

        <ul className="bento">
          {SERVICIOS_JARDIN.map((servicio) => {
            const Icono = servicio.icono;
            return (
              <li
                key={servicio.titulo}
                className={`bento__celda bento__celda--${servicio.estilo}`}
                style={{ "--columnas": servicio.columnas, "--filas": servicio.filas ?? 1 }}
                data-reveal
              >
                <div className="bisel">
                  <div className="bisel__nucleo celda">
                    {servicio.foto && (
                      <Image
                        className="celda__foto"
                        src={servicio.foto}
                        alt={servicio.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 58vw"
                        placeholder="blur"
                      />
                    )}
                    <span className="celda__icono" aria-hidden="true">
                      <Icono size={22} weight="light" />
                    </span>
                    <div className="celda__texto">
                      <h3 className="celda__titulo">{servicio.titulo}</h3>
                      <p className="celda__detalle">{servicio.detalle}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
