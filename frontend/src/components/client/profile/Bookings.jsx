const Bookings = ({rent, setPageData, setTrip}) => {
  const setIncident = () => {
    setPageData('formincidents', rent)
  }
  return (
    <>

      <div className="bg-gray-700 p-4 rounded-md mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-2 text-white">Viaje a {rent.trip.arrival_station.name}</h3>
          <p className="text-gray-300">Fecha: {rent.trip.date}</p>
          <p className="text-gray-300" onClick={()=> setIncident()}>Notificar incidencia</p>
        </div>
        <div className="md:w-1/2 flex justify-end mt-4 md:mt-0">
          <span className="text-white cursor-pointer" onClick={()=> setTrip(rent)}>QR</span>
        </div>
      </div>
    </>
  )
}

export default Bookings;