const DataProfile = ({profile}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://i.pinimg.com/originals/6f/57/76/6f57760966a796644b8cfb0fbc449843.png" className="img-fluid rounded-start w-75" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{profile.username}</h5>
              <p className="card-text">Correo Electrónico: {profile.email}</p>
              <p className="card-text"><small className="text-muted">Tipo: {profile.type}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataProfile;