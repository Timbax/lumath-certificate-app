# Lumath Certificate App

Aplicacion web para la generacion de fichas tecnicas (Product Data Sheet) en formato PDF para productos de joyeria Lumath. Permite al usuario completar un formulario con los datos del producto, visualizar una vista previa en tiempo real y descargar el documento final como archivo PDF.

## Descripcion General

La aplicacion resuelve la necesidad de generar fichas tecnicas uniformes y profesionales para cada producto de la marca. El flujo de trabajo es simple:

1. El usuario ingresa los datos del producto (ID, color, origen, peso, talla, forma, etc.).
2. Sube una imagen del producto y opcionalmente logos adicionales.
3. Visualiza una vista previa del documento al instante.
4. Descarga el PDF generado con un solo clic.

## Arquitectura

La aplicacion sigue un patron de **componentes modulares** con estado centralizado en el componente raiz (`App.jsx`).

### Flujo de datos

```
App.jsx (estado global)
├── TopNavBar        → Barra de navegacion superior con logo
├── ProductForm      → Formulario de entrada de datos del producto
├── PreviewPanel     → Puente entre vista previa HTML y generacion PDF
│   ├── PdfPreview   → Renderizado HTML/CSS del documento (vista en pantalla)
│   └── PdfDocument  → Renderizado con @react-pdf/renderer (PDF descargable)
└── Footer           → Pie de pagina
```

### Patron de doble renderizado

La aplicacion mantiene **dos representaciones paralelas** del mismo documento:

- **PdfPreview**: Componente HTML/CSS (Tailwind) que se renderiza en el navegador como vista previa instantanea.
- **PdfDocument**: Arbol de componentes de `@react-pdf/renderer` que genera el archivo PDF descargable.

Ambos componentes comparten los mismos datos (`data`, `productImage`, `logos`) pero usan motores de renderizado diferentes. Los estilos de cada uno se mantienen sincronizados manualmente.

## Tecnologias

| Tecnologia | Version | Uso |
|---|---|---|
| React | 19.x | Framework UI |
| Vite | 8.x | Bundler y servidor de desarrollo |
| Tailwind CSS | 4.x | Estilos utilitarios |
| @react-pdf/renderer | 4.5.x | Generacion de documentos PDF |
| @vercel/analytics | 2.x | Metricas de uso |
| React Compiler | via Babel | Optimizacion automatica de componentes |

## Pasos para ejecutar el proyecto

### Prerequisitos

- [Node.js](https://nodejs.org/) >= 18
- npm o bun como gestor de paquetes

### Instalacion y ejecucion

```bash
# Clonar el repositorio
git clone https://github.com/Timbax/lumath-certificate-app.git

# Entrar al directorio del proyecto
cd lumath-certificate-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciara en `http://localhost:5173`.

### Comandos disponibles

| Comando | Descripcion |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Genera la version de produccion en `dist/` |
| `npm run preview` | Previsualiza la version de produccion |
| `npm run lint` | Ejecuta el linter (ESLint) |

## Derechos de Autor

Este proyecto es propiedad de **Joyeria Lumath**. Todos los derechos reservados.

El codigo fuente, disenio, componentes, estilos y logotipos contenidos en este repositorio estan protegidos por las leyes de propiedad intelectual aplicables. Queda prohibida la reproduccion, distribucion, modificacion o cualquier uso no autorizado de este proyecto o de cualquiera de sus partes, ya sea total o parcial, sin el consentimiento previo y por escrito del propietario.

El uso del nombre, marca y logotipos de Lumath esta estrictamente restringido a fines autorizados por la empresa. Cualquier uso no autorizado podria constituir una infraccion de marca registrada y/o derechos de autor.

Para solicitudes de uso o consulta, contactar directamente al equipo de desarrollo de Lumath.
