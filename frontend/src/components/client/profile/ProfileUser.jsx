import { useEffect, useContext, useState } from "react";
import { useRent } from "../../../hooks/useRent";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import AsideProfile from "./AsideProfile";
import { useProfile } from "../../../hooks/useProfile";
import Bookings from "./Bookings";
import { useIncidents } from "../../../hooks/useIncidents";
import Incidents from "./Incidents";
import FormIncidents from "../incidents/FormIncidents";
import Notification from "../notifications/Notification";
import { useNotification } from "../../../hooks/useNotification";
import { NotificationsContext } from "../../../context/Notifications/NotificationsProvider"
import QRCodeTrip from "./QRCodeTrip";
import DataProfile from "./DataProfile";
import NumbersProfile from "./NumbersProfile";

const ProfileUser = () => {
  const { page, rent, trip, useChangePage, useChangePageData, useSelectTrip } = useProfile();
  const { rents, useSetRent } = useRent();
  const { incidentsT, incidentsC, useSetIncidents, usePostIncidents} = useIncidents();
  const { NotificationsState } = useContext(NotificationsContext);
  const { AuthState } = useContext(AuthContext);

  useEffect(() => {
    useSetRent();
    useSetIncidents();
  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <AsideProfile setPage={useChangePage} />
        <div className="p-4 flex-1">
          <DataProfile profile={AuthState.user} />
          {page === 'profile' ? (
            <NumbersProfile NumberNotification={NotificationsState.notifications.filter(notifications => !notifications.seen).length} NumberTrips={rents.length}/>
          ) : null}
          {page === 'bookings' ? (
            <>
              <div className="lg:w-1/2 w-full mb-10 lg:mb-0 mt-10 ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Mis Viajes</h1>
                <div className="h-1 w-20 bg-gray-800 rounded mb-3"></div>
              </div>
              {rents !== undefined && rents.length > 0 && trip.length === 0 ? (
                <div className="mb-32">
                  {rents.map((rent) => (
                    <>
                      <Bookings rent={rent} key={rent.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                    </>
                  ))}
                </div>
              ) : (
                <>
                  {trip.length !== 0 ? (
                    <div className="mb-32">
                      <h2 className="text-xl font-bold mb-4 text-white">Viajes</h2>
                      <Bookings rent={trip} key={trip.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                      <QRCodeTrip trip={trip}/>
                    </div>
                  ) : (
                    <h1>No existen Viajes</h1>
                  )}
                </>
              )}
            </>
          ) : null}
          {page === 'notifications' ? (
            <>
              <div className="lg:w-1/2 w-full mb-10 lg:mb-0 mt-10 ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Mis Notificaciones</h1>
                <div className="h-1 w-20 bg-gray-800 rounded mb-3"></div>
              </div>
              {NotificationsState.notifications !== undefined && NotificationsState.notifications.length > 0 ? (
                <div className="mb-32">
                  <h2 className="text-xl font-bold mb-4 text-white">Mis Notificaciones</h2>
                  {[...NotificationsState.notifications.filter(incident => !incident.seen), ...NotificationsState.notifications.filter(incident => incident.seen)].map((notification) => (
                    <Notification data={notification} key={notification.id}/>
                  ))}
                </div>
              ) : null }
            </>
          ) : null}
          {page === 'incidents' ? (
            <div className="mb-32">
              <div className="mt-10 flex  justify-center">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full flex flex-col lg:flex-row lg:space-x-4">
                  <div className="lg:w-1/2 lg:mr-4 flex items-center justify-center mt-2">
                  <div>
                    {incidentsT !== undefined && incidentsT.length > 0 ? (
                      <>
                        <h2 className="text-xl font-bold mb-4 text-black">Incidencias Trenes</h2>
                        {incidentsT.map((incident) => (
                          <Incidents incident={incident} key={incident.id}/>
                        ))}
                      </>
                    ) : null }
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex items-center justify-center mt-2">
                    <div>
                      {incidentsC !== undefined && incidentsC.length > 0 ? (
                        <>
                          <h2 className="text-xl font-bold mb-4 text-black">Incidencias Trenes</h2>
                          {incidentsC.map((incident) => (
                            <Incidents incident={incident} key={incident.id}/>
                          ))}
                        </>
                      ) : null }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {page === 'formincidents' ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-white">Crear Incidencia</h2>
              <FormIncidents data={rent} sendData={(data) => usePostIncidents(data)}/>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ProfileUser