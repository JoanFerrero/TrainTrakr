import './sb-admin-2.css';
import { useNavigate } from "react-router-dom";
import { useContextHook } from '../../hooks/useContextHook';

const Header = () => {
  const navigate = useNavigate();
  const { setDataContexts } = useContextHook();

  setDataContexts()
  
  const redirects = {
    home: () => navigate('/'),
    dashboard: () => navigate('/dashboard'),

    createStations: () => navigate('/dashboard/createstations'),
    listStations: () => navigate('/dashboard/liststations'),

    listTrains: () => navigate('/dashboard/listtrains'),
    createTrains: () => navigate('/dashboard/createtrains'),

    listChairs: () => navigate('/dashboard/listchairs'),
    createChairs: () => navigate('/dashboard/createchairs'),

    listTrips: () => navigate('/dashboard/listtrips'),
    createTrips: () => navigate('/dashboard/createtrips'),

    listIncidents: () => navigate('/dashboard/listincidents'),
  }

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" onClick={() => redirects.dashboard()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-train-freight-front" viewBox="0 0 16 16">
            <path d="M5.065.158A1.5 1.5 0 0 1 5.736 0h4.528a1.5 1.5 0 0 1 .67.158l3.237 1.618a1.5 1.5 0 0 1 .83 1.342V13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V3.118a1.5 1.5 0 0 1 .828-1.342zM2 9.372V13.5A1.5 1.5 0 0 0 3.5 15h4V8h-.853a.5.5 0 0 0-.144.021zM8.5 15h4a1.5 1.5 0 0 0 1.5-1.5V9.372l-4.503-1.35A.5.5 0 0 0 9.353 8H8.5zM14 8.328v-5.21a.5.5 0 0 0-.276-.447l-3.236-1.618A.5.5 0 0 0 10.264 1H5.736a.5.5 0 0 0-.223.053L2.277 2.67A.5.5 0 0 0 2 3.118v5.21l1-.3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.028zm-2-.6V5H8.5v2h.853a1.5 1.5 0 0 1 .431.063zM7.5 7V5H4v2.728l2.216-.665A1.5 1.5 0 0 1 6.646 7zm-1-5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-3 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
        <div className="sidebar-brand-text mx-3"> TrainWeb Admin</div>
    </a>

    <hr className="sidebar-divider my-0" />

    <li className="nav-item active">
        <a className="nav-link" onClick={() => redirects.home()}>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span></a>
    </li>

    <hr className="sidebar-divider my-0" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.dashboard()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.listStations()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>List Stations</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.createStations()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Create Stations</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.listTrains()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>List Trains</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.createTrains()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Create Trains</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.listChairs()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>List Chairs</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.createChairs()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Create Chairs</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.listTrips()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>List Trips</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.createTrips()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Create Trips</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <li className="nav-item active">
      <a className="nav-link" onClick={() => redirects.listIncidents()}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>List Incidents</span>
      </a>
    </li>
  </ul>
  )
}

export default Header;