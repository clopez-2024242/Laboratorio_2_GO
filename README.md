# Laboratorio_2_GO
=============================================
OBJETIVO - 
=============================================
Este programa sirve para crear una red social pequeña, parecida a las publicaciones de Facebook. Su meta es que las personas puedan entrar, escribir lo que piensan (opiniones) y que otros puedan interactuar con ellas.
============================================== 
EXPLICACIÓN DEL PROGRAMA - GESTOR DE OPINIONES
==============================================

====================================================
1.  DESCRIPCIÓN GENERAL
====================================================

El sistema es una API REST desarrollada con Node.js, Express y PostgreSQL que permite:

- Registro y autenticación de usuarios mediante JWT
- Gestión de usuarios
- Tener diferentes niveles de permiso (Administradores y Usuarios comunes).
- Creación y administración de publicaciones
- Creación y administración de comentarios
- Manejo centralizado de errores
- El sistema cuenta con middleware de seguridad para proteger la información y evitar ataques.

Ruta base del sistema:
/api/v1

==================================================== 
2. PUNTO DE ENTRADA - index.js 
====================================================
Este archivo inicia la aplicación.

Funciones principales:

- Carga variables de entorno con dotenv.
- Ejecuta la función que inicia el servidor.

==================================================== 
3. CONFIGURACIÓN DEL SERVIDOR - app.js
====================================================
Aquí se configura el servidor principal.

1. Conexión a la base de datos
    Se conecta a PostgreSQL antes de levantar el servidor.

2. Seed de roles
    Se crean automáticamente los roles básicos (ADMIN y USER) si no existen.

3. Middlewares utilizados:
    - express.json(): Permite recibir datos en formato JSON.
    - cors(): Permite solicitudes desde otros dominios.
    - helmet(): Mejora la seguridad HTTP.
    - morgan: Muestra logs en consola.
    - rateLimit: Limita la cantidad de peticiones.
    - errorHandler: Maneja errores globales.

4. Rutas principales:

/api/v1/auth
/api/v1/users
/api/v1/publication
/api/v1/comments

Endpoint de prueba:
GET /api/v1/health

==================================================== 
4. RAMA: AUTH (Autenticación)
====================================================
Ruta: /api/v1/auth

Endpoints:

POST /register 
- Registra un nuevo usuario. 
- Encripta lacontraseña. 
- Asigna rol por defecto.

POST /login
- Verifica correo y contraseña. 
- Genera un token JWT. 
- Devuelve el token para autenticación.

====================================================
 5. RAMA: USERS (Usuarios) 
====================================================

Ruta: /api/v1/users

Endpoints:

GET /
- Lista todos los usuarios.

GET /:id 
- Obtiene un usuario específico.

PUT /:id 
- Actualiza información del usuario.

==================================================== 
6. RAMA: PUBLICATION (Publicaciones)
====================================================

Ruta: /api/v1/publication

Función: Permite crear y gestionar publicaciones u opiniones.

Endpoints:

POST / 
- Crea una nueva publicación.

GET /
- Lista todas las publicaciones.

GET /:id 
- Obtiene una publicación específica.

PUT /:id 
- Edita una publicación.

Relación:
Un usuario puede tener múltiples publicaciones.
====================================================
 7. RAMA: COMMENTS (Comentarios)
====================================================

Ruta: /api/v1/comments

Función: Permite comentar publicaciones.

Endpoints:

POST /
- Crea un comentario.

GET /
- Lista comentarios.

GET /:id 
- Obtiene un comentario específico.

PUT /:id 
- Edita un comentario.

Relación:
Un comentario pertenece a una publicación.
Un usuario puede realizar múltiples comentarios.
==================================================== 
8. BASE DE DATOS
====================================================

El sistema utiliza: 
- PostgreSQL 

Tablas principales: 
- users 
- roles 
- publications 
- comments

Relaciones: .
- Un usuario tiene un rol.
- Un usuario puede tener muchas publicaciones. 
- Una publicación puede tener muchos comentarios. 
- Un comentario pertenece a una publicación.

====================================================
 9. MANEJO DE ERRORES 
====================================================
El sistema implementa:

- Autenticación con JWT.
- Protección con Helmet.
- Control de solicitudes con Rate Limit.
- Middleware notFound (Error 404).
- Middleware errorHandler (Error 500).
- Manejo global de errores del proceso.
==================================================== 
10. RESUMEN FINAL
====================================================

El sistema es una API REST completa que:

-   Autentica usuarios con JWT.
-   Maneja roles y permisos.
-   Permite crear publicaciones.
-   Permite comentar publicaciones.
-   Usa PostgreSQL como base de datos.
-   Implementa seguridad con middlewares.
-   Controla errores globalmente.
- Sigue una estructura organizada por rutas, controladores y modelos.