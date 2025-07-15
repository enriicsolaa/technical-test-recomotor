# Prova tècnica FullStack Recomotor - Enric Sola

Este proyecto contiene un entorno completo para una aplicación compuesta por:

- **nginx** como servidor web para el frontend.
- **MariaDB** como base de datos.
- **Frontend** construido con React sobre Vite.
- **Backend** en Node.js, utilizando express.
- **drizzle** como ORM para gestionar la BBDD.
- **zod** como validador de tipos de datos/estructuras de datos.

Todo el entorno se gestiona mediante **Docker Compose**.

---

## 📦 Requisitos previos

Antes de comenzar, asegúrate de tener instalado [Git](https://git-scm.com/downloads), [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/).

---

## 🚀 Despliegue del entorno

Sigue estos pasos para desplegar el entorno completo:

### 1. Clona el repositorio

```bash
git clone https://github.com/enriicsolaa/technical-test-recomotor.git
cd technical-test-recomotor
```

### 2. Despliega el proyecto con Docker Compose

```bash
docker compose up -d
```

### 3. Accede a la página web
Para entrar en la web, una vez desplegada, accede via web a tu equipo. Nginx está configurado para servir la web en el puerto 80 (puerto por defecto). Debería bastar con introducir en el navegador [http://localhost](http://localhost)

## ⌨️ Inicializar tablas de la BBDD y lanzar seed

El despliegue se realiza de forma totalmente automática. Docker compose al crear el contenedor de MariaDB, también crea las tablas y ejecuta el seed. Las configuraciones se importan desde `init.sql`, que se encuentra ubicado en el root del proyecto.

## 📜 Logs y debugging

Una vez levantados los contenedores, puedes ver sus logs en cualquier momento desde la consola con el siguiente comando. Recuerda que debes estar en la misma carpeta que `docker-compose.yml`.

```bash
docker compose logs
```

## 📜 Documentación específica
[Ir a la documentación del Frontend](https://github.com/enriicsolaa/technical-test-recomotor/tree/main/frontend)

[Ir a la documentación del Backend](https://github.com/enriicsolaa/technical-test-recomotor/tree/main/backend)