import React, { useState } from 'react';

const AsideProfileMovile = ({ user, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (page) => {
    setPage(page);
    setMenuOpen(false); // Oculta el menú después de hacer clic en una opción
  };

  return (
    <aside className="relative w-64 text-black-500 m-8">
      <button
        className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-gray-200 rounded-l-lg"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform ${menuOpen ? 'rotate-180' : 'rotate-0'} text-gray-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul className={`absolute top-0 right-20 mt-10 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-50 ${menuOpen ? 'block' : 'hidden'}`}>
        <li className="py-2 px-4" onClick={() => handleItemClick('notifications')}>Mis notificaciones</li>
        <li className="py-2 px-4" onClick={() => handleItemClick('bookings')}>Mis viajes</li>
        <li className="py-2 px-4" onClick={() => handleItemClick('incidents')}>Mis incidencias</li>
      </ul>
    </aside>
  );
};

export default AsideProfileMovile;