### Guia para ejecutar el proyecto:

# Guía para Configuración de la Base de Datos

Para preparar la base de datos para el proyecto, sigue estos pasos. La aplicación está implementada con MySQL.

## 1. Preparar la Base de Datos

### Crear la Base de Datos

1. **Accede a tu servidor de bases de datos:**

   - Abre tu gestor de base de datos MySQL (puede ser MySQL Workbench, phpMyAdmin, o la línea de comandos).

2. **Crear una nueva base de datos:**

   - Ejecuta el siguiente comando SQL para crear una nueva base de datos. Asegúrate de reemplazar `nombre_de_base_de_datos` con el nombre deseado para tu base de datos:
     ```sql
     CREATE DATABASE nombre_de_base_de_datos;
     ```

3. **Seleccionar la base de datos:**

   - Si estás usando la línea de comandos o un editor SQL, selecciona la base de datos que acabas de crear:

     ```sql
      USE nombre_de_base_de_datos;
     ```

   **Ya creada la base de datos, puedes clonar el repositorio y crear las tablas desde el proyecto**

## Iniciar el BackEnd:

- **Descargar o Clonar el Repositorio:**

- **Si vas a clonar abre una terminal git**

  ```bash
  git clone <https://github.com/MahicolGallego/farmaceutical_industy-workshop>
  ```

- **En una terminal vs code**

- **Navegar a la Carpeta del Proyecto:**

  ```bash
  cd ruta/al/proyecto
  ```

- **Navegar a la Carpeta Backend:**

  ```bash
  cd backend
  ```

- **Instalar las Dependencias:**

  ```bash
  npm install
  ```

**Establece las variables** de acceso a la base de datos:

- Ve al archivo `.env` en la raíz del directorio `/backend`.
- Reemplaza las variables de acceso con tus datos y credenciales.

  - DB_HOST
  - DB_USER
  - DB_PASSWORD
  - DB_NAME

  **Ejecuta el proyecto** por primera vez. Los archivos de los modelos crearán automáticamente las tablas correspondientes en la base de datos.

- **Iniciar el Servidor Backend:**

  ```bash
  npm start
  ```

  **Regresa a tu gestor de base de datos** y carga los datos iniciales:

  - Ejecuta las consultas de inserción que encontrarás en el archivo `Querys.sql` para tener datos con los que trabajar.

  ### Ahora el backend y la base de datos están listos.

## Iniciar el FrontEnd:

- **Abre la Carpeta Frontend:**

- **/frontend**

- **Abrir el Archivo HTML:**

  - Doble clic en `index.html` o usar Live Server en Visual Studio Code.

  - **Listo, ya puedes interactuar con el proyecto**

Este `README.md` proporciona una guía clara para configurar y ejecutar el proyecto, asegurando que tanto el backend como el frontend estén listos para que interactues con el proyecto.
