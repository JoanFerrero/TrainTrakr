import React, { useState } from 'react';
import './Tren.css'; // Importa el archivo CSS para los estilos
import { useRent } from '../../hooks/useRent';
import { useNavigate } from "react-router-dom";

const DetailTren = ({trip}) => {
  console.log(trip)
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
    <>
      <div className="row mx-2 mt-2 justify-content-md-center">
        <div className="col-sm">
        <h1>Sillas del tren</h1>
          <div className="rectangulo">
            {trip.chairs.map((chair) => (
              <>
                {chair.status === 'activo' ? (
                  <div key={chair.id} className="cuadrado_libre" onClick={()=> setChairSelected(chair)}></div>
                ) : (
                  <div key={chair.id} className="cuadrado_ocupado"></div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="col-sm mt-4">
          <div className="card">
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
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Silla seleccionada nivel: {chair.type}</h5>
                <p className="card-text">Esta silla incluye su uso el dia {trip.date}</p>
                <a onClick={() => realizarReserva()} className="btn btn-primary">Realizar reserva</a>
              </div>
            </div>
          ) : null }
        </div>
      </div>
    </>
  );
}

export default DetailTren;