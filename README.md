# SwellPro Perú — Landing Page

Landing page premium de alta conversión con enfoque en neuroventas para SwellPro Perú, representante oficial de drones de pesca SwellPro en el Perú. Habilitada con un embudo directo de WhatsApp y asistente de selección interactivo en tiempo real.

## Cómo publicar en GitHub Pages

1. Crear un repositorio público en GitHub (por ejemplo: `swellpro-peru`)
2. Subir todos los archivos compilados del directorio `dist/` al repositorio (o conectar el repositorio origen para compilación automática mediante GitHub Actions).
3. Ir a **Settings** → **Pages** → **Source**: Seleccionar `Deploy from branch` → elegir la rama `main` (o la que utilices) → `/root` o `/docs`.
4. Guardar los cambios y esperar de 2 a 3 minutos. La URL final asignada será similar a: `https://TU_USUARIO.github.io/swellpro-peru/`

## Configuración y Personalización Rápida

### 1. Número de WhatsApp
El número de contacto se encuentra centralizado en un único punto en el código dentro de `/src/App.tsx`.
Busca la línea:
```typescript
const WHATSAPP_NUMBER = "51987654321";
```
Reemplaza `"51987654321"` con tu número real en formato internacional (código de país `51` para Perú seguido del número celular de 9 dígitos sin añadir el símbolo `+`). Ejemplo: `"51984511000"`.

### 2. Fotos de Entregas Reales (Sección Evidencia)
En la sección `SwellPro ya vuela en todo el Perú` dentro de `/src/App.tsx`, las imágenes están referenciadas desde el CDN original.
Para la versión definitiva con las capturas de tus clientes felices y técnicos peruanos en acción:
1. Sube tus fotografías en alta calidad a tu gestor de contenido preferido (ej: Cloudinary, ImgBB, AWS S3).
2. Reemplaza los enlaces respectivos en las etiquetas `<img>` de la sección.

## Estructura del Código

```
swellpro-peru/
├── src/
│   ├── App.tsx                    ← Orquestador y contenido de secciones del Embudo de Ventas
│   ├── types.ts                   ← Modelos de datos compartidos (Product, FAQItem, Quiz)
│   ├── index.css                  ← Clases de Tailwind CSS v4, fuentes y animaciones
│   └── components/
│       ├── SelectionAssistant.tsx ← Algoritmo interactivo de elección autoguiada
│       ├── FAQSection.tsx         ← Acordeón reactivo de objeciones resueltas
│       └── ScrollReveal.tsx       ← Animación de revelado progresivo (IntersectionObserver)
├── index.html                     ← Contenedor principal con metadatos optimizados para SEO
├── package.json                   ← Configuración del proyecto y dependencias de React/Vite
└── README.md                      ← Este instructivo de despliegue
```
