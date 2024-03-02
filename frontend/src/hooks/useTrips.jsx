import { useCallback, useState, useContext,useEffect } from "react";
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";
import { StationsContext } from "../context/stations/StationsProvider";
import TripsService from "../services/TripsService";

export const useTrips = () => {
  const [ exit, setExit ] = useState({});
  const [ arrival, setArrival ] = useState({});
  const { StationsState } = useContext(StationsContext);
  const [trip, setTrip] = useState();
  const { dispathCustom } = useContextHook()
  const navigate = useNavigate()

  const useAddTrips = useCallback(data => {
    console.log(data)
    TripsService.createTrip(data)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_TRIPS', data, 'trips')
          navigate('/dashboard')
        }
      })
  }, [])

  const useOneTrain = useCallback(data => {
    TripsService.getOneTrip(data)
      .then(({ data, status }) => {
        if (status === 200) {
          setTrip(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useSetStations = useCallback(data => {
    setExit(StationsState.stations.find(station => station.id === data.exit))
    setArrival(StationsState.stations.find(station => station.id === data.arrival))
  }, [])
  
  return { useSetStations, useOneTrain, useAddTrips, exit, arrival, trip }
}