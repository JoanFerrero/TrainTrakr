const NumbersProfile = ({NumberTrips, NumberNotification, setPage}) => {
  return (
    <div className="mt-10 flex  justify-center mb-32">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full flex flex-col lg:flex-row lg:space-x-4">
        <div className="lg:w-1/2 lg:mr-4 flex items-center justify-center mt-2">
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">{NumberTrips}</div>
              <p className="text-gray-700 mb-4">Viajes Realizados</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => setPage('bookings')}>Ver Viajes</button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-2">
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">{NumberNotification}</div>
              <p className="text-gray-700 mb-4">Notificaciones no vistas</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => setPage('notifications')}>Ver Notificaciones</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumbersProfile;