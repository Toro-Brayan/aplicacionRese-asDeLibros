# Aplicación de Reseñas de Libros - Controlbox

## Descripción del Proyecto

Controlbox es una aplicación web para reseñas de libros. Permite a los usuarios registrarse e iniciar sesión, navegar por una lista de libros, buscar libros por título, autor o categoría, ver los detalles de cada libro y sus reseñas, y dejar nuevas reseñas.  

Actualmente el proyecto está en proceso, y la funcionalidad de agregar reseñas requiere autorización con token JWT, por lo que puede presentar fallas temporales.

---

## Funcionalidades

- Login de usuarios
- Registro de usuarios
- Listado de libros
- Búsqueda por título, autor o categoría
- Detalles de libros (título, autor, categoría, resumen)
- Visualización de reseñas de otros usuarios (ordenadas por más recientes)
- Agregar reseñas (requiere usuario autenticado)
- Logout de usuario

---

## Tecnologías utilizadas

- **Frontend:** Angular 17+, TypeScript, HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Simulación de base de datos:** Archivos JSON locales (`users.json`, `books.json`, `reviews.json`)
- **Autenticación:** JWT (JSON Web Tokens)
- **HTTP Client:** Angular `HttpClient`

---

## Estructura del Proyecto

resena-libros/
│
├ # Código de Angular
│ ├─ src/
│ │ ├─ app/
│ │ │ ├─ auth/ # Login y Register
│ │ │ ├─ home/ # Home y detalles de libros
│ │ │ ├─ services/ # Servicios para consumir backend
│ │ │ └─ app.routes.ts
│ │ └─ main.ts
│ └─ package.json
│
├─ backend/ # Código de Node.js/Express
│ ├─ src/
│ │ ├─ routes/ # Rutas auth, books, reviews
│ │ ├─ utils/ # Funciones para leer/escribir JSON
│ │ ├─ app.js
│ │ └─ server.js
│ ├─ users.json
│ ├─ books.json
│ └─ reviews.json
└─ README.md

---

## Requisitos

- Node.js v22+
- npm o yarn
- Angular CLI (opcional para servir frontend)

---

## Instalación

1. **Clonar el repositorio:**

git clone https://github.com/Toro-Brayan/aplicacionRese-asDeLibros.git
cd resena-libros

#Instalar dependencias del backend:

cd backend
npm install

#Instalar dependencias del frontend:

En carpeta principal resena-libros
npm install

#Ejecución en Local

--Backend
cd backend
npm run dev
El backend correrá en http://localhost:3000.

--Frontend
cd frontend
ng serve
El frontend correrá en http://localhost:4200.

Uso
Accede a http://localhost:4200

Regístrate como nuevo usuario o inicia sesión si ya tienes una cuenta.

Navega por la lista de libros, usa la barra de búsqueda para filtrar por título, autor o categoría.

Haz clic en un libro para ver sus detalles y reseñas.

Agrega tu reseña si estás autenticado.

Puedes cerrar sesión desde el navbar.

Estado del Proyecto
Actualmente el proyecto funciona parcialmente. La funcionalidad de agregar reseñas está en proceso debido a problemas con la autorización de tokens JWT.

Notas
Los datos se almacenan actualmente en archivos JSON (users.json, books.json, reviews.json) para simular base de datos.

Se recomienda reiniciar el backend si se realizan cambios en los archivos JSON.

El frontend y backend pueden correr simultáneamente en local.

Autor
Brayan Alexander Toro Guarnica