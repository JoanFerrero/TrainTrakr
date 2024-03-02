import {useContext} from "react";
import CardStations from '../cards/CardStations'
import { StationsContext } from "../../../context/stations/StationsProvider";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext);

  return (
    <>
      {StationsState.stations.length !== 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {StationsState.stations.map((station) => (
                <CardStations key={station.id} station={station}/>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListStations;