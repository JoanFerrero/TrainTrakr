import React, { useState } from "react";
import { useRent } from '../../../hooks/useRent'
import { useNavigate } from "react-router-dom";
import CardChairs from "./CardChairs";

const DetailsMain = ({trip}) => {

  const [chair, setChair] = useState();
  const [price, setPrice] = useState(0);
  const { useCreateRent } = useRent();
  const navigate = useNavigate();

  const setChairSelected = (chair) => {
    chair.type === 'premium' ? setPrice(30) : null;
    chair.type === 'medio' ? setPrice(20): null;
    chair.type === 'basico' ? setPrice(10): null;
    setChair(chair)
  }

  const realizarReserva = () => {
    useCreateRent(chair.slug)
    redirects.profile()
  }

  const redirects = {
    profile: () => navigate('/profile'),
  }

  return (
      <section className="w-full bg-[url('https://tailframes.com/images/squares-bg.webp')]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-ful hidden md:block">
            <div className="w-64 text-black-500 m-8">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Salida: {trip.exit_station.name}</li>
                <li className="list-group-item">LLegada: {trip.arrival_station.name}</li>
                <li className="list-group-item">Duracion: {trip.time} h</li>
              </ul>
              <div className="card-header">
                Precio Total: {price}€
              </div>
            </div>
            {chair !== undefined ? (
              <div className="card mt-4 m-8">
                <div className="card-body">
                  <h5 className="card-title">Silla seleccionada nivel: {chair.type}</h5>
                  <p className="card-text">Esta silla incluye su uso el dia {trip.date}</p>
                  <a onClick={() => realizarReserva()} className="btn btn-primary mt-2">Realizar reserva</a>
                </div>
              </div>
            ) : null }
          </div>
          <div className="md:w-1/3 w-ful md:hidden">
            {chair !== undefined ? (
              <div className="card mt-4 m-8">
                <div className="card-body">
                  <h5 className="card-title">Silla seleccionada nivel: {chair.type}</h5>
                  <p className="card-text">Esta silla incluye su uso el dia {trip.date}</p>
                  <a onClick={() => realizarReserva()} className="btn btn-primary mt-2">Realizar reserva</a>
                </div>
              </div>
            ) : null }        
          </div>
          <div className="md:w-2/3 w-full overflow-hidden">
            <div className="2xl:w-[60rem] xl:w-[40rem] xl:h-[35rem] lg:w-[40rem] lg:h-[35rem] md:w-[32rem] md:h-[35rem] sm:w-[30rem] sm:h-[35rem] bg-gray-800 p-8 rounded-lg shadow-md overflow-y-auto mt-5 m-8">
              {trip.chairs.map((chair) => (
                <>
                  {chair.status === 'activo' ? (
                    <CardChairs chair={chair} setChairSelected={setChairSelected}trip={trip}/>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default DetailsMain;