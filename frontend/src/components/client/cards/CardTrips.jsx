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
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col sm:w-64 min-[532px]:w-64 min-[409px]:w-44 min-[300px]:w-28">
          <span className="font-semibold title-font text-black text-2xl">Viaje</span>
          <span className="mt-1 text-black text-xl">{trip.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">{exit.name} - {arrival.name}</h2>
          <p className="leading-relaxed text-xl">Duracion {trip.time} h</p>
          <a className="text-indigo-500 text-xl inline-flex items-center mt-4" onClick={() => redirects.detail(trip.id)}>Saber mas
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default CardTrips;