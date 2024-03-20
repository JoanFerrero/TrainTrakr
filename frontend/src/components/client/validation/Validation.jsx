const Validation = ({rent}) => {
  const fechaActual = new Date();

  const partesFecha = rent.trip.date.split('/');
  const diaOtraFecha = parseInt(partesFecha[0], 10);
  const mesOtraFecha = parseInt(partesFecha[1], 10);
  const añoOtraFecha = parseInt(partesFecha[2], 10);
  const otraFecha = new Date(añoOtraFecha, mesOtraFecha - 1, diaOtraFecha);

  return (
    <>
      {otraFecha > fechaActual ?  (
        <div className="flex justify-center mt-10 h-screen">
          <div className="w-64 h-64 bg-green-500 flex justify-center items-center rounded-lg" data-testid="color">
            <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ): (
        <div className="flex justify-center mt-10 h-screen">
          <div className="w-64 h-64 bg-red-500 flex justify-center items-center rounded-lg" data-testid="color">
            <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default Validation