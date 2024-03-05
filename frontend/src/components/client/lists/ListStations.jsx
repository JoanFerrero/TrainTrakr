import {useContext, useEffect, useState} from "react";
import CardStations from '../cards/CardStations'
import { StationsContext } from "../../../context/stations/StationsProvider";
import Pagination from "../../utils/Pagination";

const ListStations = ({ itemsPag = 3}) => {
  const { StationsState } = useContext(StationsContext);

  const [itemsToShow, setItemsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  useEffect(() => {
    setItemsToShow(StationsState.stations.slice(0, itemsPag))
  }, [StationsState.stations.length])

  const handleShowMore = () => {
    const startIndex = currentPage * itemsPag;
    const endIndex = Math.min(startIndex + itemsPag, StationsState.stations.length);
    const newItems = StationsState.stations.slice(itemsToShow.length, endIndex);
    setItemsToShow([...itemsToShow, ...newItems]);
  };

  return (
    <>
      {StationsState.stations.length !== 0 ? (
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {itemsToShow.length !== 0 ? (
                  <>
                    {itemsToShow.map((station) => (
                      <CardStations key={station.id} station={station}/>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </section>
          <button onClick={handleShowMore}>Mostrar Más</button>
        </>
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListStations;