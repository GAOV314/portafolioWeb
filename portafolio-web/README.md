# 🌌 Portafolio Web Personal

Un portafolio web moderno y responsive con temática espacial, desarrollado con React y Vite.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-18.0+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/vite-5.0+-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.0+-06B6D4?logo=tailwindcss)

## 📖 Descripción

Mi portafolio web personal es una aplicación completa desarrollada con tecnologías modernas de frontend. Presenta un diseño único con temática espacial, animaciones fluidas y una experiencia de usuario completamente responsive. El sitio incluye secciones para mostrar mis habilidades, experiencia académica, proyectos y información de contacto.

## ✨ Características

- 🎨 **Diseño moderno** con temática espacial única
- 📱 **Completamente responsive** para todos los dispositivos  
- ⚡ **Animaciones fluidas** con Framer Motion
- 🎯 **Navegación suave** entre secciones
- 📧 **Formulario de contacto** funcional
- 🚀 **Optimizado para performance**
- 🌟 **Efectos visuales** con background animado
- 💫 **Transiciones elegantes** en toda la interfaz

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones para React
- **React Icons** - Conjunto de iconos populares
- **React Intersection Observer** - Hook para detectar elementos en viewport

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn o bun

### Pasos de instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/GAOV314/portafolioWeb.git
cd portafolioWeb
```

2. **Instala las dependencias**
```bash
# Con npm
npm install

# Con yarn
yarn install

# Con bun
bun install
```

3. **Inicia el servidor de desarrollo**
```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con bun
bun run dev
```

4. **Abre tu navegador**
   - Visita `http://localhost:5173` para ver el proyecto en desarrollo

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de la construcción
npm run lint         # Ejecuta ESLint para revisar código
```

## 📁 Estructura del Proyecto

```
portafolioWeb/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx           # Sección Acerca de mí
│   │   ├── Contact.jsx         # Sección de contacto
│   │   ├── Experience.jsx      # Experiencia académica
│   │   ├── Footer.jsx          # Pie de página
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── LoadingScreen.jsx   # Pantalla de carga
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   ├── Projects.jsx        # Galería de proyectos
│   │   ├── ScrollProgress.jsx  # Barra de progreso
│   │   ├── Skills.jsx          # Habilidades técnicas
│   │   └── StellarBackground.jsx # Fondo animado
│   ├── App.jsx                 # Componente principal
│   ├── index.css              # Estilos globales
│   └── main.jsx               # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Personalización

### Colores del tema

El proyecto utiliza un sistema de colores personalizado definido en `tailwind.config.js`:

```javascript
colors: {
  'stellar-bright': '#00d4ff',
  'stellar-warm': '#ff6b6b',
  'stellar-muted': '#4ecdc4',
  'stellar-deep': '#2d3748',
  'space-900': '#0a0e1a',
  'space-800': '#1a202c',
  // ...más colores
}
```

### Modificar contenido

- **Información personal**: Edita los datos en cada componente
- **Proyectos**: Actualiza el array `projects` en `Projects.jsx`
- **Habilidades**: Modifica las habilidades en `Skills.jsx`
- **Experiencia**: Actualiza la información en `Experience.jsx`

## 📧 Configuración del formulario de contacto

El formulario de contacto está preparado para integrarse con servicios como:

- **EmailJS** - Para envío de emails
- **Formspree** - Servicio de formularios
- **Netlify Forms** - Si usas Netlify para el hosting

### Ejemplo con EmailJS:

```javascript
// En Contact.jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_PUBLIC_KEY'
    );
    // Manejar éxito
  } catch (error) {
    // Manejar error
  }
};
```

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio con Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Deploy automático con cada push

### Netlify

1. Conecta tu repositorio con Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
# Instala gh-pages
npm install --save-dev gh-pages

# Agrega scripts al package.json
"homepage": "https://GAOV314.github.io/portafolioWeb",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🤝 Contribución

Si quieres contribuir a este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] Modo oscuro/claro
- [ ] Soporte para múltiples idiomas
- [ ] Blog integrado
- [ ] Galería de certificaciones
- [ ] Sistema de comentarios
- [ ] Analytics integrado

## 🐛 Reporte de errores

Si encuentras algún error o tienes una sugerencia:

1. Revisa si ya existe un issue similar
2. Crea un nuevo issue con una descripción detallada
3. Incluye pasos para reproducir el error
4. Agrega capturas de pantalla si es necesario

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Gadiel Amir Ocaña Veliz**

- 📧 Email: [ocanagadiel59@gmail.com](mailto:ocanagadiel59@gmail.com)
- 💼 LinkedIn: [gadiel-amir-ocaña-veliz](https://www.linkedin.com/in/gadiel-amir-oca%C3%B1a-veliz-1970692a1/)
- 🐱 GitHub: [@GAOV314](https://github.com/GAOV314)
- 📱 Teléfono: +502 4477 9557

## 🎓 Información Académica

Estudiante de 3er año en **Ciencias de la Computación**  
Universidad del Valle de Guatemala

---

## 🌟 Agradecimientos

- Inspiración en diseños de portafolios modernos
- Comunidad de React y Tailwind CSS
- Iconos por [Feather Icons](https://feathericons.com/)
- Animaciones inspiradas en temas espaciales

---

**⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub!**

*Última actualización: Junio 2025*