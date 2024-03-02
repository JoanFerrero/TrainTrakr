import { AuthContext } from "../context/Auth/AuthProvider";
import Header from "../components/client/Header";
import HeaderDashBoard from "../components/admin/Header";
import { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useContextHook } from "../hooks/useContextHook";
import { useAuth } from "../hooks/useAuth";
import TopBar from "../components/admin/dashboard/TopBar";
const HeaderPage = ({ children }) => {
  const { AuthState } = useContext(AuthContext);
  const location = useLocation();
  const urlParts = location.pathname.split('/');
  const { useIsLoged } = useAuth();

  useEffect(() => {
    useIsLoged();
  }, [])

  return (
    <>
      { AuthState.isAdmin === true && urlParts[1] === 'dashboard' ? (
        <>
          <div id="wrapper">
            <HeaderDashBoard />
            <div id="content-wrapper" className="d-flex flex-column" >
              <TopBar />
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  )
}

export default HeaderPage;