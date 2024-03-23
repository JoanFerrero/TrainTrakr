import React, { useState } from "react";
import { useRent } from '../../../hooks/useRent'
import { useNavigate } from "react-router-dom";
import CardChairs from "./CardChairs";
import AsideDetails from "./AsideDetails";

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

  const realizarReserva = () => {
    useCreateRent(chair.slug)
    redirects.profile()
  }

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
    </div>
  )
}

export default DetailsMain;