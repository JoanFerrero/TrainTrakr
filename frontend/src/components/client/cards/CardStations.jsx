import React from "react"
import { useContextHook } from "../../../hooks/useContextHook";
import { useNavigate } from "react-router-dom";

const CardStations = ({station}) => {
  const { useChangeFiler } = useContextHook();
  const navigate = useNavigate();

  const addFiler = (id) => {
    useChangeFiler(id)
    navigate('/trips')
  }
  
  return (
    <>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://media.revistaad.es/photos/60c225a79784346c97ddf38b/master/w_1600%2Cc_limit/259544.jpg" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{station.name}</h2>
        <p className="text-base leading-relaxed mt-2">{station.desc}</p>
        <a className="text-indigo-500 inline-flex items-center mt-3" onClick={() => addFiler(station.id)}>Ver Estacion
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </>
  )
}

export default CardStations