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
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://media.revistaad.es/photos/60c225a79784346c97ddf38b/master/w_1600%2Cc_limit/259544.jpg" alt="content"/>
          <h2 className="text-3xl text-gray-900 font-medium title-font mb-4">{station.name}</h2>
          <p className="leading-relaxed text-xl">{station.desc}</p>
          <a className="text-indigo-500 inline-flex items-center mt-3" onClick={() => addFiler(station.id)}>Ver Estacion
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default CardStations