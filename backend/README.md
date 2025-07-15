# Backend - Express

Este es el backend del proyecto, utilizando **Node.js**, **Express**, **TypeScript** y **Drizzle ORM** para la conexión con una base de datos **MySQL**.

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Zod](https://zod.dev/) para validación de datos
- [dotenv](https://www.npmjs.com/package/dotenv) para variables de entorno
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para autenticación JWT

## 📁 Estructura del proyecto

Esta es la estructura que sigue el proyecto.

```text
src/
├── config/        # Configuración general (variables de entorno, constantes, etc.)
├── db/            # Configuración de la base de datos y modelos con Drizzle
├── middlewares/   # Middlewares personalizados (auth, etc.)
├── routes/        # Definición de rutas y controladores de la API
├── services/      # Funciones y utilidades auxiliares reutilizables
├── types/         # Definiciones de tipos y esquemas globales (TypeScript)
├── index.ts       # Punto de entrada principal de la aplicación
```

## 📦 Scripts disponibles

Aquí se muestran todos los scripts disponibles, por si quieres ejecutar el proyecto de forma manual.

## 📦 Scripts disponibles

```bash
npm run dev              # Inicia el servidor en modo desarrollo (con recarga automática)
npm run start            # Inicia el servidor en modo producción
npm run create-db-tables # Crea las tablas en la base de datos usando Drizzle ORM
npm run seed-db          # Ejecuta el seed para rellenar la base de datos con datos iniciales
```

> ℹ️ El proyecto es totalmente compatible con otros gestores de paquetes, como `Yarn`, `PNPM` o `Bun`.

> ⚠️ No se recomienda usar los scripts `create-db-tables` y `seed-db`. Siempre será más fácil y seguro que se haga automáticamente con Docker y `init.sql`.