import {useContext, useState } from "react";
import CardTrips from '../cards/CardTrips';
import { TripsContext } from "../../../context/trips/TripsProvider";
import Button from "../filters/ButtonFilters"
import Pagination from "../../utils/Pagination";

const ListTrips = ({ elementsPag = 4}) => {

  const { TripsState } = useContext(TripsContext);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * elementsPag;
  const endIndex = Math.min(startIndex + elementsPag, TripsState.trips.length);

  const trips = TripsState.trips.slice(startIndex, endIndex);
  return (
    <>
      <Button />
      <div className="mb-32">
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
      </div>
    </>
  )
};

export default ListTrips;