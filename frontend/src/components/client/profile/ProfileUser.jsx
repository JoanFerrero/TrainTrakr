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
import AsideProfileMovile from "./AsideProfileMovile";
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
          <NumbersProfile NumberNotification={NotificationsState.notifications.filter(notifications => !notifications.seen).length} NumberTrips={rents.length}/>
        </div>
      </div>
    </>
  )
}

export default ProfileUser