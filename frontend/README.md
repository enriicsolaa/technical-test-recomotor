# Frontend - React

Este es el frontend del proyecto, desarrollado con **React**, **TypeScript** y **Vite** para una experiencia moderna y rápida. Utiliza **Tailwind CSS** para estilos y **React Router v7** para el enrutado y la navegación entre páginas.

## 🚀 Tecnologías utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para el entorno de desarrollo y build
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitarios
- [Axios](https://axios-http.com/) para peticiones HTTP
- [React Router](https://reactrouter.com/) para el enrutamiento del frontend
- [React Hot Toast](https://react-hot-toast.com/) para notificaciones
- [ESLint](https://eslint.org/) para control de calidad del código

## 📁 Estructura del proyecto

Esta es la estructura que sigue el proyecto.

```text
src/
├── assets/        # Archivos estáticos como imágenes o íconos
├── components/    # Componentes reutilizables de la interfaz
├── hooks/         # Custom Hooks de React (Auth, etc.)
├── pages/         # Vistas principales del sitio
├── routes/        # Definición de rutas con React Router
├── services/      # Funciones para interactuar con la API (axios)
├── types/         # Definiciones de tipos globales
├── utils/         # Funciones utilitarias y helpers reutilizables
├── App.tsx        # Componente principal
├── main.tsx       # Punto de entrada de la aplicación
```

## 📦 Scripts disponibles

Aquí se muestran todos los scripts disponibles, por si quieres ejecutar el proyecto de forma manual.

```bash
npm run dev       # Inicia el servidor de desarrollo con Vite
npm run build     # Compila la aplicación para producción
npm run preview   # Previsualiza el build de producción
npm run lint      # Ejecuta ESLint para verificar el estilo y calidad del código
```

> ℹ️ El proyecto es totalmente compatible con otros gestores de paquetes, como `Yarn`, `PNPM` o `Bun`.
