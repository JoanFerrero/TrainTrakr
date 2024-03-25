import {useContext, useEffect, useState} from "react";
import CardStations from '../cards/CardStations'
import { StationsContext } from "../../../context/stations/StationsProvider";

const ListStations = ({ itemsPag = 3}) => {
  const { StationsState } = useContext(StationsContext);

  const [itemsToShow, setItemsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setItemsToShow(StationsState.stations.slice(0, itemsPag))
  }, [StationsState.stations.length])

  const handleShowMore = () => {
    const startIndex = currentPage * itemsPag;
    const endIndex = Math.min(startIndex + itemsPag, StationsState.stations.length);
    const newItems = StationsState.stations.slice(itemsToShow.length, endIndex);
    setCurrentPage(currentPage + 1)
    setItemsToShow([...itemsToShow, ...newItems]);
  };

  return (
    <>
      {StationsState.stations.length !== 0 ? (
        <>
          <section className="text-gray-600 body-font">
            <div className="px-5 py-24">
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Estaciones disponibles</h1>
                  <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
              </div>
              <div className="flex flex-wrap">
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
          <div className="flex justify-center items-center mb-32">
            {StationsState.stations.length !== itemsToShow.length ? (
              <button className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer" onClick={handleShowMore}>Mostrar Más</button>
            ): null }
          </div>
        </>
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListStations;