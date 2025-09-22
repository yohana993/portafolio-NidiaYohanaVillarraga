# 🚀 Landing Page Minimalista - Portafolio Nidia Yohana

Una landing page moderna y minimalista para portafolio personal, diseñada con un enfoque en la simplicidad y la elegancia visual.

## ✨ Características

- **Diseño Minimalista**: Interfaz limpia y moderna con amplio uso de espacios en blanco
- **Responsive**: Completamente adaptable a dispositivos móviles y de escritorio
- **Navegación Suave**: Scroll suave entre secciones con navegación activa
- **Tema Oscuro/Claro**: Toggle para cambiar entre modos de visualización
- **Animaciones**: Efectos sutiles de entrada y hover para mejorar la experiencia del usuario
- **Formulario de Contacto**: Formulario funcional con validación y notificaciones
- **Iconos FontAwesome**: Iconografía moderna y consistente
- **Imagen de Perfil Personalizada**: Soporte para imagen real o ilustración CSS

## 🎯 Secciones Incluidas

1. **Header/Navegación**: Logo y menú de navegación con enlaces internos
2. **Hero Section**: Título principal y presentación personal
3. **Enlaces Sociales**: Iconos de LinkedIn, GitHub y CV
4. **Contenido Principal**: 
   - Biografía y servicios
   - Imagen de perfil personalizada (con soporte para imagen real)
   - Estadísticas de experiencia
5. **Skills**: Categorías de habilidades frontend y backend
6. **Títulos**: Educación y experiencia laboral
7. **Proyectos**: Portafolio de trabajos recientes
8. **Contacto**: Información de contacto y formulario completo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Grid y Flexbox
- **JavaScript ES6+**: Funcionalidades interactivas y animaciones
- **FontAwesome**: Iconografía profesional
- **Google Fonts**: Tipografía optimizada (Inter)

## 📁 Estructura del Proyecto

```
Portafolio/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── js.js              # Funcionalidades JavaScript
├── README.md          # Este archivo
└── cerebro.png        # Imagen de perfil personalizada
```

## 🚀 Cómo Usar

### 1. Clonar o Descargar
Descarga todos los archivos en una carpeta local.

### 2. Personalizar Contenido
Edita el archivo `index.html` para personalizar:
- Nombre y título profesional
- Información de contacto
- Biografía y servicios
- Habilidades y niveles
- Educación y experiencia
- Proyectos del portafolio

### 3. Personalizar Imagen de Perfil
Tienes dos opciones para la imagen de perfil:

**Opción A: Imagen Real (Recomendada)**
```html
<img src="tu-foto.jpg" alt="Tu Nombre" class="profile-photo">
```

**Opción B: Ilustración CSS**
```html
<div class="profile-illustration">
  <!-- Ilustración CSS personalizada -->
</div>
```

### 4. Personalizar Estilos
Modifica `styles.css` para ajustar:
- Colores del tema
- Tipografías
- Espaciados y layouts
- Efectos visuales

### 5. Personalizar Funcionalidades
Edita `js.js` para modificar:
- Animaciones
- Efectos de scroll
- Comportamiento del formulario
- Funcionalidades adicionales

### 6. Abrir en Navegador
Simplemente abre `index.html` en tu navegador web preferido.

## 🎨 Personalización

### Cambiar Colores
```css
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #666;
  --accent-color: #e8f4fd;
  --background-color: #ffffff;
}
```

### Cambiar Tipografía
```css
body {
  font-family: 'Tu-Fuente', sans-serif;
}
```

### Cambiar Imagen de Perfil
1. **Reemplaza la imagen**: Cambia `src="cerebro.png"` por tu imagen
2. **Ajusta el tamaño**: Modifica `.profile-oval` en CSS
3. **Personaliza el fondo**: Cambia el color de fondo del óvalo

### Agregar Nuevas Secciones
1. Agrega la estructura HTML en `index.html`
2. Define los estilos en `styles.css`
3. Agrega funcionalidades en `js.js` si es necesario

## 📱 Responsive Design

La landing page está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌙 Modo Oscuro

Incluye un toggle para cambiar entre tema claro y oscuro:
- Click en el icono de luna/sol en la navegación
- Cambio automático de colores y estilos
- Persistencia del tema seleccionado
- Soporte completo para imagen de perfil en modo oscuro

## 🔧 Funcionalidades JavaScript

- **Navegación Suave**: Scroll automático entre secciones
- **Navegación Activa**: Resaltado automático del enlace activo
- **Animaciones de Entrada**: Efectos de fade-in para elementos
- **Contadores Animados**: Estadísticas con animación de conteo
- **Formulario de Contacto**: Validación en tiempo real y notificaciones
- **Menú Móvil**: Navegación adaptativa para dispositivos móviles
- **Efectos Hover**: Interacciones visuales en tarjetas, botones e imagen de perfil
- **Validación de Formularios**: Feedback visual inmediato para campos requeridos

## 📧 Formulario de Contacto

El formulario incluye:
- Validación de campos requeridos en tiempo real
- Notificaciones de éxito/error
- Campos para nombre, correo electrónico y mensaje
- Estilos modernos y responsivos
- Botón de envío estilizado

## 🎯 Optimizaciones

- **Performance**: CSS y JS optimizados
- **SEO**: Estructura HTML semántica
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Cross-browser**: Compatible con navegadores modernos
- **Imagen de Perfil**: Soporte para diferentes formatos y tamaños

## 🚀 Despliegue

### GitHub Pages
1. Sube tu proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama principal
4. Tu sitio estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Arrastra tu carpeta del proyecto a Netlify
2. Tu sitio se desplegará automáticamente
3. Obtendrás una URL personalizada

### Vercel
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente el proyecto
3. Despliegue automático en cada push

## 🤝 Contribuciones

Si quieres contribuir al proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo para tus proyectos personales.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:
- Abre un issue en el repositorio
- Contacta a través del formulario de la landing page
- Revisa la documentación de las tecnologías utilizadas

---

**¡Disfruta creando tu portafolio minimalista! 🎉**

*Creado especialmente para Nidia Yohana - Frontend Developer*
