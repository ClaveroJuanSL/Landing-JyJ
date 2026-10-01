import Image from "next/image";
import isotipo from "@/assets/img/logo-isotipo.png";

// Isotipo + nombre. Lo usan el Header y el Footer.
//
// El isotipo va dentro de una "ficha" circular siempre clara: las letras del
// logo son verde oscuro y en modo oscuro se perderían contra el fondo.
// El PNG ya viene sin el fondo blanco del JPG original.
export default function Marca({ cargaInmediata = false }) {
  return (
    <span className="marca">
      <span className="marca__ficha">
        {/* alt vacío: el nombre ya está escrito al lado, repetirlo no suma */}
        <Image src={isotipo} alt="" sizes="40px" loading={cargaInmediata ? "eager" : "lazy"} />
      </span>
      <span className="marca__nombre">
        JYJ <span>Mantenimiento</span>
      </span>
    </span>
  );
}
