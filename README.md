# REACT_DRF_PostgresSQL

Por [`Joan Ferrero Montiel`](https://github.com/JoanFerrero)  

## Tabla de Contenidos

1. TrainTrakr_Joan
2. Instalar
3. Tecnologías

# TrainTrakr_Joan! 

1. **Home:**
   Listado de todas las estaciones disponibles en la aplicacion.

2. **Trips:**
   Listados de viajes, filtro, mapa con las estaciones y redirección al details de cada mesa.

3. **Details:**
   Ver detalles del viaje con todos los asientos disponibles de tren y realizar reserva de un asiento.

4. **Profile:**
      Ver el perfil de tu usuario, incidencias, notificaciones y reservas del usuario.

6. **Login:**
   Register y Login de usuario.

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

`BBDD`💾

- PostgreSQL
