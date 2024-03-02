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
        {/* <button onClick={toggleMenuU} className="focus:outline-none">
          <img src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-icono-de-perfil-de-instagram.png" alt="Avatar" className="w-8 h-8 rounded-full" />
        </button> */}
        <div onClick={toggleMenuU} className="relative box-content flex items-center justify-center overflow-hidden rounded-full size-10 bg-white">
          <img src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-icono-de-perfil-de-instagram.png" alt="" className="aspect-square" />
        </div>
        {showMenu && (
          <div className="fixed right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <a onClick={() => redirects.profile()}className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</a>
            {AuthState.isAdmin ? <a onClick={() => redirects.dashboard()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</a> : ''}
            <a nClick={() => redirects.profile()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Notificaciones</a>
            <a onClick={() => logout()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</a>
          </div>
        )}
      </div>
    </>
  ) : (              
    <>
      <a type="button" onClick={() => redirects.login()}
        className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
        <span>Login</span>
      </a>
    </>
  );
  
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Logo</div>
          <button className="block sm:hidden focus:outline-none" onClick={toggleMenuR}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className="hidden sm:flex space-x-4">
            <a type="button" onClick={() => redirects.home()}
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Home</span>
            </a>
            <a type="button" onClick={() => redirects.trips()}
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Trips</span>
            </a>
            <a type="button" 
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-black px-2 text-white h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80">
              <span>Contact</span>
            </a>
          </nav>
          {isUser}
        </div>
        {isOpen && (
          <nav className="sm:hidden mt-2">
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Home</a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Trips</a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Contacto</a>
          </nav>
        )}
      </header>
    </>
  )
}

export default Header;