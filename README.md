# FILMPEDIA PRUEBA TÉCNICA WIKI

## 🏁 Inicio / Visión general
- **Tecnologías principales:**
  - Angular 20
  - SSR opcional (Angular Universal)
  - Bootstrap 5
- **Capturas destacadas:**
<img width="1902" height="681" alt="image" src="https://github.com/user-attachments/assets/e14421c7-7035-483d-b2bb-3e99a27c461a" />
<img width="1897" height="626" alt="image" src="https://github.com/user-attachments/assets/b650d264-2c7e-402e-8700-6e104e3be86d" />
<img width="665" height="612" alt="image" src="https://github.com/user-attachments/assets/8b82dee1-6fbf-4177-a8d1-b229b49a37a7" />

## 📝 Notas
- **Aprendizajes clave:**
  - Profundización en componentes standalone y signals para manejar estado reactivo sin Zone.js.
  - Configuración de estilos globales con Bootstrap 5 usando `@use` y capas personalizadas.
- **Retos destacados:**
  - Ajuste de tarjetas para conservar accesibilidad en estados hover/focus en SSR y CSR.
  - Optimización de cargas SSR manteniendo coherencia con prerender y datos estáticos.
- **Integración con WordPress + ACF + CPT:**
  - Exponer un Custom Post Type "película" con campos definidos en Advanced Custom Fields (título, sinopsis, valoración, imagen, tags).
  - Consumir la API REST de WordPress (`/wp-json/wp/v2/peliculas`) desde Angular y mapear al modelo `Pelicula`.
  - Automatizar despliegues sincronizando los datos estáticos con el CPT o incorporando webhooks para actualizaciones en tiempo real.

## ⚙️ Guía de instalación y ejecución
1. **Requisitos previos**
   - Node.js 18+
   - Angular CLI (opcional)
2. **Instalación**
   ```bash
   npm install
   ```
3. **Servidor de desarrollo**
   ```bash
   npm run start
   ```
   - URL por defecto: [http://localhost:4200/](http://localhost:4200/)

## 🧱 Arquitectura de la aplicación
- **Árbol `src/app`:** _(añadir diagrama o listado)_
- **Bootstrap de la app:** `main.ts`, `app.config.ts`
- **Standalone components** y `provideZonelessChangeDetection`
- **Rutas SPA:** `app.routes.ts`
- **Rutas SSR / Prerender:** `app.routes.server.ts`
- **Configuración Universal:** `app.config.server.ts`

## 🧩 Componentes y páginas
### AppComponent
- Rol y responsabilidades
- Uso de `router-outlet`
- Signals relevantes

### HomeComponent
- Fuente de datos (`HttpClient` + JSON estático)
- Estructura de iteración (`@for`)
- Enlaces a componentes hijos

### CardComponent
- Inputs (`@Input`) requeridos
- Cálculo de valoraciones
- Estados hover/focus y accesibilidad
- Estilos (`card.component.scss`)

## 📊 Modelos y datos
- Interfaces principales (`Pelicula`, `Valoracio`)
- Ubicación del dataset: `public/data/peliculas.json`
- Notas para reemplazar con API real

## 🎨 Estilos y recursos
- Configuración global en `src/styles.scss`
- Uso de Bootstrap vía `@use`
- Convenciones SCSS (BEM, utilidades)
- Personalización de paleta, sombras, radios
