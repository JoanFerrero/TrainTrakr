import { AuthContext } from "../../context/Auth/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { AuthState } = useContext(AuthContext);

  return AuthState.isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default AuthGuard;