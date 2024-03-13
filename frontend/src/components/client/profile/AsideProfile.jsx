const AsideProfile = ({user, setPage}) => {
  return (
    <>
      <aside className="w-64 text-black-500 m-8">
        <div className="w-full  bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-white">Perfil de Usuario</h2>
          <div className="">
            <span className="text-gray-200">{user.username}</span>
          </div>
        </div>
        <ul>
          <li className="py-2 px-4" onClick={() => setPage('notifications')}>Mis notificaciones</li>
          <li className="py-2 px-4" onClick={() => setPage('bookings')}>Mis viajes</li>
          <li className="py-2 px-4" onClick={() => setPage('incidents')}>Mis incidencias</li>
        </ul>
      </aside>
    </>
  )
}

export default AsideProfile;