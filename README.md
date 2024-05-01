# Train Trakr TFG

Por [`Joan Ferrero Montiel`](https://github.com/JoanFerrero)  

## Tabla de Contenidos

1. TrainTrakr_Joan
2. Instalar
3. Tecnologías
4. Despliegue

# TrainTrakr_Joan! 

1. **Home:**
   Listado de todas las estaciones disponibles en la aplicación con redirección a viajes con filtro o sin filtro.

2. **Trips:**
   Listados de viajes, filtro por estación de salida, mapa con las estaciones para web - móvil y redirección al detalle de cada viaje.

3. **Details:**
   Ver detalles del viaje con todos los asientos disponibles de tren y realizar reserva de un asiento.

4. **Profile:**
      Ver el perfil de tu usuario, incidencias, notificaciones y reservas del usuario.
      En las vistas de las reservas podremos generar QR para su validación y Factura del viaje reservado.

6. **Login:**
   Register y Login de usuario con social login (Google, GitHub o normal con correo y contraseña).

7. **Dashboard:**
   Solo tienen acceso los administradores, contiene los cruds: Estaciones, Trenes, Sillas, Viajes y modificar el estado de una incidencia.

## Instalar 💿

---

### `Requisitos`

Tener instalado las siguientes herramientas:

- [React](https://es.react.dev/) v18.2.0
- [DRF](https://www.djangoproject.com/) v3.14.0
- [PostgreSQL](https://www.postgresql.org/)

### `Puesta en marcha`

  - **DJango**
  ```
    cd backend
    cp ./src/settings.example.py ./src/settings.py
    pipenv install
    pipenv run python ./manage.py migrate
    pipenv run python ./filler.py  (Opcional, creación de dummys )
    pipenv run python ./manage.py runserver 0.0.0.0:8000
  ```
   - **React**
  ```
    cd frontend
    npm install -D
    npm run dev
  ```

## Tecnologías 👨‍💻

---

Lista de tecnologías utilizadas en este proyecto:

`Backend` 🏗️

- DRF v3.14.0
  - Routes
  - Models
  - Controllers
  - DB validation
  - PostgreSQL
     - Relationships
     - Schema
  - Middleware_auth
     - Token JWT
     - Token Blacklist

`Frontend` 🏛️

- React v18.2.0
  - JavaSpript
  - Estructurado en Modules
  - Routes
  - Models
  - Components
  - Reactive Forms
     - Validation
  - Lazy load
  - Guards
  - Service with axios
  - Authentication JWT enviado por Headers
  - Hooks y context (Reducer)
  - Librerias:
    - react-toastify
    - leaflet
    - react-leaflet
    - react-qr-code
    - firebase
    - react-pdf/renderer
  - Test:
    - Vitest 

`BBDD`💾

- PostgreSQL

# Despliegue

Nos situaremos en la raíz del proyecto con el siguiente comando.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>cd TrainTrakr
</code></pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="docker-compose up" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>

Ejecutaremos el siguiente comando y se realizará todo el desplegamiento del proyecto, tendrás que cambiar el archivo secret.js que está en frontend/src para que funcione todo correctamente.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>docker-compose up
</code></pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="docker-compose up" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
