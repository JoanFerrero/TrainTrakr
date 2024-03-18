const CardChairs = ({chair, setChairSelected, trip}) => {
  return (
    <>
      <div className="bg-gray-700 p-4 rounded-md mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-2 text-white">Viaje a {trip.arrival_station.name}</h3>
          <p className="text-gray-300">Fecha: {trip.date}</p>
          <p className="text-gray-300" >Categoria silla: {chair.type}</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <span className="text-white cursor-pointer mr-2" onClick={()=> setChairSelected(chair)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-md mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-2 text-white">Viaje a {trip.arrival_station.name}</h3>
          <p className="text-gray-300">Fecha: {trip.date}</p>
          <p className="text-gray-300" >Categoria silla: {chair.type}</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <span className="text-white cursor-pointer mr-2" onClick={()=> setChairSelected(chair)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}

export default CardChairs;