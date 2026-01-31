# Guía de Implementación: BEACH Link-in-Bio

Este proyecto es un sitio web estático, lo que significa que no requiere servidores complejos ni bases de datos. Aquí te explico cómo usarlo.

## 1. Ejecutar Localmente (Prueba)
Para ver el sitio en tu computadora:
1.  Navega a la carpeta del proyecto: `C:\Users\asens\.gemini\antigravity\scratch\beach-bio`
2.  Haz doble clic en el archivo **`index.html`**.
3.  Se abrirá en tu navegador predeterminado (Chrome, Edge, Safari, etc.).

> [!TIP]
> Si haces cambios en el código (`style.css` o `index.html`), solo necesitas recargar la página (F5) para verlos.

## 2. Publicar en Internet (Para usar en Instagram/TikTok)
Para que el mundo vea tu página, necesitas subirla a un "hosting". Aquí están las opciones más rápidas y gratuitas:

### Opción A: Vercel (Recomendado)
Es la opción más rápida y profesional.
1.  Crea una cuenta en [Vercel.com](https://vercel.com).
2.  Instala Vercel CLI o simplemente arrastra tu carpeta `beach-bio` al dashboard de Vercel en el navegador.
3.  Vercel te dará un link inmediato (ej. `beach-bio.vercel.app`).

### Opción B: Netlify Drop
1.  Ve a [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Arrastra la carpeta completa `beach-bio` al área indicada.
3.  ¡Listo! Tu sitio estará online en segundos.

### Opción C: GitHub Pages
Si subes este código a un repositorio de GitHub:
1.  Ve a **Settings** > **Pages** en tu repositorio.
2.  Selecciona la rama `main` y guarda.
3.  Tu sitio estará en `usuario.github.io/beach-bio`.

## Estructura de Archivos
- **`index.html`**: El contenido (textos, links, estructura).
- **`style.css`**: El diseño (colores, fuentes, sombras Apple).
- **`script.js`**: Las animaciones de entrada.
