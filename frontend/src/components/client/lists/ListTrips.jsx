import {useContext} from "react";
import CardTrips from '../cards/CardTrips';
import { TripsContext } from "../../../context/trips/TripsProvider";
import Button from "../filters/ButtonFilers"
const ListTrips = () => {

  const { TripsState } = useContext(TripsContext);

  return (
    <>
      <Button />
      {TripsState.trips.length !== 0 ? (
        TripsState.trips.map((trip) => (
          <CardTrips key={trip.id} trip={trip}/>
        ))
      ) : (
        <h1>No existen viajes</h1>
      )}
    </>
  )
};

export default ListTrips;