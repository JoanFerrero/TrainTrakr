import { useContext } from "react";
import { TripsContext } from "../../../context/trips/TripsProvider";
import DataList from "./DataList";

const ListTrips = () => {
  const { TripsState } = useContext(TripsContext);
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha</th>
          <th scope="col">Horas</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {TripsState.trips.map((trip) => (
          <DataList trip={trip} key={trip.id}/>
        ))}
      </tbody>
    </table>
  )
};

export default ListTrips;