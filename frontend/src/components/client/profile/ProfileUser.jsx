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
      <section className="w-full bg-[url('https://tailframes.com/images/squares-bg.webp')]">
        <div className="flex">
          <div className="w-full min-[1220px]:w-1/3 overflow-hidden">
            <AsideProfile setPage={useChangePage} name={AuthState.user.name}/>
          </div>
          <div className="hidden  min-[1220px]:block w-2/3 h-screen overflow-hidden"> 
          {page === 'profile' ? (
              <>
                <DataProfile profile={AuthState.user} />
              </>
            ):null}
            {page === 'bookings' ? (
              <>
                {rents !== undefined && rents.length > 0 && trip.length === 0 ? (
                  <>
                    {rents.map((rent) => (
                      <Bookings rent={rent} key={rent.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                    ))}
                  </>
                ) : (
                  <>
                    <Bookings rent={trip} key={trip.id} setPageData={(page, data) => useChangePageData(page, data)} setTrip={(data) => useSelectTrip(data)} />
                    <QRCodeTrip trip={trip}/>
                  </>
                )}
              </>
            ) : null}
            {page === 'incidents' ? (
              <>
                <div className="row">
                  <div className="col-sm">
                    <h1>Trenes</h1>
                    {incidentsT !== undefined && incidentsT.length > 0 ? (
                      <>
                        {incidentsT.map((incident) => (
                          <Incidents incident={incident} key={incident.id}/>
                        ))}
                      </>
                    ) : null }
                  </div>
                  <div className="col-sm">
                  <h1>Sillas</h1>
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
                <FormIncidents data={rent} sendData={(data) => usePostIncidents(data)}/>
              </>
            ) : null}
            {page === 'notifications' ? (
              <>
                {NotificationsState.notifications !== undefined && NotificationsState.notifications.length > 0 ? (
                  <>
                    {NotificationsState.notifications.map((notification) => (
                      <Notification data={notification} key={notification.id}/>
                    ))}
                  </>
                ) : null }
              </>
            ): null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileUser