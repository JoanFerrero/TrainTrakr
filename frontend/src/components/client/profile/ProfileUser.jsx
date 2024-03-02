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

const ProfileUser = () => {
  const { page, rent, useChangePage, useChangePageData } = useProfile();
  const { rents, useSetRent } = useRent();
  const { incidentsT, incidentsC, useSetIncidents, usePostIncidents} = useIncidents();
  const { NotificationsState } = useContext(NotificationsContext);
  const { AuthState } = useContext(AuthContext);

  useEffect(() => {
    useSetRent();
    useSetIncidents();
  }, [])
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <AsideProfile name={AuthState.user.username} setPage={(data) => useChangePage(data)}/>
        </div>
        <div className="col-md-8">
          {page === 'profile' ? (
            <>
              <DataProfile profile={AuthState.user} />
            </>
          ):null}
          {page === 'bookings' ? (
            <>
              {rents !== undefined && rents.length > 0 ? (
                <>
                  {rents.map((rent) => (
                    <Bookings rent={rent} key={rent.id} setPageData={(page, data) => useChangePageData(page, data)}/>
                  ))}
                </>
              ) : null }
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
    </div>
  )
}

export default ProfileUser