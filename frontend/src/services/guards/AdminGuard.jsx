import { AuthContext } from "../../context/Auth/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminGuard = () => {
  const { AuthState } = useContext(AuthContext);
  
  return AuthState.isAdmin ? <Outlet/> : <Navigate to="/" />;
}

export default AdminGuard;