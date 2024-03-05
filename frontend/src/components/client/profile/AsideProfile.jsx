const AsideProfile = ({name, setPage}) => {
  return (
    <>
      <aside className="w-64 text-black-500 m-8">
        <ul>
          <li className="py-2 px-4 font-black items-center">{name}</li>
          <li className="py-2 px-4" onClick={() => setPage('profile')}>Mis datos</li>
          <li className="py-2 px-4" onClick={() => setPage('notifications')}>Mis notificaciones</li>
          <li className="py-2 px-4" onClick={() => setPage('bookings')}>Mis viajes</li>
          <li className="py-2 px-4" onClick={() => setPage('incidents')}>Mis incidencias</li>
        </ul>
      </aside>
    </>
  )
}

export default AsideProfile;