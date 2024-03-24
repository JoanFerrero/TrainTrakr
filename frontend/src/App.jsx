import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React, { Suspense } from 'react';

import { StationsProvider } from './context/stations/StationsProvider';
import { TrainsProvider } from './context/trains/TrainsProvider';
import { ChairsProvider } from './context/chairs/ChairsProvider';
import { AuthProvider } from './context/Auth/AuthProvider';
import { NotificationsProvider } from './context/Notifications/NotificationsProvider'
import { IncidentsProvider } from './context/Incidents/IncidentsProvider';
import { TripsProvider } from './context/trips/TripsProvider';

import AdminGuard from './services/guards/AdminGuard';
import { AuthGuard, NoAuthGuard } from './services/guards/AuthGuard';

function App() { 
  const HomePage = React.lazy(() => import('./pages/client/HomePage'));
  const DashboardPage = React.lazy(() => import('./pages/admin/DashboardPage'));

  const Trips = React.lazy(() => import('./pages/client/TripsPage'));
  const CreateStationsPage = React.lazy(() => import('./pages/admin/stations/CreateStationsPage'));
  const ListStationsPage = React.lazy(() => import('./pages/admin/stations/ListStationsPage'));
  const EditStationPage = React.lazy(() => import('./pages/admin/stations/EditStationsPage'));

  const ListTrainsPage = React.lazy(() => import('./pages/admin/trains/ListTrainsPage'));
  const CreateTrainsPage = React.lazy(() => import('./pages/admin/trains/CreateTrainsPage'));
  const EditTrainsPage = React.lazy(() => import('./pages/admin/trains/EditTrainsPage'));

  const ListChairsPage = React.lazy(() => import('./pages/admin/chairs/ListChairsPage'));
  const CreateChairsPage = React.lazy(() => import('./pages/admin/chairs/CreateChairsPage'));
  const EditChairsPage = React.lazy(() => import('./pages/admin/chairs/EditChairsPage'));

  const ListTripsPage = React.lazy(() => import('./pages/admin/trips/ListTripsPage'));
  const CreateTripsPage = React.lazy(() => import('./pages/admin/trips/CreateTripsPage'));

  const LoginPage = React.lazy(() => import('./pages/client/LoginPage'));
  const RegisterPage = React.lazy(() => import('./pages/client/RegisterPage'));

  const ContactPage = React.lazy(() => import('./pages/client/ContactPage'));

  const HeaderPage = React.lazy(() => import('./pages/HeaderPage'));

  const ProfilePage = React.lazy(() => import('./pages/client/ProfilePage'));

  const DetailsPage = React.lazy(() => import('./pages/client/DetailsPage'));

  const ListIncidentsPage = React.lazy(() => import('./pages/admin/incidents/ListIncidentsPage'));
  const EditIncidentsPage = React.lazy(() => import('./pages/admin/incidents/EditIncidentsPage'));
  const QRValidation = React.lazy(() => import('./pages/client/QRValidation'));

  const Authenticated = React.lazy(() => import('./pages/client/Authenticated'))

  return (
    <Suspense>
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
                          <Route path="/home" element={<HomePage />} />
                          <Route path="/trips" element={<Trips />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/authenticated" element={<Authenticated />} />
                          <Route path="/authenticated/:email" element={<Authenticated />} />
                          <Route element={<NoAuthGuard />}>
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/register' element={<RegisterPage />} />
                          </Route>
                          <Route element={<AuthGuard />}>
                            <Route path='/profile' element={<ProfilePage />} />
                            <Route path="/trips/:slug" element={<DetailsPage />} />
                            <Route path="/validation/:slug" element={<QRValidation />} />
                          </Route>
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
    </Suspense>
  )
}

export default App