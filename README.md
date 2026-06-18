# 🚀 Primer API REST con Express.js — Administración de Estudiantes

Este proyecto consiste en la creación de una API REST básica para la administración de estudiantes utilizando **Node.js** y el framework **Express.js**. Desarrollado como parte de la actividad evaluada para el módulo de Backend en Kodigo.

El proyecto simula el comportamiento de una base de datos mediante el uso de "datos quemados" (*hardcoded*) almacenados en un array de objetos en memoria.

---

## 🛠️ Tecnologías Utilizadas

* **Node.js** (Entorno de ejecución de JavaScript)
* **Express.js** (Framework para el desarrollo del servidor y rutas HTTP)
* **Thunder Client** (Herramienta utilizada para pruebas de endpoints)

---

## 📂 Componentes del Proyecto

* **`index.js`**: Archivo principal que contiene la configuración de Express, el array de estudiantes y los 5 endpoints operativos.
* **`package.json`**: Archivo de configuración del proyecto con las dependencias requeridas (`express`).
* **`.gitignore`**: Archivo configurado para excluir la carpeta `node_modules/` y temporales del repositorio.

---

## 🚦 Endpoints Disponibles

La API corre por defecto en el puerto `3000` (`http://localhost:3000`). Posee los siguientes endpoints funcionales:

| Método | Endpoint | Descripción | Cuerpo de la Petición (Body JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Ruta raíz con mensaje de bienvenida. | No requiere |
| **GET** | `/estudiantes` | Obtiene la lista completa de estudiantes. | No requiere |
| **GET** | `/estudiantes/:id` | Obtiene los detalles de un estudiante específico por su ID. | No requiere |
| **POST** | `/estudiantes` | Registra un nuevo estudiante (ID autoincremental). | `{"nombre": "...", "edad": 0, "correo": "..."}` |
| **PUT** | `/estudiantes/:id` | Modifica los datos de un estudiante existente por su ID. | `{"nombre": "...", "edad": 0, "correo": "..."}` (Campos opcionales) |
| **DELETE** | `/estudiantes/:id` | Elimina un estudiante del listado según su ID. | No requiere |

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO_DE_GITHUB>
