# Practicando Tailwind: Proyecto "HopeBuilders"

En este proyecto he estado practicando con **Tailwind CSS** iniciando con una base que se ha rediseñado y desarrollado una página web completa para una organización ficticia sin ánimo de lucro llamada "HopeBuilders".

## Características Principales

* **Diseño Responsive:** Adaptado a diferentes tamaños de pantalla utilizando las utilidades responsive de Tailwind.
* **Componentes Personalizados:** Creación de elementos reutilizables como tarjetas interactivas (`.mission-card`), botones con efectos, menú móvil funcional y carrusel de testimonios.
* **Animaciones:** Implementación de animaciones sutiles (fade-in, float, slide) para mejorar la experiencia de usuario, definidas en `src/css/animations.css` y activadas por scroll (Intersection Observer) y/o clases de Tailwind.
* **Tailwind Personalizado:** Configuración extendida de Tailwind con:
    * Paleta de colores propia (`lavender`, `pink`, `mint`).
    * Utilidades personalizadas (ej. `.scrollbar-hide`) mediante un plugin.
* **Estructura Semántica y Accesible:** Uso de HTML5 semántico y atributos ARIA básicos para mejorar la accesibilidad.
* **Optimización:** Imágenes con `loading="lazy"`.
* **Funcionalidad JavaScript:** Incluye observadores de intersección para animaciones al hacer scroll, manejo del menú móvil y lógica para testimoniales interactivos.

## Tecnologías Utilizadas

* HTML5
* CSS3 / Tailwind CSS v3+
* JavaScript (ES6 Modules)
* Node.js / npm (para el entorno de desarrollo y build)

## Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/FacuPVe/Practicando-Tailwind.git
    cd Practicando-Tailwind # O el nombre que quieras darle al directorio
    ```

2.  **Instalar dependencias:**
    Se utiliza npm para gestionar los paquetes del entorno de desarrollo.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    Este comando compila los estilos de Tailwind en tiempo real y (generalmente) levanta un servidor local con recarga automática.
    ```bash
    npm run dev
    ```
    *Nota: Este comando vigila los cambios en tus archivos (HTML, JS, CSS) y en `tailwind.config.js`.*

4.  **Compilar para producción:**
    Para generar los archivos CSS optimizados y minificados para desplegar el sitio web.
    ```bash
    npm run build-css
    ```

*Importante:* Si realizas cambios en `tailwind.config.js` mientras `npm run dev` está en ejecución, puede que necesites detenerlo (Ctrl+C) y volver a iniciarlo para que los cambios en la configuración (como nuevos colores o plugins) se apliquen correctamente.

## Personalización de Tailwind

Se ha personalizado la configuración de Tailwind (`tailwind.config.js`) para adaptarla al diseño de la página.

### Paleta de Colores Personalizada

Se definieron colores personalizados que extienden la paleta por defecto de Tailwind:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // "./*.html" si tienes HTMLs en la raíz también
  ],
  theme: {
    extend: { // Es buena práctica poner las personalizaciones dentro de extend
      colors: {
        'lavender': {
          50: '#fff1f6', 100: '#ffe4ef', 200: '#ffc9df', 300: '#ffa1c7',
          400: '#ff70a9', 500: '#ff3d8b', 600: '#ff1f6d', 700: '#eb0054',
          800: '#c70048', 900: '#a3003c'
        },
        'pink': {
          50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
          400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
          800: '#9d174d', 900: '#831843'
        },
        'mint': {
          600: '#ff3d8b',
          700: '#ff1f6d',
          800: '#eb0054',
          900: '#c70048'
        }
      },
      // Aquí también se pueden han extendido otras claves como keyframes, animation, etc.
    }
  },
  plugins: [
    // Plugin personalizado para utilidades extra:
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    }
  ]
}
```

## Ejemplos de Uso de Tailwind y Clases Relevantes

A continuación se muestran algunos ejemplos de cómo se aplicó Tailwind en componentes específicos y una lista de las utilidades más relevantes empleadas.

**Tarjeta (Card):**
```html
<div class="mission-card bg-pink-50 border-none shadow-md p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    </div>
```

**Botón:**
```html
<button class="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition transform hover:scale-105 duration-300">
    Donar Ahora
</button>
```

**Navegación Fija (Sticky Header):**
```html
<header class="bg-white/90 backdrop-blur-md shadow-md p-4 sticky top-0 z-50">
    </header>
```

**Campo de Formulario:**
```html
<input class="bg-white border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Tu nombre">
```

<details>
<summary>Principales Clases de Tailwind Utilizadas (Haz clic para expandir)</summary>

| Estilo                 | Descripción                                                      | Razón de uso                                                        |
| :--------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------ |
| `min-h-screen`         | Altura mínima del 100% del viewport                              | Asegurar que el layout principal ocupe toda la pantalla verticalmente |
| `bg-pink-50`, `text-gray-800` | Colores de fondo y texto (personalizados y por defecto)        | Paleta de colores principal y legibilidad                           |
| `container mx-auto`    | Contenedor centrado con ancho máximo responsivo                  | Limitar el ancho del contenido en pantallas grandes para legibilidad |
| `px-4` / `py-2` / `p-6`  | Padding (espaciado interno)                                      | Espaciado interno consistente                                       |
| `grid` / `md:grid-cols-3`| Layout de cuadrícula (responsive)                                | Organizar contenido en columnas que se adaptan al tamaño         |
| `gap-8`                | Espacio entre elementos de grid/flex                             | Espaciado uniforme entre componentes                              |
| `flex justify-between items-center` | Layout flexible para alinear y distribuir elementos        | Alinear elementos (ej. logo y menú en el header)                  |
| `text-4xl` / `md:text-6xl` | Tamaños de fuente responsivos                                    | Jerarquía visual y adaptabilidad tipográfica                      |
| `font-bold`            | Negrita                                                          | Énfasis en títulos y texto importante                           |
| `bg-white/90`          | Fondo blanco con opacidad                                        | Efecto de transparencia (ej. en header fijo)                     |
| `backdrop-blur-md`     | Desenfoque del fondo detrás del elemento                         | Mejorar legibilidad sobre fondos complejos (ej. header fijo)    |
| `shadow-md` / `hover:shadow-xl` | Sombras para profundidad y efecto hover                      | Jerarquía visual e interactividad                                 |
| `rounded-lg`           | Bordes redondeados                                               | Estilo visual más suave                                             |
| `transition-all duration-300` | Transiciones suaves para cambios de estado                 | Mejorar la experiencia de usuario en interacciones              |
| `hover:-translate-y-2` | Mover elemento hacia arriba en hover                             | Feedback visual interactivo (ej. tarjetas)                      |
| `animate-*`            | Clases para animaciones personalizadas (ej. `animate-fade-in-up`)      | Añadir dinamismo a la carga de elementos                        |
| `sticky top-0 z-50`    | Posicionamiento fijo en la parte superior                        | Header de navegación siempre visible                              |
| `hidden` / `md:flex`   | Mostrar/ocultar elementos responsivamente                        | Implementar menú móvil vs menú de escritorio                    |
| `text-center` / `md:text-left` | Alineación de texto responsiva                               | Adaptar la presentación del texto al layout                     |
| `bg-gradient-to-br`    | Fondo con gradiente diagonal                                     | Efectos visuales atractivos para secciones                        |
| `space-x-6` / `space-y-4` | Espaciado entre hijos de un contenedor flex/grid               | Espaciado consistente entre items (horizontal o vertical)        |
| `scrollbar-hide`       | Utilidad personalizada para ocultar barras de scroll             | Mejorar estética en elementos con scroll interno                |
| `lavender-*`, `pink-*`, `mint-*` | Clases generadas por la paleta de colores personalizada | Uso consistente de la identidad visual de la marca            |
| `focus:ring-2 focus:ring-pink-500` | Estilos de foco para accesibilidad en formularios        | Indicar claramente qué elemento tiene el foco                   |

*Nota: Esta tabla resume algunas de las clases más utilizadas. El proyecto hace un uso extensivo de muchas otras utilidades de Tailwind para lograr el diseño final.*
</details>

## Estructura del Proyecto

```
/
├── public/             # Páginas HTML del sitio (index.html, about.html, etc.)
├── src/                # Código fuente principal
│   ├── css/
│   │   ├── input.css       # Archivo base donde se importan las directivas de Tailwind
│   │   └── animations.css  
│   ├── js/               # Scripts JavaScript (ej. main.js, menu.js)
│   └── assets/           # Recursos estáticos
│       ├── images/       # Imágenes optimizadas
│       └── branding/     # Logos, iconos de marca
├── dist/               # Carpeta de salida de la compilación (generada por 'npm run build')
├── tailwind.config.js  # Configuración de Tailwind CSS
├── package.json        # Dependencias de Node.js y scripts (dev, build)
├── package-lock.json   # Versiones exactas de las dependencias
├── .gitignore          # Archivos y carpetas a ignorar por Git (ej. node_modules, dist, .env)
└── README.md           # Este archivo
```

## Páginas Implementadas

* **Home (`index.html`):** Página principal con visión general de la organización.
* **About (`about.html`):** Información detallada sobre la misión, visión y equipo.
* **Donate (`donate.html`):** Página de donaciones (en desarrollo).
* **Programs (`programs.html`):** Descripción de los programas ofrecidos (en desarrollo).
* **Contact (`contact.html`):** Formulario de contacto e información relevante.

## Créditos

Este es un proyecto realizado con fines educativos para practicar Tailwind CSS. Algunos recursos visuales (imágenes, iconos) pueden pertenecer a terceros; sus licencias y atribuciones se pueden ver mencionadas en el archivo `LICENSE`.