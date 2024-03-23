import { useState } from 'react';

const AsideDetails = ({trip, chair, price, realizarReserva}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <aside className="text-black lg:w-[25rem] m-8">
      <div className='hidden md:block'>
        <div className="p-4">
          <div className="mb-4 text-left text-2xl font-semibold">
            Salida: {trip.exit_station.name}
          </div>
          <div className="mb-4 border-b border-gray-400"></div>
          <div className="mb-4 text-left text-2xl font-semibold">
            LLegada: {trip.arrival_station.name}
          </div>
          <div className="mb-4 border-b border-gray-400"></div>
          <div className="mb-4 text-left text-2xl font-semibold">
            Fecha: {trip.date} 
          </div>
          <div className="mb-4 border-b border-gray-400"></div>
          <div className="mb-4 text-left text-2xl font-semibold">
            Duracion: {trip.time} 
          </div>
          {chair !== null ? (
            <>
              <div className="mb-4 border-b border-gray-400"></div>
              <div className="mb-4 text-left text-2xl font-semibold">
                Categoria {chair === null ? "" : chair.type}
              </div>
              <div className="mb-4 border-b border-gray-400"></div>
              <div className="mb-4 text-left text-2xl font-semibold">
                Precio: {price} €
              </div>
              <div className="mb-4 border-b border-gray-400"></div>
              <div className="mb-4 text-left text-2xl font-semibold">
                <button onClick={() => realizarReserva()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Realizar reserva
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className='md:hidden'>
        <div className="p-4">
          <div className="mb-4 text-left text-2xl font-semibold flex items-center">
            Datos Viaje
            <button
              className="ml-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg
                width="32"
                height="32"
                className={`ml-auto transition-transform transform ${
                  dropdownOpen ? "-rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>
          </div>
          <div className="mb-4 border-b border-gray-400"></div>
          {dropdownOpen && (
            <div className="">
              {/* Contenido del desplegable */}
              <p>Salida: {trip.exit_station.name}</p>
              <p>LLegada: {trip.arrival_station.name}</p>
              <p>Fecha: {trip.date} </p>
              <p>Duracion: {trip.time} </p>
              {chair !== null ? (
                <p>Categoria {chair === null ? "" : chair.type}</p>
              ) : null}
            </div>
          )}
          {chair !== null ? (
            <>
              <div className="mb-4 text-left text-2xl font-semibold">
                Precio: {price} €
              </div>
              <div className="mb-4 border-b border-gray-400"></div>
              <div className="mb-4 text-left text-2xl font-semibold">
                <button onClick={() => realizarReserva()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Realizar reserva
                </button>
              </div>
            </>
          ) : null }
          {/* Resto del contenido del aside */}
        </div>
      </div>
    </aside>
    
  )
}

export default AsideDetails