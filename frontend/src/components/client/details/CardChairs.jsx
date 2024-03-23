const CardChairs = ({chair, setChairSelected, trip, chairS}) => {

  let slugCSS = ''
  if(chairS !== null) {
    slugCSS = chairS.slug
  }
  return (
    <>
      <div className="bg-gray-700 p-4 rounded-md mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-2 text-white">Viaje a {trip.arrival_station.name}</h3>
          <p className="text-gray-300">Fecha: {trip.date}</p>
          <p className="text-gray-300" >Categoria silla: {chair.type}</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <span className="text-white cursor-pointer mr-2" onClick={()=> setChairSelected(chair)} data-testid="spanButton">
            { chair.slug === slugCSS ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="blue" class="bi bi-bag-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg>
            )}
          </span>
        </div>
      </div>
    </>
  )
}

export default CardChairs;