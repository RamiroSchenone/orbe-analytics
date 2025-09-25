# Assets de Marca - Orbe Analytics

Esta carpeta contiene todos los recursos visuales de la marca Orbe Analytics.

## Estructura de Carpetas

```
src/assets/
├── images/
│   ├── logos/          # Logotipos de la marca
│   ├── graphics/       # Gráficos, ilustraciones y elementos visuales
│   └── icons/          # Iconos y símbolos
└── README.md          # Este archivo
```

## Tipos de Archivos Soportados

- **Imágenes**: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`
- **Logos**: `.svg` (preferido), `.png`
- **Iconos**: `.svg` (preferido), `.png`

## Convenciones de Nomenclatura

### Logos
- `logo-orbe-horizontal.svg` - Logo horizontal completo
- `logo-orbe-vertical.svg` - Logo vertical
- `logo-orbe-icon.svg` - Solo el icono/símbolo
- `logo-orbe-white.svg` - Versión en blanco
- `logo-orbe-dark.svg` - Versión en color oscuro

### Gráficos
- `hero-background.svg` - Fondo del hero
- `pattern-*.svg` - Patrones decorativos
- `illustration-*.svg` - Ilustraciones

### Iconos
- `icon-*.svg` - Iconos específicos
- `social-*.svg` - Iconos de redes sociales

## Uso en Astro

```astro
---
import logo from '../assets/images/logos/logo-orbe-horizontal.svg';
---

<img src={logo} alt="Orbe Analytics" />
```

## Optimización

- Usar formatos modernos (SVG, WebP)
- Optimizar imágenes antes de subir
- Mantener tamaños apropiados para web
- Usar herramientas como ImageOptim o TinyPNG
