import React, { useEffect } from "react";
import { useTrips } from "../../../hooks/useTrips";

const DataList = ({trip}) => {
  const { useSetStations, exit, arrival } = useTrips()
  useEffect(() => {
    const data = {
      exit: trip.exit_station_id,
      arrival: trip.arrival_station_id
    }
    useSetStations(data)
  }, [])

  return (
    <tr>
      <th scope="row">{trip.id}</th>
      <td>{exit.name}</td>
      <td>{arrival.name}</td>
      <td>{trip.date}</td>
      <td>{trip.time} h</td>
    </tr>
  )
}

export default DataList;