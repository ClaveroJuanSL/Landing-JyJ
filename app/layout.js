// Layout raíz: es el "marco" que envuelve a todas las páginas del sitio.
// Acá van los metadatos, las fuentes y el CSS global. Lo que se ponga en
// <body> se repite en cada página.

import { Bricolage_Grotesque, Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Revelar from "@/components/Revelar";
import "./globals.css";

// next/font descarga estas fuentes al compilar y las sirve desde nuestro
// propio dominio: el navegador nunca le pide nada a Google.
// Cada una queda disponible como variable CSS (ver :root en globals.css).
// Las dos son fuentes variables: un solo archivo trae todos los pesos.
//
// Bricolage Grotesque → títulos. Una sans con carácter, de trazo apenas
// orgánico: acompaña al rubro sin caer en lo "rústico".
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

// Geist → textos. Limpia y muy legible en tamaños chicos.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Equivale a <title> y <meta name="description">. Next genera las etiquetas.
// Los íconos no se declaran acá: alcanza con app/icon.png y app/apple-icon.png.
export const metadata = {
  title: "JYJ Mantenimiento | Jardines y Piscinas en Juana Koslay",
  description:
    "Mantenimiento de jardines y piscinas en Juana Koslay y alrededores. Podas, corte de césped, colocación de champas, cercos, nivelación de suelo y limpieza de piletas. Pedí tu presupuesto por WhatsApp.",
  openGraph: {
    title: "JYJ Mantenimiento | Jardines y Piscinas",
    description: "Mantenimiento de jardines y piscinas en Juana Koslay y alrededores. Pedí tu presupuesto por WhatsApp.",
    locale: "es_AR",
    type: "website",
  },
};

// Color de la barra del navegador en celulares, según el modo claro/oscuro.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1711" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${geist.variable}`}>
      <body>
        {/* Primer elemento que se alcanza con Tab: permite saltar el menú e
            ir directo al contenido. Solo se ve cuando tiene el foco. */}
        <a className="saltar" href="#contenido">
          Saltar al contenido
        </a>

        <Header />

        {/* children = el contenido de la página actual (app/page.js) */}
        {children}

        <Footer />

        {/* No dibuja nada: anima la aparición de los [data-reveal] al hacer scroll */}
        <Revelar />
      </body>
    </html>
  );
}
