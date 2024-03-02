import React, { useEffect } from "react";
import { useTrips } from "../../../hooks/useTrips";
import { useNavigate } from "react-router-dom";

const CardTrips = ({trip}) => {
  const navigate = useNavigate();
  const { useSetStations, exit, arrival } = useTrips()
  useEffect(() => {
    const data = {
      exit: trip.exit_station_id,
      arrival: trip.arrival_station_id
    }
    useSetStations(data)
  }, [])

  const redirects = {
    detail: (id) => navigate('/trips/' + id),
  }

  return (
    <>
      <div className="row g-0 bg-light position-relative mx-2">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://images.ctfassets.net/txbhe1wabmyx/1dcXeAwolNAngGDuglWeWi/af1087111417148113c2d7fb477d5fda/photo-1477959858617-67f85cf4f1df.jpg" className="w-100" alt="..." />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Salida: {exit.name}</h5>
          <h5 className="mt-0">Llegada: {arrival.name}</h5>
          <p>Dia: {trip.date} - Duracion: {trip.time} h</p>
          <a className="stretched-link" onClick={() => redirects.detail(trip.id)}>Ver sillas disponibles</a>
        </div>
      </div>
    </>
  )
}

export default CardTrips;