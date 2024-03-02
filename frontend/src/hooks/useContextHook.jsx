import { StationsContext } from "../context/stations/StationsProvider";
import { useCallback, useContext, useEffect } from "react";
import { TrainsContext } from "../context/trains/TrainsProvider";
import { ChairsContext } from "../context/chairs/ChairsProvider";
import { AuthContext } from "../context/Auth/AuthProvider";
import { TripsContext } from "../context/trips/TripsProvider";
import { NotificationsContext } from "../context/Notifications/NotificationsProvider";
import { IncidentsContext } from "../context/Incidents/IncidentsProvider";
import StationsService from "../services/StationsServices";
import TrainsService from "../services/TrainsServices";
import ChairsService from "../services/ChairsServices";
import TripsService from "../services/TripsService";
import NotificationService from "../services/NotificationServices";
import IncidentsService from "../services/IncidentsServices";

export const useContextHook = () => {

  const { StationsDispatch, StationsState } = useContext(StationsContext);
  const { TrainsDispatch, TrainsState } = useContext(TrainsContext);
  const { ChairsDispatch, ChairsState } = useContext(ChairsContext);
  const { AuthDispatch, AuthState } = useContext(AuthContext);
  const { TripsDispatch, TripsState } = useContext(TripsContext);
  const { NotificationsDispatch, NotificationsState } = useContext(NotificationsContext);
  const { IncidentsDispatch, IncidentsState } = useContext(IncidentsContext)

  const setDataContexts = () => {
    useEffect(() => {
      if(StationsState.stations.length === 0) {
        StationsService.getAllStations()
          .then(({data}) => {
            dispathCustom("SET_STATIONS", data, 'stations')
          })
        .catch(e => console.error(e));
      };

      if(TrainsState.trains.length === 0) {
        TrainsService.getAllTrains()
          .then(({data}) => {
            dispathCustom("SET_TRAINS", data, 'trains')
          })
        .catch(e => console.error(e));
      };

      if(ChairsState.chairs.length === 0) {
        ChairsService.getAllChairs()
          .then(({data}) => {
            dispathCustom("SET_CHAIRS", data, 'chairs')
          })
      }

      if(TripsState.trips.length === 0) {
        TripsService.getAllTrips()
          .then(({data}) => {
            dispathCustom("SET_TRIPS", data, 'trips')
          })
      }
    }, [])
  }

  const setDataInsidents = useCallback(() => {
    if(AuthState.isAdmin) {
      if(IncidentsState.incidentsTrain.length === 0) {
        IncidentsService.getAllIncidentsTrain()
          .then(({data}) => {
            dispathCustom("SET_INCIDENTS_TRAIN", data, 'incidents')
          })
        .catch(e => console.error(e));
      }

      if(IncidentsState.incidentsChair.length === 0) {
        IncidentsService.getAllIncidentsChair()
          .then(({data}) => {
            dispathCustom("SET_INCIDENTS_CHAIR", data, 'incidents')
          })
        .catch(e => console.error(e));
      };
    }
  }, []);

  const useChangeFiler = useCallback(data => {
    if(data === '') {
      TripsService.getAllTrips()
        .then(({data}) => {
          dispathCustom("SET_TRIPS", data, 'trips');
          dispathCustom("STATION_FILTER", false, 'trips');
        })
    } else {
      TripsService.getAllTripsFiler(data)
      .then(({data}) => {
        dispathCustom("SET_TRIPS", data, 'trips');
        dispathCustom("STATION_FILTER", true, 'trips');
      })
    }
  }, [])

  const getNotification = () => {
    if(NotificationsState.notifications.length === 0) {
      NotificationService.getNotification()
        .then(({ data }) => {
          dispathCustom('SET_COUNTER', data.filter(item => item.seen === false).length, 'notifications')
          dispathCustom('SET_NOTIFICATION_NOT_SEEN', data.filter(item => item.seen === false), 'notifications')
          dispathCustom('SET_NOTIFICATION', data, 'notifications')
        })
    }
  }

  const dispathCustom = (type, payload, context) => {
    if(context === 'stations') {
      StationsDispatch({
        type: type,
        payload: payload,
      })
    } else if (context === 'trains') {
      TrainsDispatch({
        type: type,
        payload: payload,
      })
    } else if (context === 'chairs') {
      ChairsDispatch({
        type: type,
        payload: payload,
      })
    } else if(context === 'auth') {
      AuthDispatch({
        type: type,
        payload: payload
      })
    } else if(context === 'trips') {
      TripsDispatch({
        type: type,
        payload: payload
      })
    } else if(context === 'notifications') {
      NotificationsDispatch({
        type: type,
        payload: payload
      })
    } else if(context === 'incidents') {
      IncidentsDispatch({
        type: type,
        payload: payload
      })
    }
  };

  return { setDataInsidents, dispathCustom, setDataContexts, getNotification, useChangeFiler }
}