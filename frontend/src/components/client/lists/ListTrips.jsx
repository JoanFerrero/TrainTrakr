import {useContext, useState } from "react";
import CardTrips from '../cards/CardTrips';
import { TripsContext } from "../../../context/trips/TripsProvider";
import Button from "../filters/ButtonFilers"
import Pagination from "../../utils/Pagination";
const ListTrips = ({ elementsPag = 4}) => {

  const { TripsState } = useContext(TripsContext);

  const [currentPage, setCurrentPage] = useState(1); // Página actual

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcula el índice de inicio y fin para los elementos que se mostrarán en la página actual
  const startIndex = (currentPage - 1) * elementsPag;
  const endIndex = Math.min(startIndex + elementsPag, TripsState.trips.length);

  const trips = TripsState.trips.slice(startIndex, endIndex);
  console.log(trips)

  return (
    <>
      <Button />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
          {TripsState.trips.length !== 0 ? (
            trips.map((trip) => (
              <CardTrips key={trip.id} trip={trip}/>
            ))
          ) : (
            <h1>No existen viajes</h1>
          )}
          </div>
        </div>
      </section>
      <Pagination 
        currentPage={currentPage}
        totalPages={Math.ceil(TripsState.trips.length / elementsPag)}
        onPageChange={handlePageChange}
      />
    </>
  )
};

export default ListTrips;