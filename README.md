### 📋 Descripción
Este es un portafolio profesional desarrollado como una Single Page Application (SPA) moderna y responsive. El sitio web presenta información personal, experiencia laboral, proyectos realizados, habilidades técnicas y un formulario de contacto, todo con un diseño elegante y funcional.

### ✨ Características
- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Tema Claro/Oscuro**: Alternancia entre modos de visualización con persistencia en localStorage
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos de aparición al hacer scroll
- **Interfaz Moderna**: Diseño limpio y profesional
- **Optimizado para SEO**: Estructura semántica HTML
- **Formulario de Contacto Funcional**: Integrado con Netlify Forms para recibir mensajes

### 🛠️ Tecnologías Utilizadas
- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos con variables CSS y diseño responsive
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Segoe UI)
- **Netlify Forms**: Para el manejo del formulario de contacto

### 📁 Estructura del Proyecto

portafolio/
│
├── index.html # Archivo principal HTML
├── estilo.css # Estilos y diseño responsive
├── script.js # Funcionalidades JavaScript
├── netlify.toml # Configuración para despliegue en Netlify
└── README.md # Este archivo


### 🚀 Despliegue en Netlify

El portafolio está configurado para desplegarse en Netlify con el formulario de contacto completamente funcional.

1. **Sube el proyecto a GitHub**
2. **Ve a [Netlify](https://netlify.com)**
    - Haz clic en "Add new site" -> "Import an existing project"
    - Conecta con GitHub y selecciona tu repositorio
    - Configuración de despliegue:
        - Build command: *dejar vacío*
        - Publish directory: *dejar vacío* (o `.` si es requerido)
    - Haz clic en "Deploy site"

3. **Formulario de Contacto**
    - Los mensajes se recibirán en el panel de Netlify -> Forms
    - Configura notificaciones por email si lo deseas

### 🎨 Personalización
**Información Personal**
Editar en `index.html`:
- Nombre y título en `.profile-card`
- Información de contacto
- Redes sociales
- Imagen de perfil

**Secciones de Contenido**
Modificar cada sección en `index.html`:
- **Sobre mí**: Biografía personal
- **Estudios**: Formación académica
- **Experiencia**: Trayectoria laboral
- **Proyectos**: Portfolio de trabajos
- **Habilidades**: Competencias técnicas y blandas

**Estilos**
Personalizar en `estilo.css`:
- Colores en `:root` y `[data-theme="dark"]`
- Fuentes y tipografía
- Espaciados y dimensiones

### 📱 Secciones Incluidas
- **Header**: Navegación principal con toggle de tema
- **Perfil**: Tarjeta con información personal y redes
- **Sobre mí**: Descripción profesional
- **Estudios**: Timeline de formación académica
- **Experiencia**: Historial laboral
- **Proyectos**: Grid de proyectos con tecnologías
- **Habilidades**: Barras de progreso para competencias
- **Contacto**: Formulario de contacto funcional con Netlify
- **Footer**: Información de copyright

### 🌟 Funcionalidades JavaScript
- **Toggle Tema Claro/Oscuro**: Persistencia en localStorage
- **Scroll Animations**: Efectos al hacer scroll
- **Smooth Scrolling**: Navegación suave entre secciones
- **Skill Bars Animation**: Animación de barras de habilidades
- **Formulario de Contacto**: Envío asíncrono con Netlify Forms y manejo de estados

### 📧 Formulario de Contacto
El formulario de contacto está integrado con Netlify Forms y listo para usar. Incluye:
- Validación de campos obligatorios
- Protección contra spam con campo honeypot
- Mensajes de éxito y error
- Reinicio del formulario después del envío

### 📄 Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portafolio personal.

---

¿Interesado en colaborar? ¡Contáctame a través del formulario o en [christianrvdv.1999@gmail.com](mailto:christianrvdv.1999@gmail.com)!