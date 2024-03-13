import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../hooks/useContextHook";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { useAuth } from "../../hooks/useAuth";
import { NotificationsContext } from "../../context/Notifications/NotificationsProvider";
import NotificationHeader from "./notifications/NotificationHeader";

const Header = () => {
  const navigate = useNavigate();
  const { setDataContexts, getNotification } = useContextHook();
  const { useLogOutUser} = useAuth();
  const [notificate, setNotificate] = useState(false);
  const { NotificationsState } = useContext(NotificationsContext);
  const { AuthState } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuR = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuU = () => {
    setShowMenu(!showMenu);
  };

  setDataContexts()

  const redirects = {
    home: () => navigate('/'),
    trips: () => navigate('/trips'),
    dashboard: () => navigate('/dashboard'),
    login: () => navigate('/login'),
    register: () => navigate('/register'),
    profile: () => navigate('/profile'),
  }

  const logout = () => {
    useLogOutUser()
  }

  useEffect(() => {
    if(AuthState.isAuth) {
      getNotification()
    }
  }, [AuthState.isAuth])

  const isUser = AuthState.isAuth ? (
    <>
      <div className="relative">
        <div onClick={toggleMenuU} className="relative box-content flex items-center justify-center overflow-hidden rounded-full size-10 bg-white">
          <img src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-icono-de-perfil-de-instagram.png" alt="" className="aspect-square" />
        </div>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <a onClick={() => redirects.profile()} className="text-decoration-none block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</a>
            {AuthState.isAdmin ? <a onClick={() => redirects.dashboard()} className="text-decoration-none block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</a> : ''}
            <a onClick={() => redirects.profile()} className="text-decoration-none block px-4 py-2 text-gray-800 hover:bg-gray-200">Notificaciones</a>
            <a onClick={() => logout()} className="text-decoration-none block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</a>
          </div>
        )}
      </div>
    </>
  ) : (              
    <>
      <a type="button" onClick={() => redirects.login()}
        className="text-decoration-none group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
        <span>Login</span>
      </a>
    </>
  );
  
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a className="nav-link" onClick={() => redirects.home()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-train-freight-front" viewBox="0 0 16 16">
              <path d="M5.065.158A1.5 1.5 0 0 1 5.736 0h4.528a1.5 1.5 0 0 1 .67.158l3.237 1.618a1.5 1.5 0 0 1 .83 1.342V13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V3.118a1.5 1.5 0 0 1 .828-1.342zM2 9.372V13.5A1.5 1.5 0 0 0 3.5 15h4V8h-.853a.5.5 0 0 0-.144.021zM8.5 15h4a1.5 1.5 0 0 0 1.5-1.5V9.372l-4.503-1.35A.5.5 0 0 0 9.353 8H8.5zM14 8.328v-5.21a.5.5 0 0 0-.276-.447l-3.236-1.618A.5.5 0 0 0 10.264 1H5.736a.5.5 0 0 0-.223.053L2.277 2.67A.5.5 0 0 0 2 3.118v5.21l1-.3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.028zm-2-.6V5H8.5v2h.853a1.5 1.5 0 0 1 .431.063zM7.5 7V5H4v2.728l2.216-.665A1.5 1.5 0 0 1 6.646 7zm-1-5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-3 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </a>
          <button className="block sm:hidden focus:outline-none" onClick={toggleMenuR}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className="hidden sm:flex space-x-4">
            <a type="button" onClick={() => redirects.home()}
              className="text-decoration-none group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Home</span>
            </a>
            <a type="button" onClick={() => redirects.trips()}
              className="text-decoration-none group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Trips</span>
            </a>
            <a type="button" onClick={() => redirects.home()}
              className="text-decoration-none group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Contact</span>
            </a>
          </nav>
          {isUser}
        </div>
        {isOpen && (
          <nav className="sm:hidden mt-2 overflow-hidden z-10" >
            <a onClick={() => redirects.home()} className="text-decoration-none block py-2 px-4 text-white hover:bg-gray-700">Home</a>
            <a onClick={() => redirects.trips()} className="text-decoration-none block py-2 px-4 text-white hover:bg-gray-700">Trips</a>
            <a onClick={() => redirects.home()} className="text-decoration-none block py-2 px-4 text-white hover:bg-gray-700">Contacto</a>
          </nav>
        )}
      </header>
    </>
  )
}

export default Header;