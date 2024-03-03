import {useContext} from "react";
import CardTrips from '../cards/CardTrips';
import { TripsContext } from "../../../context/trips/TripsProvider";
import Button from "../filters/ButtonFilers"
const ListTrips = () => {

  const { TripsState } = useContext(TripsContext);

  return (
    <>
      <Button />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
          {TripsState.trips.length !== 0 ? (
            TripsState.trips.map((trip) => (
              <CardTrips key={trip.id} trip={trip}/>
            ))
          ) : (
            <h1>No existen viajes</h1>
          )}
          </div>
        </div>
      </section>
    </>
  )
};

export default ListTrips;