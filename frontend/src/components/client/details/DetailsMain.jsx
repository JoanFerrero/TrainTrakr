import React, { useState } from "react";
import { useRent } from '../../../hooks/useRent'
import { useNavigate } from "react-router-dom";
import CardChairs from "./CardChairs";
import AsideDetails from "./AsideDetails";
import Map from "./Map";
import Swal from 'sweetalert2';

const DetailsMain = ({trip}) => {
  const [chair, setChair] = useState(null);
  const [price, setPrice] = useState(0);
  const { useCreateRent } = useRent();
  const navigate = useNavigate();

  const setChairSelected = (chair) => {
    chair.type === 'premium' ? setPrice(30) : null;
    chair.type === 'medio' ? setPrice(20): null;
    chair.type === 'basico' ? setPrice(10): null;
    setChair(chair)
  }

  const realizarReserva1 = () => {
    useCreateRent(chair.slug)
    redirects.profile()
  }

  const realizarReserva = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres reservar este asiento de tren?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, reservar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          window.location.href = '/profile';
        }, 3000);
        useCreateRent(chair.slug)
        Swal.fire('¡Reservado!', 'El asiento ha sido reservado correctamente.', 'success');
      }
    });
  };

  const redirects = {
    profile: () => navigate('/profile'),
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <AsideDetails chair={chair} trip={trip} price={price} realizarReserva={realizarReserva}/>
      <div className="p-4 flex-1">
        <div className="mb-32">
          {trip.chairs.map((chairT) => (
            <>
              {chairT.status === 'activo' ? (
                <CardChairs chair={chairT} setChairSelected={setChairSelected} trip={trip} chairS={chair}/>
              ) : null}
            </>
          ))}
        </div>
      </div>
      <div className="p-4 flex-1 hidden min-[1220px]:block">
        <div className="mb-32">
          <Map trip={trip}/>
        </div>
      </div>
    </div>
  )
}

export default DetailsMain;