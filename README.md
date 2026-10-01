# JYJ Mantenimiento — Landing

Landing page de **JYJ Mantenimiento · Jardines y Piscinas** (Juana Koslay, San Luis).
Hecha con Next.js (App Router), JavaScript y CSS plano, con la misma estructura que la landing de Equilibrate.

## Cómo correrla

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

| Carpeta | Qué hay |
| --- | --- |
| `app/` | `layout.js` (marco común: metadatos, fuentes, CSS global) y `page.js` (el orden de las secciones). |
| `components/` | Una sección o pieza por archivo (`Hero.jsx`, `Header.jsx`…). Saben **cómo** se ve cada cosa. |
| `data/` | **Qué** se muestra. `sitio.js`: servicios, fotos y textos. `contacto.js`: WhatsApp, redes y navegación. |
| `assets/img/` | Fotos que se importan desde el código (Next las optimiza al compilar). |
| `public/` | Archivos que se sirven tal cual, sin procesar. |

Para sumar un servicio o una foto de un trabajo, alcanza con editar `data/sitio.js`.
