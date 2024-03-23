import { useState } from "react";

const AsideProfile = ({setPage}) => {

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    if (settingsDropdownOpen) {
      setSettingsDropdownOpen(false);
    }
  };

  const handleSettingsClick = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
    if (profileDropdownOpen) {
      setProfileDropdownOpen(false);
    }
  };
  
  return (
    <>
      <aside className="text-black lg:w-[25rem] m-8">
        <div>
          <div className="p-4">
            <div className="mb-4">
              <button
                onClick={handleProfileClick}
                className="flex justify-between items-center w-full px-4 py-2 text-left text-2xl font-semibold focus:outline-none hover:bg-gray-100"
              >
                Perfil
              </button>
              {profileDropdownOpen && (
                <div className="mt-2 pl-2 transition-all duration-300 ease-in-out">
                  <li className="block py-2 text-xl  text-black hover:text-gray-500" onClick={() => setPage('proffile')}>Ver Perfil</li>
                </div>
              )}
            </div>
            <div className="mb-4 border-b border-gray-400"></div>
            <div className="mb-4">
              <button
                onClick={handleSettingsClick}
                className="flex justify-between items-center w-full px-4 py-2 text-left text-2xl font-semibold focus:outline-none hover:bg-gray-100"
              >
                Viajes
              </button>
              {settingsDropdownOpen && (
                <div className="mt-2 pl-2">
                  <li className="block py-2 text-xl text-black hover:text-gray-500" onClick={() => setPage('bookings')}>Mis Viajes</li>
                  <li className="block py-2 text-xl text-black hover:text-gray-500" onClick={() => setPage('notifications')}>Mis Notificaciones</li>
                  <li className="block py-2 text-xl text-black hover:text-gray-500" onClick={() => setPage('incidents')}>Mis Incidencias</li>
                </div>
              )}
            </div>
            <div className="mb-4 border-b border-gray-400"></div>
            <div className="mb-4">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-left text-2xl font-semibold focus:outline-none hover:bg-gray-100"
              >
                Cerrar Sesion
              </button>

            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default AsideProfile;