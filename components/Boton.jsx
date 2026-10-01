import { ArrowUpRight } from "@phosphor-icons/react/ssr";

// Botón "píldora" con el ícono metido en su propio círculo, pegado al borde
// derecho (el patrón "botón dentro de botón"). Al pasar el mouse, el círculo
// se corre en diagonal; al apretar, todo el botón se achica un poco, como
// una tecla física. Los estilos están en globals.css (.boton).
//
// No usa estado ni efectos, así que sirve tanto en componentes de servidor
// como de cliente (el Header lo usa con un onClick).
//
// Props:
// - variante: "primario" (relleno), "secundario" (solo contorno) o
//   "acento" (verde hoja, para fondos oscuros).
// - icono: cualquier ícono de Phosphor. Por defecto, una flecha.
// - externo: abre en otra pestaña (para WhatsApp e Instagram).
export default function Boton({
  href,
  children,
  variante = "primario",
  icono: Icono = ArrowUpRight,
  externo = false,
  className = "",
  ...resto
}) {
  const clases = `boton boton--${variante} ${className}`.trim();
  // rel="noopener": la pestaña nueva no puede manipular a esta.
  const destino = externo ? { target: "_blank", rel: "noopener" } : {};

  return (
    <a className={clases} href={href} {...destino} {...resto}>
      <span className="boton__texto">{children}</span>
      <span className="boton__icono" aria-hidden="true">
        <Icono size={18} weight="light" />
      </span>
    </a>
  );
}
