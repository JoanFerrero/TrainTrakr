import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { StationsProvider } from './context/stations/StationsProvider';
import { TrainsProvider } from './context/trains/TrainsProvider';
import { ChairsProvider } from './context/chairs/ChairsProvider';
import { AuthProvider } from './context/Auth/AuthProvider';
import { NotificationsProvider } from './context/Notifications/NotificationsProvider'
import { IncidentsProvider } from './context/Incidents/IncidentsProvider';
import HomePage from './pages/client/HomePage';
import DashboardPage from './pages/admin/DashboardPage';

import Trips from './pages/client/TripsPage';
import CreateStationsPage from './pages/admin/stations/CreateStationsPage';
import ListStationsPage from './pages/admin/stations/ListStationsPage';
import EditStationPage from './pages/admin/stations/EditStationsPage';

import ListTrainsPage from './pages/admin/trains/ListTrainsPage';
import CreateTrainsPage from './pages/admin/trains/CreateTrainsPage';
import EditTrainsPage from './pages/admin/trains/EditTrainsPage';

import ListChairsPage from './pages/admin/chairs/ListChairsPage';
import CreateChairsPage from './pages/admin/chairs/CreateChairsPage';
import EditChairsPage from './pages/admin/chairs/EditChairsPage';

import ListTripsPage from './pages/admin/trips/ListTripsPage';
import CreateTripsPage from './pages/admin/trips/CreateTripsPage';

import LoginPage from './pages/client/LoginPage';
import RegisterPage from './pages/client/RegisterPage';

import HeaderPage from './pages/HeaderPage';

import ProfilePage from './pages/client/ProfilePage';

import AdminGuard from './services/guards/AdminGuard';
import AuthGuard from './services/guards/AuthGuard';
import { TripsProvider } from './context/trips/TripsProvider';
import DetailsPage from './pages/client/DetailsPage';

import ListIncidentsPage from './pages/admin/incidents/ListIncidentsPage';
import EditIncidentsPage from './pages/admin/incidents/EditIncidentsPage';
function App() { 
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationsProvider>
          <StationsProvider>
            <TrainsProvider>
              <ChairsProvider>
                <TripsProvider>
                  <IncidentsProvider>
                    <HeaderPage>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/trips" element={<Trips />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route element={<AdminGuard/>}>
                          <Route path="/dashboard" element={<DashboardPage/>} />

                          <Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
                          <Route path="/dashboard/liststations" element={<ListStationsPage/>} />
                          <Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>} />

                          <Route path="/dashboard/listtrains" element={<ListTrainsPage />} />
                          <Route path="/dashboard/createtrains" element={<CreateTrainsPage />} />
                          <Route path="/dashboard/updatetrains/:slug" element={<EditTrainsPage />} />

                          <Route path="/dashboard/listchairs" element={<ListChairsPage />} />
                          <Route path="/dashboard/createchairs" element={<CreateChairsPage />} />
                          <Route path="/dashboard/updatechairs/:slug" element={<EditChairsPage />} />
                        
                          <Route path="/dashboard/listtrips" element={<ListTripsPage />} />
                          <Route path="/dashboard/createtrips" element={<CreateTripsPage />} />

                          <Route path="/dashboard/listincidents" element={<ListIncidentsPage />} />
                          <Route path="/dashboard/updateincidents/:type/:slug" element={<EditIncidentsPage />} />

                        </Route>
                        <Route element={<AuthGuard />}>
                          <Route path='/profile' element={<ProfilePage />} />
                          <Route path="/trips/:slug" element={<DetailsPage />} />
                        </Route>
                      </Routes>
                      <Toaster
                        position="top-right"
                        reverseOrder={false}
                      />
                    </HeaderPage>
                  </IncidentsProvider>
                </TripsProvider>
              </ChairsProvider>
            </TrainsProvider>
          </StationsProvider>
        </NotificationsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

//**import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { StationsProvider } from './context/StationsProvider';
//import React, { Suspense } from 'react';

//const Home = React.lazy(() => import('./pages/client/HomePage'));
//const Stations = React.lazy(() => import('./pages/client/StationsPage'));
//const DashboardPage = React.lazy(() => import('./pages/admin/DashboardPage'));

//const CreateStationsPage = React.lazy(() => import('./pages/admin/CreateStationsPage'));
//const ListStationsPage = React.lazy(() => import('./pages/admin/ListStationsPage'));
//const EditStationPage = React.lazy(() => import('./pages/admin/EditStationsPage'));

//function App() { 
//  return (
    //<Suspense>
      //<BrowserRouter>
        //<StationsProvider>
          //<Routes>
            //<Route path="/" element={<Home />} />
            //<Route path='/stations' element={<Stations />} />
            //<Route path="/dashboard" element={<DashboardPage/>} />
            //<Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
            //<Route path="/dashboard/liststations" element={<ListStationsPage/>} />
            //<Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>}/>
          //</Routes>
        //</StationsProvider>
      //</BrowserRouter>
  //</Suspense>
//  )
//}

//export default App
