import { useEffect, useContext, useState } from "react";
import { useRent } from "../../../hooks/useRent";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import AsideProfile from "./AsideProfile";
import { useProfile } from "../../../hooks/useProfile";
import Bookings from "./Bookings";
import DataProfile from "./DataProfile";
import { useIncidents } from "../../../hooks/useIncidents";
import Incidents from "./Incidents";
import FormIncidents from "../incidents/FormIncidents";
import Notification from "../notifications/Notification";
import { useNotification } from "../../../hooks/useNotification";
import { NotificationsContext } from "../../../context/Notifications/NotificationsProvider"
import QRCodeTrip from "./QRcode";
import AsideProfileMovile from "./AsideProfileMovile";

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
  //min-[1220px]:w-[60rem] min-[1220px]:h-[35rem]
  return (
    <>
      <section className="w-full bg-[url('https://tailframes.com/images/squares-bg.webp')]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-ful hidden md:block">
            <AsideProfile setPage={useChangePage} name={AuthState.user.name} user={AuthState.user}/>
          </div>
          <div className="md:w-1/3 w-ful md:hidden">
            <AsideProfileMovile setPage={useChangePage} name={AuthState.user.name} user={AuthState.user}/>
          </div>
          <div className="md:w-2/3 w-full overflow-hidden">
            <div className="xl:w-[60rem] xl:h-[35rem] lg:w-[40rem] lg:h-[30rem] bg-gray-800 p-8 rounded-lg shadow-md overflow-y-auto mt-5 m-8">
              {page === 'bookings' ? (
                <>
                  {rents !== undefined && rents.length > 0 && trip.length === 0 ? (
                    <>
                      {rents.map((rent) => (
                        <>
                          <h2 className="text-xl font-bold mb-4 text-white">Mis Viajes</h2>
                          <Bookings rent={rent} key={rent.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {trip.length !== 0 ? (
                        <>
                          <h2 className="text-xl font-bold mb-4 text-white">Viajes</h2>
                          <Bookings rent={trip} key={trip.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                          <QRCodeTrip trip={trip}/>
                        </>
                      ) : (
                        <h1>No existen Viajes</h1>
                      ) }
                    </>
                  )}
                </>
              ) : null}
              {page === 'incidents' ? (
                <>
                  <h2 className="text-xl font-bold mb-4 text-white">Mis Incidencias</h2>
                  <div className="row">
                    <div className="col-sm">
                      <h3 className="text-sm font-bold mb-4 text-white">Trenes</h3>
                      {incidentsT !== undefined && incidentsT.length > 0 ? (
                        <>
                          {incidentsT.map((incident) => (
                            <Incidents incident={incident} key={incident.id}/>
                          ))}
                        </>
                      ) : null }
                    </div>
                    <div className="col-sm">
                    <h3 className="text-sm font-bold mb-4 text-white">Sillas</h3>

                      {incidentsC !== undefined && incidentsC.length > 0 ? (
                        <>
                          {incidentsC.map((incident) => (
                            <Incidents incident={incident} key={incident.id}/>
                          ))}
                        </>
                      ) : null }
                    </div>
                  </div>
                </>
              ): null}
              {page === 'formincidents' ? (
                <>
                  <h2 className="text-xl font-bold mb-4 text-white">Crear Incidencia</h2>
                  <FormIncidents data={rent} sendData={(data) => usePostIncidents(data)}/>
                </>
              ) : null}
              {page === 'notifications' ? (
                <>
                  {NotificationsState.notifications !== undefined && NotificationsState.notifications.length > 0 ? (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-white">Mis Notificaciones</h2>
                      {NotificationsState.notifications.map((notification) => (
                        <Notification data={notification} key={notification.id}/>
                      ))}
                    </>
                  ) : null }
                </>
              ): null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileUser