"use client";

// Componente de cliente: tiene ESTADO (¿el menú está abierto?) y reacciona a
// clics y al teclado. Eso solo puede pasar en el navegador.
//
// El header es una "isla": una píldora de vidrio que flota separada del borde
// de arriba, en vez de una barra pegada de lado a lado. En celular, el botón
// de menú abre un panel que ocupa toda la pantalla.

import { useEffect, useState } from "react";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { NAV, TELEFONO, WHATSAPP_PRESUPUESTO, ZONA } from "@/data/contacto";
import Boton from "@/components/Boton";
import Marca from "@/components/Marca";

export default function Header() {
  // useState guarda un valor que, cuando cambia, hace que React vuelva a
  // dibujar el componente. Devuelve [valorActual, funciónParaCambiarlo].
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  // Mientras el menú está abierto: la página de atrás no scrollea, la tecla
  // Escape lo cierra, y si la ventana se agranda a tamaño escritorio (donde
  // el menú no existe) se cierra solo.
  useEffect(() => {
    if (!menuAbierto) return;

    const raiz = document.documentElement;
    raiz.style.overflow = "hidden";

    function alTeclear(evento) {
      if (evento.key === "Escape") setMenuAbierto(false);
    }
    const escritorio = window.matchMedia("(min-width: 1024px)");
    function alCambiarTamano(evento) {
      if (evento.matches) setMenuAbierto(false);
    }

    window.addEventListener("keydown", alTeclear);
    escritorio.addEventListener("change", alCambiarTamano);

    // Limpieza: corre cuando el menú se cierra. Deja todo como estaba.
    return () => {
      raiz.style.overflow = "";
      window.removeEventListener("keydown", alTeclear);
      escritorio.removeEventListener("change", alCambiarTamano);
    };
  }, [menuAbierto]);

  return (
    <header>
      <div className="isla">
        <Link className="isla__marca" href="/#inicio" aria-label="JYJ Mantenimiento, inicio" onClick={cerrarMenu}>
          {/* Está arriba de todo: se carga ya, sin esperar al scroll */}
          <Marca cargaInmediata />
        </Link>

        <nav className="isla__nav" aria-label="Secciones">
          {NAV.map((item) => (
            <Link key={item.href} className="isla__link" href={item.href}>
              {item.texto}
            </Link>
          ))}
        </nav>

        <Boton className="isla__cta" href={WHATSAPP_PRESUPUESTO} externo icono={WhatsappLogo}>
          Pedir presupuesto
        </Boton>

        {/* Las dos líneas giran y se cruzan formando una X (ver .hamburguesa en el CSS) */}
        <button
          className="hamburguesa"
          type="button"
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="hamburguesa__linea" />
          <span className="hamburguesa__linea" />
        </button>
      </div>

      {/* `inert` cuando está cerrado: además de invisible, sus links no se
          pueden alcanzar con el teclado (Tab) ni con lectores de pantalla.
          --i numera cada link para que entren escalonados, uno tras otro. */}
      <div className={menuAbierto ? "menu is-open" : "menu"} id="menu-movil" inert={!menuAbierto}>
        <nav className="menu__nav" aria-label="Menú">
          {NAV.map((item, i) => (
            <Link key={item.href} className="menu__link" href={item.href} onClick={cerrarMenu} style={{ "--i": i }}>
              {item.texto}
            </Link>
          ))}
        </nav>

        <div className="menu__pie" style={{ "--i": NAV.length }}>
          <Boton href={WHATSAPP_PRESUPUESTO} externo icono={WhatsappLogo} onClick={cerrarMenu}>
            Pedir presupuesto
          </Boton>
          <p className="menu__dato">
            WhatsApp {TELEFONO}
            <br />
            {ZONA}
          </p>
        </div>
      </div>
    </header>
  );
}
