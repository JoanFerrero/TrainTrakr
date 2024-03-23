const Incidents = ({incident}) => {
  return (
    <>
      <div className="bg-white p-4 mt-2 rounded-lg shadow-md w-full">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center">
          <h5 className="card-title text-black">{incident.title}</h5>
          <p className="card-text text-black">Estado: {incident.status}</p>
        </div>
      </div>
    </>
  )
}

export default Incidents;