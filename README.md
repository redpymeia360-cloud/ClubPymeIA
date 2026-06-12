# Club Pyme IA — versión para GitHub Pages

Sitio web estático listo para publicarse en GitHub Pages.

## Contenido principal

- `index.html` en la raíz del repositorio.
- Carpeta `assets` con imágenes, CSS, JavaScript, video, QR y brochure.
- Archivo `.nojekyll` para evitar procesamiento innecesario de Jekyll.
- Formulario y chatbot que envían los datos mediante WhatsApp, sin depender de Netlify ni de una base de datos.

## Publicación

1. Sube **el contenido de esta carpeta** a la raíz del repositorio, no una carpeta contenedora adicional.
2. En GitHub abre `Settings` → `Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Selecciona la rama `main` y la carpeta `/(root)`.
5. Guarda y espera la publicación.

## Nota SEO

Después de conocer la URL definitiva de GitHub Pages, conviene agregar en `index.html` una etiqueta `canonical`, `og:url` y una URL absoluta para `og:image`.
