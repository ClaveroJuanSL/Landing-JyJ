import { Star } from "@phosphor-icons/react/ssr";

// Fila de 5 estrellas: las primeras `valor` rellenas, el resto vacías.
// Lo usan el resumen de la calificación y cada reseña.
//
// Para un lector de pantalla, cinco íconos sueltos no dicen nada: por eso el
// grupo entero se presenta como UNA imagen (role="img") con su descripción
// ("5 de 5 estrellas"), y los íconos de adentro quedan ocultos.
export default function Estrellas({ valor, tamano = 18 }) {
  return (
    <span className="estrellas" role="img" aria-label={`${valor} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={tamano} weight={n <= valor ? "fill" : "light"} aria-hidden="true" />
      ))}
    </span>
  );
}
