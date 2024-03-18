import { AuthContext } from "../../context/Auth/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function AuthGuard() {
  const { AuthState } = useContext(AuthContext);

  return AuthState.isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export function NoAuthGuard() {
  const { AuthState } = useContext(AuthContext);
  console.log(AuthState)
  console.log(AuthState.isAuth)
  console.log(!AuthState.isAuth)
  return !AuthState.isAuth ? <Outlet /> : <Navigate to="/" />
}