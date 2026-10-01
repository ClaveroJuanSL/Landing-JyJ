"use client";

// Comparador "antes y después": dos fotos de la misma pileta, una encima de
// la otra. Al deslizar, se recorta la de arriba (el "antes") y aparece la de
// abajo (el "después").
//
// Cómo funciona:
// - Encima de todo hay un <input type="range"> invisible que ocupa toda la
//   foto. Es un control nativo: funciona con mouse, dedo y teclado (flechas)
//   y los lectores de pantalla lo anuncian, sin programar nada de eso.
// - Al moverlo, se actualiza la variable CSS --corte (de 0 a 100). El CSS la
//   usa para recortar la foto de "antes" (clip-path) y mover la guía.
// - Se escribe la variable directo en el elemento (con useRef) en vez de
//   guardarla con useState: así React no vuelve a dibujar el componente en
//   cada píxel que se mueve el dedo.

import { useRef } from "react";
import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react/ssr";

export default function AntesDespues({ antes, despues }) {
  // useRef da acceso directo al elemento del DOM (el marco de las fotos).
  const marco = useRef(null);

  function mover(evento) {
    marco.current.style.setProperty("--corte", evento.target.value);
  }

  return (
    <figure className="comparador">
      <div className="bisel">
        <div className="bisel__nucleo comparador__marco" ref={marco} style={{ "--corte": 50 }}>
          <Image
            className="comparador__foto"
            src={despues.foto}
            alt={despues.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 40vw"
            placeholder="blur"
          />

          <div className="comparador__antes">
            <Image
              className="comparador__foto"
              src={antes.foto}
              alt={antes.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              placeholder="blur"
            />
          </div>

          <div className="comparador__guia" aria-hidden="true">
            <span className="comparador__perilla">
              <ArrowsLeftRight size={20} weight="light" />
            </span>
          </div>

          <input
            className="comparador__control"
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            onChange={mover}
            aria-label="Deslizá para comparar la pileta antes y después del trabajo"
          />
        </div>
      </div>

      {/* Las etiquetas van debajo de la foto, no encima: no tapan la imagen */}
      <figcaption className="comparador__leyenda">
        <span>Antes</span>
        <span>Después</span>
      </figcaption>
    </figure>
  );
}
