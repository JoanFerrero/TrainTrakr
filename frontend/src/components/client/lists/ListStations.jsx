import {useContext} from "react";
import CardStations from '../cards/CardStations'
import { StationsContext } from "../../../context/stations/StationsProvider";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext);

  return (
    <>
      {StationsState.stations.length !== 0 ? (
        StationsState.stations.map((station) => (
          <CardStations key={station.id} station={station}/>
        ))
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListStations;