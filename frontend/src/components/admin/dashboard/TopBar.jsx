import { useContext } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const {AuthState} = useContext(AuthContext);

  const redirects = {
    profile: () => navigate('/profile'),
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" onClick={() => redirects.profile()} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{AuthState.user.username}</span>
              <img className="img-profile rounded-circle" src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default TopBar;